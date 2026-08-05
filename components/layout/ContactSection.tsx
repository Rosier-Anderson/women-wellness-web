import React from "react";
import { Container } from "../ui/global/Container";

import ContactForm from "../ui/contact-form";
import { SectionHeader } from "../ui/SectionHeader";

export default function ContactSection() {
  return (
    <Container className="">
      <SectionHeader
        className="flex justify-center items-center"
        btnText="Contact"
        title="Let’s Connect, We’re Here for You"
        description="Have questions about classes or memberships? We’d love to hear from you. Drop us a message, give us a call, or stop by the studio."
      />
      {/* contact form */}
      <ContactForm />
      {/* Image will go here!! */}
    </Container>
  );
}
