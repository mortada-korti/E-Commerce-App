import { Link } from "react-router-dom";

// @mui
import { Box, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <StyledFooter>
      {/*  */}
      <Upper direction='row'>
        {/*  */}
        <FooterItem direction='column'>
          <StyledHead>Categories</StyledHead>
          <Stack direction='column' spacing={0.5}>
            <Link to='/products/1'>
              <StyledLink component='span'>Men </StyledLink>
            </Link>
            <Link to='/products/2'>
              <StyledLink component='span'>Women </StyledLink>
            </Link>
            <Link to='/products/3'>
              <StyledLink component='span'>Shoes </StyledLink>
            </Link>
            <Link to='/products/4'>
              <StyledLink component='span'>Accessories </StyledLink>
            </Link>
            <Link to='/products/5'>
              <StyledLink component='span'>New Arrivals </StyledLink>
            </Link>
          </Stack>
        </FooterItem>

        <FooterItem direction='column'>
          <StyledHead>Links</StyledHead>
          <Stack direction='column' spacing={0.5}>
            <Link to=''>
              <StyledLink component='span'>FAQ</StyledLink>
            </Link>
            <Link to=''>
              <StyledLink component='span'>Pages</StyledLink>
            </Link>
            <Link to=''>
              <StyledLink component='span'>Stores</StyledLink>
            </Link>
            <Link to=''>
              <StyledLink component='span'>Compare</StyledLink>
            </Link>
            <Link to=''>
              <StyledLink component='span'>Cookies</StyledLink>
            </Link>
          </Stack>
        </FooterItem>

        <FooterItem>
          <StyledHead>About</StyledHead>
          <Typography
            variant='p'
            sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            odio ipsam vero deserunt rem blanditiis obcaecati autem porro
            reprehenderit omnis ex sed facere, nobis, velit dolor animi maiores
            mollitia nam.
          </Typography>
        </FooterItem>

        <FooterItem>
          <StyledHead>Contact</StyledHead>
          <Typography
            variant='p'
            sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            odio ipsam vero deserunt rem blanditiis obcaecati autem porro
            reprehenderit omnis ex sed facere, nobis, velit dolor animi maiores
            mollitia nam.
          </Typography>
        </FooterItem>
      </Upper>

      <Lower justifyContent='space-between' direction='row' alignItems='center'>
        <Stack direction='row' spacing={2} alignItems='flex-start' flex={1}>
          <StyledLogo variant='h1' component='span'>
            E-SHOP
          </StyledLogo>
          <Typography sx={{ fontSize: "0.6rem", color: "text.secondary" }}>
            &#169; Copyright 2023 All Rights Reserved
          </Typography>
        </Stack>
        <ImgContainer flex={1}>
          <img src='/imgs/payment.png' alt='' />
        </ImgContainer>
      </Lower>
    </StyledFooter>
  );
};

export default Footer;

const StyledLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: "0.2s",
  fontSize: "0.9rem",
  "&:hover": {
    color: theme.palette.text.primary,
    fontWeight: "500",
  },
}));

const StyledFooter = styled(Stack)(({ theme }) => ({
  marginTop: "auto",
  padding: "4rem 7rem 1rem",
  borderTop: "1px solid transparent",
  gap: "3rem",
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    padding: "1rem 0.5rem",
  },
}));

const FooterItem = styled(Stack)(({ theme }) => ({
  width: "100%",
  flexDirection: "column",
  gap: "0.3rem",
  flex: 1,
}));

const StyledHead = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

const StyledLogo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "2rem",
  fontWeight: "700",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

const Upper = styled(Stack)(({ theme }) => ({
  width: "100%",
  gap: "2rem",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Lower = styled(Stack)(({ theme }) => ({
  width: "100%",
  gap: "2rem",
  justifyContent: "flex-between",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ImgContainer = styled(Box)(({ theme }) => ({
  "& > img": {
    maxWidth: "100%",
  },
}));
