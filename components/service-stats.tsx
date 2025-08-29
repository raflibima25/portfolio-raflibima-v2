import React from "react";
import { Card, CardContent } from "./ui/card";
import { NumberTicker } from "./magicui/number-ticker";
import StaggerContainer from "./reactbits/stagger-container";
import Card3D from "./reactbits/card-3d";

export default function ServiceStats() {
  return (
    <StaggerContainer className="w-full grid grid-cols-6 gap-3" staggerDelay={0.15}>
      <div className="col-span-3 md:col-span-2">
        <Card3D intensity={0.15} glowIntensity={0.2}>
          <Card className="bg-background/80 backdrop-blur-sm border border-border/50">
            <CardContent>
              <h3 className="text-xl font-bold text-center text-hli">
                <NumberTicker value={20} className="text-hli" />+
              </h3>
              <p className="text-xs text-center mt-3">Happy Clients</p>
            </CardContent>
          </Card>
        </Card3D>
      </div>
      <div className="col-span-3 md:col-span-2">
        <Card3D intensity={0.15} glowIntensity={0.2}>
          <Card className="bg-background/80 backdrop-blur-sm border border-border/50">
            <CardContent>
              <h3 className="text-xl font-bold text-center text-hli">
                <NumberTicker value={65} className="text-hli" />+
              </h3>
              <p className="text-xs text-center mt-3">Finished Projects</p>
            </CardContent>
          </Card>
        </Card3D>
      </div>
      <div className="col-span-6 md:col-span-2">
        <Card3D intensity={0.15} glowIntensity={0.2}>
          <Card className="bg-background/80 backdrop-blur-sm border border-border/50">
            <CardContent>
              <h3 className="text-xl font-bold text-center text-hli">
                <NumberTicker value={10} className="text-hli" />+
              </h3>
              <p className="text-xs text-center mt-3">My Services</p>
            </CardContent>
          </Card>
        </Card3D>
      </div>
    </StaggerContainer>
  );
}
