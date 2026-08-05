
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { trainers } from "@/constants";
import { SectionHeader } from "./ui/SectionHeader";


export const TrainerCarousel = ()  => {
  return (
    <Carousel className="relative">
      <CarouselContent className="">
        {trainers.map((trainer) => (
          <CarouselItem className="flex justify-center " key={trainer.id}>
          <SectionHeader btnText="Our Trainers" title={trainer.name} description={trainer.description}/>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="bg-primary text-white border-none size-12" />
      <CarouselNext className="bg-primary text-white border-none size-12" />
    </Carousel>
  );
}

