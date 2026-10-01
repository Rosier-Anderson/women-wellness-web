
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { trainers } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Box from "@/components/ui/global/Box";



export const TrainerCarousel = ()  => {
  return (
    <Carousel className="relative">
      <CarouselContent className="">
        {trainers.map((trainer) => (
          <CarouselItem className="flex justify-center " key={trainer.id}>
          <Box className="flex lg:flex-1 flex-col gap-2">
            <SectionHeading
              badgeClassName="w-fit mt-6 mb-4"
              titleClassName="text-4-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl"
              descClassName="flex-1 min-w-0 text-xl leading-relaxed"
              badge="Our Trainers"
              title={trainer.name}
              desc={trainer.description}
            />
          </Box>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="bg-primary text-text-primary border-none size-12" />
      <CarouselNext className="bg-primary text-text-primary border-none size-12" />
    </Carousel>
  );
}

