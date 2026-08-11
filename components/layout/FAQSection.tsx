import React from "react";
import { Container } from "../ui/global/Container";

import AccordionMultiple from "../ui/accordion-multiple";
import { SectionHeader } from "../ui/SectionHeader";


export default function FAQSection() {
  return (
    <Container className="max-w-4xl flex flex-col sm:flex-row mx-auto my-0 ">
      {" "}
      <SectionHeader
        className="flex justify-center items-center"
        btnText="FAQ"
        title="Frequently Asked Questions"
        description="Got questions? We’ve got answers. Whether you're new to yoga, curious about our memberships, or wondering what to bring to your first class."
      />
      <AccordionMultiple/>
    </Container>
  );
}
