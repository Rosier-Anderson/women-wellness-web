import { Footer } from "@/components/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/global/Container";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen ">
      <Header/>
      <Container className="flex min-h-screen justify-center mt-16 sm:mt-24">
        {children}
      </Container>
      <Footer/>
    </main>
  );
}