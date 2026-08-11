import { GoDotFill } from "react-icons/go";
import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import { Container } from "../ui/global/Container";
import Box from "../ui/global/Box";
import { SurfaceLink } from "../ui/global/SurfaceLink";

export default function HeroSection() {
  return (
    <Container id="hero-section" className="flex flex-col sm:flex-row gap-2 mt-10">
      <Box className="flex lg:flex-1 flex-col gap-2 ">
        <SurfaceLink
          inactive
          className=" flex bg-secondary text-primary "
        >
        <GoDotFill 
  className="dot"
/>
          Why We're Best?
        </SurfaceLink>
        <h1 className="text-4-5xl font-bold leading-[1.3] tracking-tight sm:text-6xl whitespace-nowrap">
          Empower Your Body,
          <wbr />
          <span className="block text-primary ">Elevate Your Mind</span>
        </h1>

        <p className="flex-1 min-w-0 text-xl leading-relaxed">
          Join us in transforming your body and mind
          <wbr /> through our yoga and fitness programs.
        </p>
        <SurfaceLink href="/" className=" bg-primary text-white max-h-20">
          Become a member <MdArrowRightAlt className="icon-app" />
        </SurfaceLink>
        <SurfaceLink href="/" className=" text-primary max-h-20">
          Our classes <MdArrowRightAlt className="icon-app" />
        </SurfaceLink>
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
