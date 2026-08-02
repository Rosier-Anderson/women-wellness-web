import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { trainers } from "@/constants";

export default function TrainerCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        {trainers.map((trainer) => (
          <CarouselItem className="flex justify-center" key={trainer.id}>
            <div className="p-1 ">{trainer.name}</div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="bg-primary text-white border-none size-12" />
      <CarouselNext className="bg-primary text-white border-none size-12" />
    </Carousel>
  );
}

