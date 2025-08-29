"use client";

import AnimatedButton from "./reactbits/animated-button";
import MagneticButton from "./reactbits/magnetic-button";
import ScrollReveal from "./reactbits/scroll-reveal";
import FadeInText from "./reactbits/fade-in-text";
import AnimatedGradient from "./reactbits/animated-gradient";

export default function ContactMe() {
  const handlerClick = (type: string) => {
    if (type === "email") {
      window.open("mailto:raflibima1106@gmail.com");
    } else if (type === "instagram") {
      window.open("https://instagram.com/raflibp_");
    } else if (type === "wa") {
      window.open("https://wa.me/62895602523164/?text=Hallo");
    }
  };

  return (
    <AnimatedGradient className="p-8 rounded-xl">
      <ScrollReveal direction="up" className="space-y-8">
        <FadeInText className="text-xl lg:text-3xl font-light text-foreground/70 max-w-2xl w-full" delay={0.2}>
          Contact me in one of the ways below to discuss my work, explore
          projects, or book my services
        </FadeInText>
        <div className="flex items-center flex-wrap gap-3">
          <MagneticButton className="relative bg-blue-800">
            <AnimatedButton
              variant="shine"
              onClick={() => handlerClick("email")}
              className="px-4 py-2 text-sm font-light text-white bg-primary rounded-md hover:bg-primary/90"
              glowColor="rgba(59, 130, 246, 0.4)"
            >
              Email
            </AnimatedButton>
          </MagneticButton>
          
          <MagneticButton className="relative">
            <AnimatedButton
              variant="glow"
              onClick={() => handlerClick("instagram")}
              className="px-4 py-2 text-sm bg-gradient-to-br from-purple-600 to-pink-600 text-white font-light rounded-md border border-transparent"
              glowColor="rgba(168, 85, 247, 0.4)"
            >
              Instagram
            </AnimatedButton>
          </MagneticButton>
          
          <MagneticButton className="relative">
            <AnimatedButton
              variant="bounce"
              onClick={() => handlerClick("wa")}
              className="px-4 py-2 text-sm bg-green-600 text-white font-light rounded-md hover:bg-green-700"
              glowColor="rgba(34, 197, 94, 0.4)"
            >
              WhatsApp
            </AnimatedButton>
          </MagneticButton>
        </div>
      </ScrollReveal>
    </AnimatedGradient>
  );
}
