"use client";

import { useEffect, useState } from "react";
import { throttle } from "@/lib/performance";

interface ActiveSectionDetectorProps {
  sections: string[];
  offset?: number;
  onActiveChange?: (activeSection: string) => void;
}

export function useActiveSection(
  sections: string[],
  offset: number = 100
): string {
  const [activeSection, setActiveSection] = useState<string>(sections[0] || "");

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + offset;

      // Check if we're at the top of the page
      if (scrollPosition < 200) {
        setActiveSection("");
        return;
      }

      // Find the active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId.replace("#", ""));
        
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, offset]);

  return activeSection;
}

export default function ActiveSectionDetector({
  sections,
  offset = 100,
  onActiveChange
}: ActiveSectionDetectorProps) {
  const activeSection = useActiveSection(sections, offset);

  useEffect(() => {
    if (onActiveChange) {
      onActiveChange(activeSection);
    }
  }, [activeSection, onActiveChange]);

  return null; // This is a utility component, no UI
}