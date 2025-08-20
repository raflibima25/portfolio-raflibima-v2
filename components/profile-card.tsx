import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function ProfileCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full md:w-2/6 bg-linear-to-r from-hli via-sky-300 to-hli rounded-tl-xl rounded-br-xl  border border-border overflow-hidden">
            <Image
              src="/images/PP_Bima_cleanup.jpg"
              alt="Foto"
              width={1000}
              height={1000}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="w-full md:w-4/6">
            <span className="text-sm font-semibold text-muted-foreground/70">
              Hi dear, I am
            </span>
            <h1 className="font-medium text-3xl">Rafli Bima Pratandra.</h1>
            <p className="text-sm text-foreground/70 mt-3">
              As a Backend Engineer & Web Developer based in Indonesia
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
