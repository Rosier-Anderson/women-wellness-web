import React from "react";
import { Container } from "../ui/global/Container";
import { TrainerCarousel } from "../TrainerCarousel";
const content = {
  badge: "Our Trainers",
  heading: <h1>Ellie Wilson</h1>,
  description: (
    <p>
      John has over 10 years of experience in training and development. He
      specializes in creating engaging learning experiences that empower
      individuals to reach their full potential. His passion for education and
      commitment to excellence make him a valuable asset to our team.
    </p>
  ),
  primaryButton: {
    label: "",
    href: "/"
  }


};
function TrainerSection() {
  return (
    <Container className="">
        <TrainerCarousel/>
    </Container>
  );                 
}

export default TrainerSection;
