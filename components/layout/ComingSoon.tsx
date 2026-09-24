import { SectionHeading } from "@/components/SectionHeading";
import { Container } from "@/components/ui/global/Container";
import { SurfaceLink } from "@/components/ui/global/SurfaceLink";
import { MdArrowRightAlt } from "react-icons/md";

type ComingSoonProps = {
  title: string;
  description: string;
};

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <Container className="mx-4 flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center sm:mx-10">
      <SectionHeading
        as="h1"
        titleClassName="text-4xl sm:text-6xl"
        descClassName="max-w-xl text-lg leading-relaxed"
        badge="Coming Soon"
        title={title}
        desc={description}
      />
      <SurfaceLink href="/" className="w-fit bg-primary text-text-primary">
        Back to Home
        <MdArrowRightAlt className="icon-app" />
      </SurfaceLink>
    </Container>
  );
}
