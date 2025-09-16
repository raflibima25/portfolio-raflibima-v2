"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import LikeButton from "./like-button";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/raflibima25",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/rafli-bima-pratandra",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:raflibimapratandra@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  const techStack = [
    {
      desc: "Built with",
      name: "Next.js",
      icon: "/svg/nextjs.svg",
      alt: "Next.js Logo",
    },
    {
      desc: "Styled with",
      name: "TailwindCSS",
      icon: "/svg/tailwindcss.svg",
      alt: "TailwindCSS Logo",
    },
    {
      desc: "Deployed on",
      name: "Vercel",
      icon: "/svg/vercel.svg",
      alt: "Vercel Logo",
    },
  ];

  return (
    <footer className="w-full py-12 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Social Links Section */}
          <div className="flex flex-col lg:items-start items-center space-y-6 gap-9">
            <div className="flex space-x-6 sm:space-x-8">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                    aria-label={link.label}
                  >
                    <div className="text-muted-foreground hover:text-foreground transition duration-300 ease-in-out">
                      <IconComponent className="size-8" />
                    </div>
                  </a>
                );
              })}
            </div>
            <LikeButton />
          </div>

          {/* Tech Stack Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="grid grid-cols-1 gap-3 w-full max-w-xs py-6">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-normal space-x-3">
                  <span className="text-muted-foreground text-sm">
                    {tech.desc}
                  </span>
                  <img
                    src={tech.icon}
                    alt={tech.alt}
                    className="h-5 w-5 object-contain filter brightness-0 invert opacity-50 dark:filter dark:brightness-0 dark:invert dark:opacity-50"
                    loading="lazy"
                  />
                  <span className="text-muted-foreground text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Spotify Playlist Section */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="w-full max-w-xs">
              <iframe
                style={{ borderRadius: "12px", border: "0" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWNlpCR5sp9C?utm_source=generator&theme=0&locale=en_US"
                className="w-full h-40"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-muted-foreground">
            <span className="block sm:inline">
              Copyright © {new Date().getFullYear()}{" "}
              <a 
                href="https://github.com/raflibima25"
                className="hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rafli Bima Pratandra
              </a>
              . All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;