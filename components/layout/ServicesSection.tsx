import { SplitLayoutProps } from "@/types";
import { SplitLayout } from "./SplitLayout";
import { Container } from "../ui/global/Container";

import Card from "./Card";
import { cardsContents } from "@/constants";

const content: SplitLayoutProps = {
  badge: "Our Services",
  title: "Our services",
  heading: (
    <h1 className="text-4-5xl whitespace-nowrap font-bold leading-[1.3] tracking-tight sm:text-6xl">
      Empower Your Body,
      <wbr />
      <span className="text-primary block">Elevate Your Mind</span>
    </h1>
  ),
  description: (
    <p className="flex-1 min-w-0 text-xl leading-relaxed">
      Join us in transforming your body and mind
      <wbr /> through our yoga and fitness programs.
    </p>
  ),
  primaryButton: { label: "Become Member", href: "/" },
  secondaryButton: { label: "Our Classes", href: "/" },
};
function ServicesSection() {

  return (
    <Container id="our-services-app" className="flex flex-col gap-4">
      <SplitLayout {...content} />
      {cardsContents.map((el) => {                                                                                               
        
        return <Card key={el.id} {...el} />;
      })}
    </Container>
  );
}

export default ServicesSection;
