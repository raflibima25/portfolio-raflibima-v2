"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import HeadSection from "./head-section";
import ScrollReveal from "./reactbits/scroll-reveal";
import AnimatedButton from "./reactbits/animated-button";
import { projects } from "@/lib/data";

export default function ProjectSection() {
  return (
    <>
      <ScrollReveal direction="up" distance={20}>
        <HeadSection
          title="My Projects"
          highlight="Here are some projects I have worked on."
        />
      </ScrollReveal>

      <div className="flex flex-col gap-16 mt-10">
        {projects.map((project, i) => {
          const isEven = i % 2 === 1;
          return (
            <ScrollReveal
              key={i}
              direction="up"
              distance={40}
              delay={i * 0.1}
            >
              <div
                className={`flex flex-col ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } gap-6 md:gap-10 items-center`}
              >
                {/* Image side */}
                <div className="w-full md:w-7/12 overflow-hidden rounded-lg group">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={800}
                    height={450}
                    className="aspect-[16/9] object-cover rounded-lg transition-transform duration-500 group-hover:scale-[1.05]"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                </div>

                {/* Text side */}
                <div className="w-full md:w-5/12 space-y-4">
                  {project.category && (
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {project.category}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="bg-hli/10 text-hli text-xs px-2.5 py-1 rounded-md border border-hli/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    {project.url !== "#" && (
                      <AnimatedButton
                        variant="slide"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-hli/10 text-hli border border-hli/20 rounded-md hover:bg-hli/20"
                        onClick={() =>
                          window.open(project.url, "_blank", "noopener")
                        }
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </AnimatedButton>
                    )}
                    <AnimatedButton
                      variant="slide"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-md hover:border-hli/50"
                      onClick={() =>
                        window.open(project.repo, "_blank", "noopener")
                      }
                    >
                      Source Code
                      <ArrowRight className="w-4 h-4" />
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="w-full flex justify-center items-center mt-12">
        <AnimatedButton
          variant="slide"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-border rounded-md hover:border-hli/50"
          onClick={() =>
            window.open(
              "https://github.com/raflibima25",
              "_blank",
              "noopener"
            )
          }
        >
          See more on GitHub
          <ArrowRight className="w-4 h-4" />
        </AnimatedButton>
      </div>
    </>
  );
}
