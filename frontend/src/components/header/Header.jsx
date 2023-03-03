import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./header.scss";
const Header = () => {
  return (
    <header className='header'>
      <div className='header--wrapper'>
        <div className='header--left'>
          <div className='header--item'>
            <img src='/imgs/en.png' alt='' />
            <KeyboardArrowDownIcon />
          </div>

          <div className='header--item'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className='header--item'>
            <Link to='products/1'>Men</Link>
          </div>
          <div className='header--item'>
            <Link to='products/2'>Women</Link>
          </div>
          <div className='header--item'>
            <Link to='products/3'>Children</Link>
          </div>
          <div className='header--item'>
            <Link to='products/4'>Accessories</Link>
          </div>
        </div>
        <div className='header--center'>E-SHOP</div>
        <div className='header--right'>
          <div className='header--link'>
            <Link to='/'>Homepage</Link>
          </div>
          <div className='header--link'>
            <Link to='/'>About</Link>
          </div>
          <div className='header--link'>
            <Link to='/'>Contact</Link>
          </div>
          <div className='header--link'>
            <Link to='/'>Stores</Link>
          </div>
          <div>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <PersonOutlineIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <Badge badgeContent={4} color='primary'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
