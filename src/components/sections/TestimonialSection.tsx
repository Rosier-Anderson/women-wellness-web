import React from "react";
import { Container } from "@/components/ui/global/Container";
import { SurfaceLink } from "@/components/ui/global/SurfaceLink";
import { GoDotFill } from "react-icons/go";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Box from "@/components/ui/global/Box";


export default function TestimonialSection() {
  return (
    <Container id="testimonial-section" className="">
      <Box className="flex lg:flex-1 flex-col gap-2 justify-center items-center">
        <SectionHeading
          badgeClassName="w-fit mt-6 mb-4"
          titleClassName="text-4-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl"
          descClassName="flex-1 min-w-0 text-xl leading-relaxed"
          badge="Testimonials"
          title="What Our Clients Say"
          desc="Don’t just take our word for it — hear from the incredible individuals who’ve experienced the transformation."
        />
      </Box>
      
    </Container>
  );
}
