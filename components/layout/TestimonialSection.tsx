import React from "react";
import { Container } from "../ui/global/Container";
import { SurfaceLink } from "../ui/global/SurfaceLink";
import { GoDotFill } from "react-icons/go";
import SectionHeader from "../ui/SectionHeader";

export default function TestimonialSection() {
  return (
    <Container id="testimonial-section" className="">
      <SectionHeader
        className="flex justify-center items-center"
        btnText="Testimonials"
        title="What Our Clients Say"
        description="Don’t just take our word for it — hear from the incredible individuals who’ve experienced the transformation."
      />
      
    </Container>
  );
}
