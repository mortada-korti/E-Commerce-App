import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Cart from "../cart/Cart";

// @mui
import { Badge, Box, IconButton, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Style
import "./header.scss";
import styled from "@emotion/styled";
import { DarkModeContext } from "../../context/DarkModeContext";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const handleToggle = (e) => {
    setDarkMode(e.target.checked);
  };
  return (
    <StyledStack
      className='header'
      alignItems='center'
      direction='row'
      sx={{
        bgcolor: "background.default",
        borderBottom: "1px solid transparent",
        borderColor: "divider",
      }}>
      <StyledStack
        className='header--wrapper'
        justifyContent='space-between'
        direction='row'>
        <StyledStack
          className='header--left'
          direction='row'
          alignItems='center'
          spacing={2}>
          {/*  */}
          <Box className='header--item'>
            <img src='/imgs/en.png' alt='' />
            <KeyboardArrowDownIcon sx={{ color: "text.primary" }} />
          </Box>

          <Box className='header--item'>
            <Typography sx={{ color: "text.primary" }}>USD</Typography>
            <KeyboardArrowDownIcon sx={{ color: "text.primary" }} />
          </Box>

          <Link to='products/1'>
            <StyledLink>Men</StyledLink>
          </Link>

          <Link to='products/2'>
            <StyledLink>Women</StyledLink>
          </Link>

          <Link to='products/3'>
            <StyledLink>Children</StyledLink>
          </Link>

          <Link to='products/4'>
            <StyledLink>Accessories</StyledLink>
          </Link>

          {/*  */}
        </StyledStack>

        <Box className='header--center'>E-SHOP</Box>

        <StyledStack
          className='header--right'
          direction='row'
          alignItems='center'
          spacing={2}>
          {/*  */}
          {/* <Box className='header--link'> */}
          <Link to='/'>
            <StyledLink variant=''>Homepage</StyledLink>
          </Link>
          {/* </Box> */}
          <Link to='/'>
            <StyledLink>About</StyledLink>
          </Link>

          <Link to='/'>
            <StyledLink>Contact</StyledLink>
          </Link>

          <Link to='/'>
            <StyledLink>Stores</StyledLink>
          </Link>

          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            color='text.primary'>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <Box>
            <IconButton>
              <PersonOutlineIcon />
            </IconButton>
          </Box>

          <Box>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>

          <Box>
            <IconButton onClick={() => setCartOpen(!cartOpen)}>
              <Badge badgeContent={4} color='primary'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
          {/*  */}
        </StyledStack>
      </StyledStack>
      {cartOpen && <Cart />}
    </StyledStack>
  );
};

export default Header;

const StyledStack = styled(Stack)(({ theme }) => ({
  backgroundColor: "background.default",
}));

const StyledLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: "0.3s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
