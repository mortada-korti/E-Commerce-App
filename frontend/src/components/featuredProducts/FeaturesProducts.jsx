import { Link } from "react-router-dom";
import Item from "../item/Item";

import UseFtech from "../../hooks/UseFtech";

// @mui
import { Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

const FeaturesProducts = ({ type }) => {
  const productType = type === "Featured" ? 1 : 2;
  const { data, loading, error } = UseFtech(
    "/products/type",
    "post",
    productType
  );

  return (
    <FeaturedProductsContainer>
      <Upper>
        <Typography variant='h2' component='h3' sx={{ flex: 1 }}>
          {type} Products
        </Typography>
        <Typography
          variant='p'
          component='p'
          sx={{ color: "text.secondary", flex: 1 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          odio ipsam vero deserunt rem blanditiis obcaecati autem porro
          reprehenderit omnis ex sed facere, nobis, velit dolor animi maiores
          mollitia nam.
        </Typography>
      </Upper>
      <Lower>
        {data?.map((item) => (
          <Link to={`/product/${item.product_id}`} key={item.product_id}>
            <Item item={item} />
          </Link>
        ))}
      </Lower>
    </FeaturedProductsContainer>
  );
};

export default FeaturesProducts;

const FeaturedProductsContainer = styled(Stack)(({ theme }) => ({
  padding: "3rem 5rem",
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  [theme.breakpoints.down("xl")]: {
    padding: "1rem",
  },
  [theme.breakpoints.down("sm")]: {},
}));

const Upper = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("xl")]: {
    flexDirection: "column",
    gap: "1rem",
    textAlign: "center",
  },
}));

const Lower = styled(Stack)(({ theme }) => ({
  display: "flex",
  maxWidth: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  paddingBottom: "1rem",
  "&::-webkit-scrollbar": {
    height: "5px",
    backgroundColor: theme.palette.divider,
    borderRadius: "100px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.text.secondary,
    borderRadius: "100px",
  },
  flexDirection: "row",
  margin: "auto",
  gap: "2rem",
}));
