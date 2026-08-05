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

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-interTight), Arial, sans-serif",
  },
});
export const Header = () => {
  const pages = ["Home", "Classes", "Consultation"];
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
      <header className="w-full border-b border-b-text-secondary/25 px-4">
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
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  textTransform: "none",
                  color: "inherit",
                }}
              >
                <span className="text-text-primary text-lg font-bold ">
                  {page}
                </span>
              </Button>
            ))}
          </Box>

          {/* Mobile logo */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

          {/* Mobile hamburger menu — right side */}
          <Box  sx={{ display: { xs: "flex", md: "none" } }}>
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
            <Menu className=""
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem className="" key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Join Us button — desktop */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, textAlign: "center" }}
          >
            <div className="bg-primary rounded-full text-white ">
              <Button
                color="inherit"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Join us
                <MdArrowRightAlt className="icon-app" />
              </Button>
            </div>
          </Box>
        </Toolbar>
      </header>
    </ThemeProvider>
  );
};
