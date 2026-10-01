import React from "react";
import { Container } from "@/components/ui/global/Container";

import ContactForm from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Box from "@/components/ui/global/Box";



export default function ContactSection() {
  return (
    <Container className="flex flex-col gap-12">
      <Box className="flex lg:flex-1 flex-col gap-2 justify-center items-center">
        <SectionHeading
          badgeClassName="w-fit mt-6 mb-4"
          titleClassName="text-4-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl"
          descClassName="flex-1 min-w-0 text-xl leading-relaxed"
          badge="Contact"
          title="Let’s Connect, We’re Here for You"
          desc="Have questions about classes or memberships? We’d love to hear from you. Drop us a message, give us a call, or stop by the studio."
        />
      </Box>
      {/* contact form */}
      <ContactForm />
      {/* Image will go here!! */}
    </Container>
  );
}
