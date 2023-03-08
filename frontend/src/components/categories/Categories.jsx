import { Link } from "react-router-dom";

// @mui
import { Box, Button, Stack } from "@mui/material";
import styled from "@emotion/styled";

// Style
import "./categories.scss";

const Categories = () => {
  return (
    <StyledCategories>
      {/*  */}
      <Stack direction='row' spacing={1}>
        {/*  */}
        <Stack direction='column' spacing={1}>
          <CatItem>
            <img
              src='https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            {/* <img
              src='https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            /> */}
            <Link to='/products/1'>
              <StyledButton>MEN</StyledButton>
            </Link>
            {/* <Link to='/products/1'>
              <StyledButton>SALE</StyledButton>
            </Link> */}
          </CatItem>
          <CatItem>
            <img
              src='https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <Link to='/products/2'>
              <StyledButton>WOMEN</StyledButton>
            </Link>
          </CatItem>
        </Stack>

        <CatItem>
          <img
            src='https://images.pexels.com/photos/1650281/pexels-photo-1650281.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
          />
          <Link to='/products/3'>
            <StyledButton>Children</StyledButton>
          </Link>
        </CatItem>
        {/*  */}
      </Stack>
    </StyledCategories>
  );
};

export default Categories;

const CatItem = styled(Box)(({ theme }) => ({
  position: "relative",
  "&:hover": {
    "& > img": {
      transform: "scale(1.2)",
    },
  },
  "& > img": {
    objectFit: "cover",
    width: "100%",
    transition: "0.3s all ease-in-out",
    height: "100%",
  },
}));

const StyledCategories = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  height: "80vh",
  gap: "0.5rem",
  padding: "0 1rem",
  "& > div": {
    flex: 1,
    "& > div": {
      flex: 1,
      overflow: "hidden",
      "& > div": {
        flex: 1,
        overflow: "hidden",
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "100%",
  },
}));

const StyledButton = styled(Button)({
  padding: "3px 5px",
  border: "1px solid",
  color: "white",
  borderColor: "white",
  fontWeight: "700",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "&:hover": {
    borderColor: "#4fc3f7",
    color: "#4fc3f7",
  },
});
