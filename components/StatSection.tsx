import React from "react";
import { Container } from "./ui/global/Container";
import Box from "./ui/global/Box";
import { FaPlus } from "react-icons/fa";

function StatSection() {
  const achievements = [
    { id: 1, value: 250, label: "Trusted by 250 clients" },
    { id: 2, value: 1000, label: "Classes so Far" },
    { id: 3, value: "4.9/5", label: "Average Opinion" },
  ];
  return (
    <Container className="bg-secondary text-primary p-8 ">
      {achievements.map((el) => {
        return (
          <Box key={el.id} className="flex justify-between items-center">
            <h1 className=" flex items-center text-4-5xl text-primary">{el.value}<FaPlus className="size-6" /></h1>
            <p className="text-lg">{el.label}</p>
          </Box>
        );
      })}
    </Container>
  );
}

export default StatSection;
