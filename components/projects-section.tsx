import React from "react";
import Image from "next/image";
import { ArrowRightCircle, Eye } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ShineBorder } from "./magicui/shine-border";
import Link from "next/link";
import HeadSection from "./head-section";
import BounceCard from "./reactbits/bounce-card";
import HoverCard from "./reactbits/hover-card";

interface ProjectType {
  name: string;
  description: string;
  image: string;
  url: string;
  repo: string;
  tech: string[];
}

const Projects: ProjectType[] = [
  {
    name: "Web Portfolio",
    description: "Personal website showcasing my work and projects.",
    image: "/images/projects/image.png",
    url: "https://raflibima25.github.io/portfolio",
    repo: "https://github.com/raflibima25/portfolio",
    tech: ["HTML", "TailwindCSS"],
  },
  {
    name: "Financial Tracker (Fintrack)",
    description:
      "A web application to track personal finances, expenses, and budgets.",
    image: "/images/projects/Financial-Tracker-08-20-2025_11_52_AM.png",
    url: "#",
    repo: "https://github.com/raflibima25/go-fintrack",
    tech: ["Golang", "Vue.js", "TailwindCSS"],
  },
  {
    name: "Cami Photobooth",
    description: "Photobooth application based on Website.",
    image: "/images/projects/Cami-Photobooth-Abadikan-Momen-Indahmu-08-20-2025_01_58_PM.png",
    url: "#",
    repo: "https://github.com/raflibima25/cami-photobooth",
    tech: ["HTML", "TailwindCSS", "Javascript"],
  },
];

function DetailProject({
  children,
  project,
}: {
  children: React.ReactNode;
  project: ProjectType;
}) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-w-xl w-full text-sm font-poppins tracking-wide">
          <DialogHeader>
            <DialogTitle>Detail Project</DialogTitle>
            <DialogDescription>Project Name: {project.name}</DialogDescription>
          </DialogHeader>
          <div className="py-1">
            <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={338}
              className="rounded-lg aspect-[16/9] object-cover border border-border"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="flex flex-col gap-2 mt-4">
              <h4 className="font-semibold">Description</h4>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <h4 className="font-semibold">Tech Stack</h4>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-hli/20 text-hli px-2 py-1 rounded-lg text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button asChild variant="outline">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </Button>
            <Button asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function ProjectSection() {
  return (
    <>
      <HeadSection
        title="My Projects"
        highlight="Here are some projects i have worked on."
        note="* Click image for project detail"
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {Projects.map((project, i) => (
          <BounceCard
            key={i}
            className="col-span-1"
            delay={i * 0.1}
            bounceScale={1.03}
          >
            <HoverCard
              className="group p-2 rounded-lg bg-background shadow-md relative overflow-hidden cursor-zoom-in"
              rotateX={5}
              rotateY={5}
              translateY={-8}
            >
              <ShineBorder shineColor={["#008080", "#FE8FB5", "#FFBE7B"]} />
              <DetailProject project={project}>
                <div className="w-full h-full relative">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 text-slate-300 transition-opacity duration-300 group-hover:opacity-100 opacity-0 rounded-lg flex flex-col items-center justify-center gap-1">
                    <span>
                      <Eye className="h-6 w-6" />
                    </span>
                    <span className="text-xs ">PROJECT DETAIL</span>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={225}
                    className="rounded-lg aspect-[16/9] object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </DetailProject>
            </HoverCard>
          </BounceCard>
        ))}
      </div>
      <div className="w-full  flex justify-center items-center mt-6">
        <Link
          href="https://github.com/raflibima25"
          className="flex items-center text-semibold space-x-2"
          target="_blank"
        >
          <span>See more on Github</span>
          <span>
            <ArrowRightCircle />
          </span>
        </Link>
      </div>
    </>
  );
}
