import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import SplitText from "./reactbits/split-text";
import Typewriter from "./reactbits/typewriter";
import FadeInText from "./reactbits/fade-in-text";
import PixelTransition from "./reactbits/pixel-transition";

export default function ProfileCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full md:w-2/6">
            <PixelTransition
              firstContent={
                <Image
                  src="/images/PP_Bima_cleanup.jpg"
                  alt="Photo Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDyCDlT2mEm4jYRmJbhKgfFhq1z8bMmNCXgNdHbDyCwBCaOgDk1mUCinNgpGYvhA4wZVAwGhQTowqwqh6tCCPQPAa9o6IKvIuPgOw9Vy5AGYlXpUoqCW8ADI3GqAAAAAEOQ6j/9k="
                />
              }
              secondContent={
                <div className="w-full h-full flex items-center justify-center bg-[#111] text-white">
                  <div className="text-center">
                    <p className="text-4xl font-semibold">gracias!</p>
                    {/* <p className="text-sm opacity-90">Backend Engineer</p> */}
                  </div>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="w-full rounded-tl-xl rounded-br-xl border border-border overflow-hidden"
              style={{ width: "100%" }}
              aspectRatio="100%"
            />
          </div>
          <div className="w-full md:w-4/6">
            <FadeInText className="text-sm font-semibold text-muted-foreground/70" delay={0.2}>
              Hi dear, I am
            </FadeInText>
            <SplitText className="font-medium text-3xl" delay={0.5}>
              Rafli Bima Pratandra.
            </SplitText>
            <div className="mt-3">
              <Typewriter 
                text="As a Backend Engineer & Web Developer based in Indonesia"
                className="text-sm text-foreground/70"
                delay={1500}
                speed={30}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
