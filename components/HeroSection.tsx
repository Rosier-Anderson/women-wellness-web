import { GoDotFill } from "react-icons/go";
import Box from "./ui/global/Box";


import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import { Container } from "./ui/global/Container";
import { SurfaceButton } from "./ui/global/SurfaceButton";

export default function HeroSection() {
  return (
    <Container className="">
      <Box>
        <SurfaceButton classname="flex items-center bg-secondary w-40 p-3 text-primary">
          <GoDotFill className="" />
          Why We're Best?
        </SurfaceButton>
        <h1 className="">Empowere Your Body, Elevate Your Mind</h1>
        <p className="">
          Join us tranforming your body and mind through our yoga and finess
          programs.
        </p>
        <SurfaceButton classname="flex items-center bg-primary w-40 text-white p-2 ">
          <button className="flex  whitespace-nowrap cursor-pointer">
            Become a menmber <MdArrowRightAlt className="size-5" />
          </button>
        </SurfaceButton>
        <SurfaceButton classname="flex items-center  w-40  p-2 ">
          <button className="flex whitespace-nowrap cursor-pointer">
            Our classes <MdArrowRightAlt className="size-5" />
          </button>
        </SurfaceButton>
      </Box>
      {/* <Box className="">
        <Image src={} alt=""/>
      </Box> */}
    </Container>
  );
}
