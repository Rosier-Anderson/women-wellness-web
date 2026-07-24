import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { trainers } from "@/constants"

export default function TrainerCarousel() {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {Array.from(trainers).map((trainer, index) => (
          <CarouselItem className="border-2" key={index}>
           
             
              {trainer.name}
                
         
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-primary"/>
      <CarouselNext className="bg-primary text-white size-5"/>
    </Carousel>
  )
}
