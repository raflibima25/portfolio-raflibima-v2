"use client";

import { MoonIcon, SunMoonIcon } from "lucide-react";
import { HoverTitle } from "./navbar-menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <HoverTitle title="Toggle Dark/Light Mode">
        <div className="cursor-pointer">
          <div className="w-6 h-6" />
        </div>
      </HoverTitle>
    );
  }

  return (
    <HoverTitle title="Toggle Dark/Light Mode">
      <div
        className="cursor-pointer"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <MoonIcon className="transition-all duration-300" />
        ) : (
          <SunMoonIcon className="transition-all duration-300" />
        )}
      </div>
    </HoverTitle>
  );
}
