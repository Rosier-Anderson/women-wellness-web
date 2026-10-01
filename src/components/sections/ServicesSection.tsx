import { Container } from "@/components/ui/global/Container";
import Card from "@/components/sections/Card";
import { cardsContents } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ActionLinks from "@/components/ui/global/ActionLinks";
import Box from "@/components/ui/global/Box";

function ServicesSection() {
  return (
    <Container id="our-services-app" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Box className="sm:col-span-2 lg:col-span-4">
        <SectionHeading
          titleClassName="text-section-title font-bold tracking-tight"
          descClassName="max-w-md text-xl leading-relaxed"
          badge="Our Services"
          title="Move, Strengthen, and Restore"
          desc="Push your limits with expert-led workouts to build strength, endurance,
      and your best self."
        />
        <Box className="flex flex-col sm:flex-row">
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
