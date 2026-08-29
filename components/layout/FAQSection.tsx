import React from "react";
import { Container } from "../ui/global/Container";
import AccordionMultiple from "../ui/accordion-multiple";
import { SectionHeading } from "../SectionHeading";
import Box from "../ui/global/Box";

export default function FAQSection() {
  return (
    <Container className="mx-auto mt-20 flex max-w-4xl flex-col items-center">
  <Box className="my-10 flex flex-col items-center">
    <SectionHeading
      titleClassName="text-center text-[clamp(2.5rem,8vw,4rem)] font-bold leading-[1.3] tracking-tight"
      descClassName="w-full max-w-2xl text-center text-xl leading-relaxed"
      badge="FAQ"
      title={<>Frequently Asked Questions</>}
      desc="Got questions? We’ve got answers. Whether you're new to yoga, curious about our memberships, or wondering what to bring to your first class."
    />
  </Box>

  <AccordionMultiple />
</Container>
  );
}
