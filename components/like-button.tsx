"use client";

import React, { useState, useEffect } from "react";
import { doc, onSnapshot, updateDoc, increment, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Heart } from "lucide-react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [animateLikes, setAnimateLikes] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isFirebaseConfigured, setIsFirebaseConfigured] = useState(true);

  useEffect(() => {
    setIsClient(true);

    const storedIsLiked = localStorage.getItem("websiteIsLiked");
    if (storedIsLiked) {
      setIsLiked(storedIsLiked === "true");
    }

    // Check if Firebase is properly configured
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      setIsFirebaseConfigured(false);
      setLikes(42); // Fallback static number
      return;
    }

    // Listen for realtime updates from Firestore
    const likeDocRef = doc(db, "likes", "counter");
    const unsubscribe = onSnapshot(
      likeDocRef, 
      (docSnap) => {
        if (docSnap.exists()) {
          const currentLikes = docSnap.data().likes;
          setLikes(Math.max(0, currentLikes));
          setAnimateLikes(true);
          setTimeout(() => setAnimateLikes(false), 300);
        } else {
          // Document doesn't exist, create it with initial value
          setDoc(likeDocRef, { likes: 0 }).catch(console.error);
          setLikes(0);
        }
      },
      (error) => {
        console.error("Firebase error:", error);
        setIsFirebaseConfigured(false);
        setLikes(42); // Fallback static number
      }
    );

    return () => unsubscribe();
  }, []);

  const triggerLikeAnimation = () => {
    setTriggerAnimation(true);
    setTimeout(() => {
      setTriggerAnimation(false);
    }, 300);
  };

  const handleLike = async () => {
    if (isProcessing) return;

    if (isLiked) {
      triggerLikeAnimation();
      return;
    }

    // If Firebase is not configured, just animate locally
    if (!isFirebaseConfigured) {
      setIsLiked(true);
      localStorage.setItem("websiteIsLiked", "true");
      triggerLikeAnimation();
      setLikes(prev => prev + 1);
      return;
    }

    try {
      setIsProcessing(true);
      const likeDocRef = doc(db, "likes", "counter");
      await updateDoc(likeDocRef, {
        likes: increment(1),
      });
      setIsLiked(true);
      localStorage.setItem("websiteIsLiked", "true");
      triggerLikeAnimation();
    } catch (error) {
      console.error("Error updating likes:", error);
      // Fallback to local increment if Firebase fails
      setIsLiked(true);
      localStorage.setItem("websiteIsLiked", "true");
      triggerLikeAnimation();
      setLikes(prev => prev + 1);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isClient) return null;

  return (
    <div className="flex items-center">
      <button
        onClick={handleLike}
        disabled={isProcessing}
        className={`hover:scale-105 hover:cursor-pointer group relative w-44 h-12 flex items-center justify-center p-3 rounded-full transition-all duration-300 ease-in-out transform border-2 ${
          isLiked
            ? "border-red-500"
            : "border-indigo-500 hover:border-indigo-700"
        } ${triggerAnimation ? "animate-pulse" : ""}`}
      >
        <Heart
          className={`w-6 h-6 transition-all duration-300 ease-in-out ${
            isLiked
              ? "text-red-500 scale-110 fill-red-500"
              : "text-indigo-500 group-hover:text-indigo-700 group-hover:scale-105"
          } ${triggerAnimation ? "animate-bounce" : ""}`}
        />
        <span
          className={`text-sm pl-3 transition-all duration-300 ease-in-out ${
            animateLikes ? "animate-pulse" : ""
          } text-foreground`}
        >
          {likes} Likes
        </span>
      </button>
    </div>
  );
};

export default LikeButton;