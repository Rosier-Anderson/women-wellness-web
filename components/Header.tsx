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
import { SurfaceButton } from "./ui/global/SurfaceButton";

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
      <header className=" static border-b w-full">
        <Toolbar disableGutters sx={{ display: { xs: "flex", justifyContent: "space-between"} }}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Link href="/" className="w-32 h-32 relative p-0 ">
            <Image
              src={"/logos/wellness_gym-removebg-preview.png"}
              alt="Wellness gym logo"
              fill
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
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <RxHamburgerMenu />
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Join Us button — desktop */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, textAlign: "center" }}
          >
            <SurfaceButton classname="bg-primary text-white ">
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
                <MdArrowRightAlt className="size-5" />
              </Button>
            </SurfaceButton>
          </Box>
        </Toolbar>
      </header>
    </ThemeProvider>
  );
};
