import React from "react";

import { FaPlus } from "react-icons/fa";
import { Container } from "../ui/global/Container";
import Box from "../ui/global/Box";


function StatSection() {
  const achievements = [
    { id: 1, value: 250, label: "Trusted by 250 clients" },
    { id: 2, value: 1000, label: "Classes so Far" },
    { id: 3, value: "4.9/5", label: "Average Opinion" },
  ];
  return (
    <Container id="stat-section" className="flex flex-col sm:flex-row sm:justify-center bg-secondary text-accent rounded-2xl divide-y sm:divide-x sm:divide-y-0 divide-text-secondary/25 ">
      {achievements.map((el) => {
        return (
          <Box
            key={el.id}
            className="flex items-center justify-center py-6 sm:h-28 sm:py-0 w-full"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 sm:gap-2 w-full px-8 text-center sm:text-left">
              <p className="flex items-center text-4-5xl text-inherit gap-0.5 font-bold">
                {el.value}
                <FaPlus className="size-6" />
              </p>
              <p className="text-base">{el.label}</p>
            </div>
          </Box>
        );
      })}
    </Container>
  );
}

export default StatSection;
