import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Rafli Bima Pratandra",
  role: "Backend Engineer & Web Developer",
  tagline:
    "Building scalable backend systems and polished web experiences from Jakarta, Indonesia.",
  location: "Jakarta, Indonesia",
  email: "raflibima1106@gmail.com",
};

export const socialLinks = [
  {
    href: "https://github.com/raflibima25",
    icon: Github,
    label: "GitHub",
    handle: "@raflibima25",
  },
  {
    href: "https://linkedin.com/in/rafli-bima-pratandra",
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Rafli Bima Pratandra",
  },
  {
    href: "https://instagram.com/raflibp_",
    icon: Instagram,
    label: "Instagram",
    handle: "@raflibp_",
  },
  {
    href: "mailto:raflibima1106@gmail.com",
    icon: Mail,
    label: "Email",
    handle: "raflibima1106@gmail.com",
  },
];

export const stats = [
  { value: 20, label: "Happy Clients", suffix: "+" },
  { value: 65, label: "Finished Projects", suffix: "+" },
  { value: 10, label: "My Services", suffix: "+" },
];

export const skills: Record<string, { name: string; iconSlug: string }[]> = {
  Languages: [
    { name: "Go", iconSlug: "go" },
    { name: "JavaScript", iconSlug: "javascript" },
    { name: "TypeScript", iconSlug: "typescript" },
    { name: "PHP", iconSlug: "php" },
    { name: "Python", iconSlug: "python" },
  ],
  "Framework Backend": [
    { name: "Gin", iconSlug: "gin" },
    { name: "Echo", iconSlug: "go" },
    { name: "Fiber", iconSlug: "go" },
    { name: "Laravel", iconSlug: "laravel" },
    { name: "Express", iconSlug: "express" },
    { name: "Nest.js", iconSlug: "nestjs" },
  ],
  "Framework Frontend": [
    { name: "Next.js", iconSlug: "nextdotjs" },
    { name: "React", iconSlug: "react" },
    { name: "Vue.js", iconSlug: "vuedotjs" },
  ],
  Database: [
    { name: "PostgreSQL", iconSlug: "postgresql" },
    { name: "MySQL", iconSlug: "mysql" },
    { name: "MongoDB", iconSlug: "mongodb" },
    { name: "Redis", iconSlug: "redis" },
  ],
  "DevOps & Tools": [
    { name: "Docker", iconSlug: "docker" },
    { name: "Kubernetes", iconSlug: "kubernetes" },
    { name: "GCP", iconSlug: "googlecloud" },
    { name: "GitLab CI/CD", iconSlug: "gitlab" },
    { name: "Git", iconSlug: "git" },
    { name: "Nginx", iconSlug: "nginx" },
  ],
  Services: [
    { name: "gRPC", iconSlug: "grpc" },
    { name: "REST API", iconSlug: "openapiinitiative" },
    { name: "Firebase", iconSlug: "firebase" },
    { name: "Xendit", iconSlug: "x" },
    { name: "Vercel", iconSlug: "vercel" },
  ],
};

export interface ProjectType {
  name: string;
  description: string;
  image: string;
  url: string;
  repo: string;
  tech: string[];
  category?: string;
}

export const projects: ProjectType[] = [
  {
    name: "Web Portfolio",
    description: "Personal website showcasing my work and projects.",
    image: "/images/projects/image.png",
    url: "https://raflibima25.github.io/portfolio",
    repo: "https://github.com/raflibima25/portfolio",
    tech: ["HTML", "TailwindCSS"],
    category: "Frontend",
  },
  {
    name: "FinTrack (Personal Finance Management)",
    description:
      "A robust full-stack web application designed to help users track personal finances, monitor income and expenses, and visualize financial activity. It features a secure JWT and Google OAuth 2.0 authentication system, dynamic transaction management, a customizable category system, and an Excel export module for reporting.",
    image: "/images/projects/Gemini_Generated_Image_ocriewocriewocri.webp",
    url: "#",
    repo: "https://github.com/raflibima25/go-fintrack",
    tech: ["Golang", "Gin", "React.js", "Vue.js", "TailwindCSS", "PostgreSQL"],
    category: "Full Stack",
  },
  {
    name: "Cami Photobooth",
    description: "Photobooth application based on Website.",
    image:
      "/images/projects/Cami-Photobooth-Abadikan-Momen-Indahmu-08-20-2025_01_58_PM.png",
    url: "#",
    repo: "https://github.com/raflibima25/cami-photobooth",
    tech: ["HTML", "TailwindCSS", "Javascript"],
    category: "Frontend",
  },
];

export const testimonials = [
  {
    name: "Rizky Saputra",
    username: "riz***dev",
    text: "Nggak nyangka hasil websitenya bisa semulus ini. Desainnya rapi, loading cepet, dan cocok banget buat kebutuhan bisnis gue.",
  },
  {
    name: "Melisa Anggraini",
    username: "mel***art",
    text: "Profesional banget! Semua detail kecil diperhatiin, hasil akhirnya lebih bagus dari bayangan gue. Recommended sih!",
  },
  {
    name: "Dimas Arya",
    username: "dim***pro",
    text: "Kerjanya cepet, komunikatif, dan gampang diajak diskusi. Gue suka banget sama tampilan dashboard yang dibuat.",
  },
  {
    name: "Clara Natalia",
    username: "cla***ign",
    text: "Website portfolio gue sekarang tampilannya elegan banget. Bikin makin pede buat nunjukin hasil kerja ke orang-orang.",
  },
  {
    name: "Hendra Wijaya",
    username: "hen***biz",
    text: "Gue minta web company profile, hasilnya bener-bener profesional. Layout clean, warna pas, dan gampang diakses klien.",
  },
];
