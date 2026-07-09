import { GoDotFill } from "react-icons/go";
import Box from "./ui/global/Box";
import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import { Container } from "./ui/global/Container";
import { SurfaceLink } from "./ui/global/SurfaceLink";

export default function HeroSection() {
  return (
    <Container className="flex flex-col gap-2">
      <Box className=" flex flex-col gap-2">
        <SurfaceLink inactive className="bg-secondary w-40 text-primary my-6">
          <GoDotFill className="" />
          Why We're Best?
        </SurfaceLink>
        <h1 className="text-4-5xl font-bold leading-[1.3] tracking-tight  sm:text-6xl whitespace-nowrap">
          Empower Your Body,
          <wbr />
          <span className="block text-primary ">Elevate Your Mind</span>
        </h1>

        <p className="flex-1 min-w-0 text-xl leading-relaxed ">
          Join us in transforming your body and mind
          <wbr /> through our yoga and fitness programs.
        </p>
        <SurfaceLink href="/" className="bg-primary text-white ">
          <span className="">Become a member</span>
          <MdArrowRightAlt className="size-5" />
        </SurfaceLink>
        <SurfaceLink href="/" className="text-md text-primary ">
          Our classes <MdArrowRightAlt className="size-5" />
        </SurfaceLink>
      </Box>
      <Box className=" relative w-full h-96  ">
        <Image
          src={"/assets/images/gemini_hero_section.jpg"}
          fill
          alt="Hero section photo."
          className="object-cover rounded-2xl"
        />
      </Box>
    </Container>
  );
}
