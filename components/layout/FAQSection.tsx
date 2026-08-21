import React from "react";
import { Container } from "../ui/global/Container";
import AccordionMultiple from "../ui/accordion-multiple";
import { SectionHeading } from "../SectionHeading";
import Box from "../ui/global/Box";

export default function FAQSection() {
  return (
    <Container className="max-w-4xl flex flex-col mx-auto my-0 mt-20 ">
      {" "}
      <Box className="flex flex-col items-center my-10">
        <SectionHeading
           titleClassName=" text-[clamp(2.5rem,8vw,4rem)] text-center font-bold leading-[1.3] tracking-tight"
           descClassName="w-sm sm:w-2xl  text-xl text-center leading-relaxed"
          badge="FAQ"
          title={<>Frequently Asked Questions</>}
          desc="Got questions? We’ve got answers. Whether you're new to yoga, curious about our memberships, or wondering what to bring to your first class."
        />
      </Box>
      <AccordionMultiple />
    </Container>
  );
}
