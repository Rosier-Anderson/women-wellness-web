import { Container } from "../ui/global/Container";
import Card from "./Card";
import { cardsContents } from "@/constants";
import { SectionHeading } from "../SectionHeading";
import ActionLinks from "../ui/global/ActionLinks";
import Box from "../ui/global/Box";

function ServicesSection() {
  return (
    <Container id="our-services-app" className="grid gap-4 mt-14">
      <Box className="">
        <SectionHeading
          titleClassName="text-[clamp(2.5rem,8vw,4rem)] font-bold leading-[1.3] tracking-tight"
          descClassName="sm:w-md text-xl leading-relaxed"
          badge="Our Services"
          title="Move, Strengthen, and Restore"
          desc="Push your limits with expert-led workouts to build strength, endurance,
      and your best self."
        />
        <Box className="flex flex-col sm:flex-row w-sm">
          <ActionLinks
            links={[
              {
                href: "/membership",
                label: "Become Member",
                variant: "primary",
              },
              {
                href: "/classes",
                label: "Our Classes",
                variant: "secondary",
              },
            ]}
          />
        </Box>
      </Box>

      {cardsContents.map((el) => {
        return <Card key={el.id} {...el} />;
      })}
    </Container>
  );
}

export default ServicesSection;
