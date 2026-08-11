import {SectionIntroProps } from "@/types";
import { SplitLayout } from "./SectionIntro";
import { Container } from "../ui/global/Container";

import Card from "./Card";
import { cardsContents } from "@/constants";

const content: SectionIntroProps = {
  badge: "Our Services",
  title: "Train With Purpose",
  heading: (
    <h1 className="text-4-5xl whitespace-nowrap font-bold leading-[1.3] tracking-tight sm:text-6xl">
      Transform Your Body
      <wbr />
      <span className="text-primary block">Elevate Your Mind</span>
    </h1>
  ),
  description: (
    <p className="flex-1 min-w-0 text-xl leading-relaxed">
      Push your limits with expert-led workouts to build strength, endurance,
      and your best self.
    </p>
  ),
  primaryButton: { label: "Become Member", href: "/" },
  secondaryButton: { label: "Explore Classes", href: "/" },
};
function ServicesSection() {
  return (
    <Container id="our-services-app" className="flex flex-col gap-4 mt-14">
      <SplitLayout {...content} />
      {cardsContents.map((el) => {
        return <Card key={el.id} {...el} />;
      })}
    </Container>
  );
}

export default ServicesSection;
