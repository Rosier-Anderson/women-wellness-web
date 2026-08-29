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
    <Container id="stat-section" className="sm:flex sm:justify-center bg-secondary text-primary rounded-2xl sm:divide-x max-sm:divide-y divide-text-secondary/25 ">
      {achievements.map((el) => {
        return (
          <Box
            key={el.id}
            className="flex justify-between items-center h-28 w-full"
          >
            <div className=" flex md:flex-col lg:flex-row justify-between items-center w-full px-8">
              <h1 className="flex items-center text-4-5xl text-inherit gap-0.5 font-bold">
                {el.value}
                <FaPlus className="size-6" />
              </h1>
              <p className="text-md ">{el.label}</p>
            </div>
          </Box>
        );
      })}
    </Container>
  );
}

export default StatSection;
