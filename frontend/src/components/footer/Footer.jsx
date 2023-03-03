import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer--top'>
        <div className='footer--item'>
          <span className='item--title'>Categories</span>
          <div className='cagtegories'>
            <span>
              <Link to='/products/1'>Men</Link>
            </span>
            <span>
              <Link to='/products/2'>Women</Link>
            </span>
            <span>
              <Link to='/products/3'>Shoes</Link>
            </span>
            <span>
              <Link to='/products/4'>Accessories</Link>
            </span>
            <span>
              <Link to='/'>New Arrivals</Link>
            </span>
          </div>
        </div>
        <div className='footer--item'>
          <span className='item--title'>Links</span>
          <div className='links'>
            <span>
              <Link to='/products/1'>FAQ</Link>
            </span>
            <span>
              <Link to='/products/2'>Pages</Link>
            </span>
            <span>
              <Link to='/products/3'>Stores</Link>
            </span>
            <span>
              <Link to='/products/4'>Compare</Link>
            </span>
            <span>
              <Link to='/'>Cookies</Link>
            </span>
          </div>
        </div>
        <div className='footer--item'>
          <span className='item--title'>About</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            odio ipsam vero deserunt rem blanditiis obcaecati autem porro
            reprehenderit omnis ex sed facere, nobis, velit dolor animi maiores
            mollitia nam.
          </p>
        </div>
        <div className='footer--item'>
          <span className='item--title'>Contact</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            odio ipsam vero deserunt rem blanditiis obcaecati autem porro
            reprehenderit omnis ex sed facere, nobis, velit dolor animi maiores
            mollitia nam.
          </p>
        </div>
      </div>
      <div className='footer--bottom'>
        <div className='bottom--left'>
          <span className='footer--logo'>E-SHOP</span>
          <span>&#169; Copyright 2023 All Rights Reserved</span>
        </div>
        <div className='bottom--right'>
          <img src='/imgs/payment.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
