"use client";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdArrowRightAlt } from "react-icons/md";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SurfaceLink } from "../ui/global/SurfaceLink";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-interTight), Arial, sans-serif",
  },
});
export const Header = () => {
  const pages = [
    { id: 1, label: "Home", href: "/" },
    // { id: 2, label: "Products", href: "/product" },
    { id: 3, label: "Classes", href: "/classes" },
    { id: 4, label: "Schedule", href: "/schedule" },
    { id: 5, label: "Membership", href: "/membership" },
    { id: 6, label: "Consultation", href: "/consultation" },
    { id: 7, label: "Events", href: "/events" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <header className="w-full border-b border-b-text-secondary/25 px-4 ">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            className="relative h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48 lg:h-28 lg:w-56 shrink-0"
          >
            <Image
              src="/logos/wellness_gym-removebg-preview.png"
              alt="Wellness Gym logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 128px,
               (max-width: 768px) 160px,
               (max-width: 1024px) 192px,
               224px"
            />
          </Link>
          {/* Desktop center nav links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              maxWidth: "50rem",
            }}
          >
            {pages.map((page) => (
              <Link key={page.id} onClick={handleCloseNavMenu} href={page.href}>
                <span className="text-text-primary text-lg font-bold ">
                  {page.label}
                </span>
              </Link>
            ))}
          </Box>

          {/* Mobile logo */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

          {/* Mobile hamburger menu — right side */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <RxHamburgerMenu className="icon-app" />
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              keepMounted
              anchorReference="anchorPosition"
              anchorPosition={{ top: 0, left: 0 }}
              slotProps={{
                paper: {
                  sx: {
                    width: "100vw",
                    height: "100dvh",
                    maxWidth: "100vw",
                    maxHeight: "100dvh",
                    m: 0,

                    borderRadius: 0,
                    bgcolor: "#fce7f3",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    width: "100%",
                    justifyContent: "flex-start",
                    py: 2,
                    px: 4,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#f870ef",
                      textAlign: "left",
                    }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Join Us button — desktop */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, textAlign: "center" }}
          >
            <SurfaceLink href="/membership" className="bg-primary text-white">
              Join us
              <MdArrowRightAlt className="icon-app" />
            </SurfaceLink>
          </Box>
        </Toolbar>
      </header>
    </ThemeProvider>
  );
};
