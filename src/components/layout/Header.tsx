"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { MdArrowRightAlt } from "react-icons/md";
import { cn } from "@/lib/utils";
import { SurfaceLink } from "../ui/global/SurfaceLink";

const pages = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Classes", href: "/classes" },
  { id: 3, label: "Schedule", href: "/schedule" },
  { id: 4, label: "Membership", href: "/membership" },
  { id: 5, label: "Consultation", href: "/consultation" },
  { id: 6, label: "Pricing", href: "/pricing" },
  { id: 7, label: "Events", href: "/events" },
];

export const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-text-secondary/25 bg-background px-4">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between sm:h-24">
        <Link
          href="/"
          className="relative h-16 w-32 shrink-0 sm:h-20 sm:w-40 md:h-24 md:w-48"
        >
          <Image
            src="/logos/wellness_gym-removebg-preview.png"
            alt="Wellness Gym logo"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 128px,
             (max-width: 768px) 160px,
             192px"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-8 md:flex"
        >
          {pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={page.id}
                href={page.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-md text-lg font-bold transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-text-primary",
                )}
              >
                {page.label}
              </Link>
            );
          })}
        </nav>

        {/* Join Us — desktop */}
        <div className="hidden shrink-0 md:block">
          <SurfaceLink href="/membership" className="bg-primary text-text-primary">
            Join us
            <MdArrowRightAlt className="icon-app" />
          </SurfaceLink>
        </div>

        {/* Hamburger — mobile */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(true)}
          className="rounded-md p-2 text-text-primary md:hidden"
        >
          <RxHamburgerMenu className="icon-app" />
        </button>
      </div>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-50 flex flex-col bg-secondary md:hidden"
        >
          <div className="flex h-20 items-center justify-between px-4">
            <span className="text-lg font-bold text-text-primary">Menu</span>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="rounded-md p-2 text-text-primary"
            >
              <RxCross2 className="icon-app" />
            </button>
          </div>

          <nav
            aria-label="Mobile primary"
            className="flex flex-1 flex-col items-start justify-center gap-2 overflow-y-auto px-8 pb-20"
          >
            {pages.map((page) => {
              const isActive = pathname === page.href;
              return (
                <Link
                  key={page.id}
                  href={page.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "py-2 text-3xl font-bold transition-colors",
                    isActive ? "text-primary" : "text-text-primary",
                  )}
                >
                  {page.label}
                </Link>
              );
            })}

            <SurfaceLink
              href="/membership"
              className="mt-6 w-fit bg-primary text-text-primary"
            >
              Join us
              <MdArrowRightAlt className="icon-app" />
            </SurfaceLink>
          </nav>
        </div>
      )}
    </header>
  );
};
