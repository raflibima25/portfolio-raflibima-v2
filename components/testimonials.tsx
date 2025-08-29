import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";
import { Marquee } from "./magicui/marquee";
import HeadSection from "./head-section";
import Card3D from "./reactbits/card-3d";
import ScrollReveal from "./reactbits/scroll-reveal";

interface TestimonialsProps {
  name: string;
  username: string;
  image?: string;
  text: string;
}

const reviews: TestimonialsProps[] = [
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

function ReviewCard(client: TestimonialsProps) {
  return (
    <Card3D className="w-70 h-full" intensity={0.2} glowIntensity={0.1}>
      <Card className="w-70 h-full bg-background/80 backdrop-blur-sm border border-border/50">
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
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
      </div>
    </ScrollReveal>
  );
}
