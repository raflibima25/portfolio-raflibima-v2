"use client";

import Image from "next/image";
import SplitText from "./reactbits/split-text";
import Typewriter from "./reactbits/typewriter";
import FadeInText from "./reactbits/fade-in-text";
import PixelTransition from "./reactbits/pixel-transition";
import { NumberTicker } from "./magicui/number-ticker";
import MagneticButton from "./reactbits/magnetic-button";
import { personalInfo, socialLinks, stats } from "@/lib/data";

export default function ProfileCard() {
  return (
    <section className="w-full" id="home">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left — Photo */}
        <div className="w-full md:w-5/12 border-l-4 border-hli pl-4">
          <PixelTransition
            firstContent={
              <Image
                src="/images/PP_Bima_cleanup.jpg"
                alt="Photo Profile"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, 40vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDyCDlT2mEm4jYRmJbhKgfFhq1z8bMmNCXgNdHbDyCwBCaOgDk1mUCinNgpGYvhA4wZVAwGhQTowqwqh6tCCPQPAa9o6IKvIuPgOw9Vy5AGYlXpUoqCW8ADI3GqAAAAAEOQ6j/9k="
              />
            }
            secondContent={
              <div className="w-full h-full flex items-center justify-center bg-[#111] text-white">
                <div className="text-center">
                  <p className="text-4xl font-semibold">gracias!</p>
                </div>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="w-full rounded-tl-2xl rounded-br-2xl border border-border overflow-hidden"
            style={{ width: "100%" }}
            aspectRatio="100%"
          />
        </div>

        {/* Right — Info */}
        <div className="w-full md:w-7/12 space-y-4">
          <FadeInText
            className="text-sm font-semibold text-muted-foreground/70"
            delay={0.2}
          >
            Hi dear, I am
          </FadeInText>
          <SplitText className="font-bold text-4xl md:text-5xl" delay={0.5}>
            {personalInfo.name + "."}
          </SplitText>
          <div>
            <Typewriter
              text={personalInfo.role}
              className="text-lg text-hli font-medium"
              delay={1500}
              speed={30}
            />
          </div>
          <FadeInText
            className="text-sm text-muted-foreground leading-relaxed max-w-lg"
            delay={0.8}
          >
            {personalInfo.tagline}
          </FadeInText>

          {/* Stats row */}
          <div className="flex items-center gap-6 pt-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-hli pl-3"
              >
                <h3 className="text-2xl font-bold text-hli">
                  <NumberTicker value={stat.value} className="text-hli" />
                  {stat.suffix}
                </h3>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Social links row */}
          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <MagneticButton key={link.label} strength={0.3} range={150}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-muted-foreground hover:text-hli transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </MagneticButton>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
