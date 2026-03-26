import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";
import { Marquee } from "./magicui/marquee";
import HeadSection from "./head-section";
import Card3D from "./reactbits/card-3d";
import ScrollReveal from "./reactbits/scroll-reveal";
import { testimonials } from "@/lib/data";

interface TestimonialsProps {
  name: string;
  username: string;
  image?: string;
  text: string;
}

function ReviewCard(client: TestimonialsProps) {
  return (
    <Card3D className="w-80 h-full" intensity={0.1} glowIntensity={0.1}>
      <Card className="w-80 h-full bg-background/80 backdrop-blur-sm border border-border/50 border-l-2 border-l-hli relative overflow-hidden">
        <span className="absolute top-2 right-4 text-6xl leading-none text-hli/20 font-serif select-none pointer-events-none">
          &ldquo;
        </span>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage
                src={client.image}
                alt={client.name}
                className="object-cover"
              />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{client.name}</h3>
              <p className="text-xs text-muted-foreground">
                @{client.username}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">{client.text}</p>
        </CardContent>
      </Card>
    </Card3D>
  );
}

export default function Testimonials() {
  return (
    <ScrollReveal direction="up" distance={30}>
      <HeadSection
        title="Testimonials"
        highlight="Some Testimonials from Happy Client."
      />
      <div className="w-full flex items-center justify-center overflow-hidden relative mt-5">
        <Marquee className="[--duration: 20s]">
          {testimonials.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
      </div>
    </ScrollReveal>
  );
}
