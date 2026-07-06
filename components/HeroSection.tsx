import {GoDotFill} from "react-icons/go";
import Box from "./ui/global/Box";

import {MdArrowRightAlt} from "react-icons/md";
import Image from "next/image";
import {Container} from "./ui/global/Container";
import {SurfaceButton} from "./ui/global/SurfaceButton";

export default function HeroSection() {
  return (
    <Container className="m-3">
      <Box className="">
        <SurfaceButton className=" bg-secondary w-40 p-3 text-primary">
          <GoDotFill className="" />
          Why We're Best?
        </SurfaceButton>
        <h1 className="text-4xl">Empower Your Body, Elevate Your Mind</h1>
        <p className="">
          Join us tranforming your body and mind through our yoga and finess
          programs.
        </p>
        <SurfaceButton className=" bg-primary text-white text-md px-4 py-4">
          <button className="flex items-center justify-between w-full  whitespace-nowrap cursor-pointer ">
            <span> Become a member</span>
            <MdArrowRightAlt className="size-5" />
          </button>
        </SurfaceButton>
        <SurfaceButton className="  text-primary">
          <button className="flex items-center whitespace-nowrap cursor-pointer">
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
