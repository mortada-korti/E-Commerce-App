import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// @mui
import { Badge, Box, IconButton, Stack, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import styled from "@emotion/styled";

const Header = () => {
  const products = useSelector((state) => state.cart.products);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <StyledHeader className='header' alignItems='center' direction='row'>
      <HeaderLeft direction='row' spacing={3} flex={1}>
        {/*  */}

        <Stack className='header--item' alignItems='center' direction='row'>
          <img src='/imgs/en.png' alt='' />
          <KeyboardArrowDownIcon sx={{ color: "text.primary" }} />
        </Stack>

        <Stack className='header--item' alignItems='center' direction='row'>
          <Typography sx={{ color: "text.primary" }}>USD</Typography>
          <KeyboardArrowDownIcon sx={{ color: "text.primary" }} />
        </Stack>

        <Link to='products/1'>
          <StyledLink>Men</StyledLink>
        </Link>

        <Link to='products/2'>
          <StyledLink>Women</StyledLink>
        </Link>

        <Link to='products/3'>
          <StyledLink>Children</StyledLink>
        </Link>

        {/*  */}
      </HeaderLeft>

      <HeaderCenter>
        <Link to='/'>
          <Typography fontWeight='bold' fontSize='1.5rem' color='primary.main'>
            E-SHOP
          </Typography>
        </Link>
      </HeaderCenter>

      <HeaderRight direction='row' spacing={{ xs: 0, sm: 2 }}>
        {/*  */}
        <Links direction='row' spacing={3}>
          <Link to='/'>
            <StyledLink>Homepage</StyledLink>
          </Link>

          <Link to='/'>
            <StyledLink>About</StyledLink>
          </Link>

          <Link to='/'>
            <StyledLink>Contact</StyledLink>
          </Link>
        </Links>

        <IconButton onClick={() => setDarkMode(!darkMode)} color='text.primary'>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <Link to='/add'>
          <Box>
            <IconButton>
              <PersonOutlineIcon />
            </IconButton>
          </Box>
        </Link>

        <Box>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>

        <Link to='/cart'>
          <IconButton>
            <Badge badgeContent={products.length} color='primary'>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Link>
        {/*  */}
      </HeaderRight>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderBottom: "1px solid transparent",
  borderColor: theme.palette.divider,
  height: "4rem",
  padding: "0 0.5rem",
  zIndex: "999",
  position: "sticky",
  top: "0px",
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    padding: "1rem 2rem",
    top: "-1px",
  },
}));

const HeaderLeft = styled(Stack)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
  alignItems: "center",
}));

const HeaderCenter = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  justifyContent: "flex-start",
  color: theme.palette.primary.main,
  flex: 1,
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
    justifyContent: "center",
  },
}));

const HeaderRight = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
  },
}));

const StyledLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: "0.3s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const Links = styled(Stack)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  alignItems: "center",
}));
