import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "@mui/material";
import "./categories.scss";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const StyledButton = styled(Button)({
  padding: "3px 0",
  border: "1px solid",
  color: "white",
  borderColor: "white",
  fontWeight: "700",
  "&:hover": {
    borderColor: "#4fc3f7",
    color: "#4fc3f7",
  },
});

const Categories = () => {
  return (
    <div className='categories d-flex gap-2'>
      <Col md={6} className='d-flex left gap-2'>
        <Col md={6} className='d-flex flex-column gap-2'>
          <Row className='bg-black flex-1 p-0'>
            <img
              src='https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <Link to='/products/6'>
              <StyledButton variant='outlined'>SALE</StyledButton>
            </Link>
          </Row>
          <Row className='bg-white flex-1'>
            <img
              src='https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <Link to='/products/2'>
              <StyledButton variant='outlined'>WOMEN</StyledButton>
            </Link>
          </Row>
        </Col>
        <Col md={6}>
          <img
            src='https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <Link to='/products/5'>
            <StyledButton variant='outlined'>NEW SEASON</StyledButton>
          </Link>
        </Col>
      </Col>
      <Col md={6} className='right d-flex flex-column gap-2'>
        <Col className='m-0 d-flex gap-2'>
          <Col md={6} className='p-0 flex-1'>
            <img
              src='https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <Link to='/products/1'>
              <StyledButton variant='outlined'>MEN</StyledButton>
            </Link>
          </Col>
          <Col md={6} className='p-0'>
            <img
              src='https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <Link to='/products/3'>
              <StyledButton variant='outlined'>ACCESSORIES</StyledButton>
            </Link>
          </Col>
        </Col>
        <Row className='m-0 flex-1'>
          <img
            src='https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <Link to='/products/4'>
            <StyledButton variant='outlined'>SHOES</StyledButton>
          </Link>
        </Row>
      </Col>
    </div>
  );
};

export default Categories;
