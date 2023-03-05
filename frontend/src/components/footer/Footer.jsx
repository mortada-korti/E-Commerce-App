import { Link } from "react-router-dom";

// @mui
import { Box, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

// Style
import "./footer.scss";

const Footer = () => {
  return (
    <StyledFooter className='footer' direction='column' spacing={10}>
      {/*  */}
      <Stack className='footer--top' direction='row' spacing={8}>
        {/*  */}
        <Stack direction='column' spacing={1} sx={{ flex: 1 }}>
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
        </Stack>

        <Stack direction='column' spacing={1} sx={{ flex: 1 }}>
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
        </Stack>

        <Stack direction='column' spacing={1} sx={{ flex: 1 }}>
          <StyledHead>About</StyledHead>
          <Typography
            variant='p'
            sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            odio ipsam vero deserunt rem blanditiis obcaecati autem porro
            reprehenderit omnis ex sed facere, nobis, velit dolor animi maiores
            mollitia nam.
          </Typography>
        </Stack>

        <Stack direction='column' spacing={1} sx={{ flex: 1 }}>
          <StyledHead>Contact</StyledHead>
          <Typography
            variant='p'
            sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            odio ipsam vero deserunt rem blanditiis obcaecati autem porro
            reprehenderit omnis ex sed facere, nobis, velit dolor animi maiores
            mollitia nam.
          </Typography>
        </Stack>
      </Stack>

      <Stack justifyContent='space-between' direction='row' alignItems='center'>
        <Stack direction='row' spacing={2}>
          <StyledLogo variant='h1' component='span' sx={{ fontSize: "2rem" }}>
            E-SHOP
          </StyledLogo>
          <Typography sx={{ fontSize: "0.8rem", color: "text.secondary" }}>
            &#169; Copyright 2023 All Rights Reserved
          </Typography>
        </Stack>
        <Box>
          <img src='/imgs/payment.png' alt='' />
        </Box>
      </Stack>
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
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const StyledHead = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

const StyledLogo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "2rem",
  fontWeight: "700",
}));
