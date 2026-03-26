"use client";

import { skills } from "@/lib/data";
import HeadSection from "./head-section";
import ScrollReveal from "./reactbits/scroll-reveal";
import StaggerContainer from "./reactbits/stagger-container";
import { motion } from "framer-motion";
import Image from "next/image";

function SkillItem({ name, iconSlug }: { name: string; iconSlug: string }) {
  return (
    <motion.div
      className="flex items-center gap-2 bg-card/50 border border-border/30 px-3 py-2 rounded-md hover:border-hli/50 transition-colors"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={`https://cdn.simpleicons.org/${iconSlug}`}
        alt={name}
        width={16}
        height={16}
        className="w-4 h-4 dark:invert dark:brightness-200 opacity-70"
        unoptimized
      />
      <span className="text-sm text-foreground/80">{name}</span>
    </motion.div>
  );
}

export default function TechnicalSkills() {
  const categories = Object.entries(skills);

  return (
    <ScrollReveal direction="up" distance={30}>
      <HeadSection
        title="Technical Skills"
        highlight="What I work with daily."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {categories.map(([category, items], i) => (
          <StaggerContainer
            key={category}
            className="space-y-3"
            staggerDelay={0.05}
            initialDelay={i * 0.1}
          >
            <h4 className="text-xs uppercase tracking-widest text-hli font-semibold">
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  iconSlug={skill.iconSlug}
                />
              ))}
            </div>
          </StaggerContainer>
        ))}
      </div>
    </ScrollReveal>
  );
}
