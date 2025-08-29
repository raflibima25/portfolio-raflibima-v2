import { IconCloud } from "./magicui/icon-cloud";
import HeadSection from "./head-section";
import ScrollReveal from "./reactbits/scroll-reveal";
import FadeInText from "./reactbits/fade-in-text";
import FloatingElements from "./reactbits/floating-elements";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "python",
  "go"
];

function TechExperience() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  );

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="relative">
      <FloatingElements count={4} />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 relative z-10">
        <ScrollReveal direction="left" className="w-full lg:w-2/3">
          <HeadSection
            title="About me"
            highlight="Come on, get to know me now."
          />
          <FadeInText className="my-8 lg:w-[80%]" delay={0.3}>
            Hello, I am Rafli Bima Pratandra, a graduate of Vocational High School
            majoring in Computer Network Engineering, I am a proactive individual,
            result-oriented and able to work well in a team or individually.
            Always looking for opportunities to learn and grow, and ready to
            provide valuable contributions to the team.
          </FadeInText>
        </ScrollReveal>
        <ScrollReveal direction="right" className="w-full lg:w-1/3 -mt-10 lg:mt-0" delay={0.2}>
          <TechExperience />
        </ScrollReveal>
      </div>
    </div>
  );
}
