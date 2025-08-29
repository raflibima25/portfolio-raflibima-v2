import React from "react";
import AdvancedLoading from "@/components/reactbits/advanced-loading";
import ParticleField from "@/components/reactbits/particle-field";
import Typewriter from "@/components/reactbits/typewriter";

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-background flex justify-center items-center relative overflow-hidden">
      <ParticleField particleCount={15} />
      <div className="text-center space-y-6 z-10 relative">
        <AdvancedLoading variant="orbit" size="lg" />
        <Typewriter 
          text="Loading amazing content..."
          className="text-muted-foreground font-medium"
          speed={60}
          delay={500}
        />
      </div>
    </div>
  );
}
