import Image from "next/image";
import { Container } from "../ui/global/Container";
import Box from "../ui/global/Box";
import { SectionHeading } from "../SectionHeading";
import ActionLinks from "../ui/global/ActionLinks";

export default function HeroSection() {
  return (
    <Container
      id="hero-section"
      className=" grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 "
    >
      <Box className=" flex lg:flex-1 w-lg flex-col gap-2 ">
        <SectionHeading
          titleClassName="text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-[1.3] tracking-tight"
          descClassName="w-sm text-xl leading-relaxed"
          badge="Why We're Best?"
          title={
            <>
              Empower Your Body,
              <span className="block md:inline max-sm:text-primary ">
                Elevate Your Mind
              </span>
            </>
          }
          desc=" Join us in transforming your body and mind through our yoga and fitness programs."
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
      <Box className="relative lg:flex-1 h-96  lg:h-150">
        <Image
          src={"/assets/images/gemini_hero_section.jpg"}
          fill
          alt="Hero section photo."
          className="object-center sm:object-cover rounded-2xl"
        />
      </Box>
    </Container>
  );
}
