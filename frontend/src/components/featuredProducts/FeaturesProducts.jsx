import { Stack, Typography } from "@mui/material";
import Item from "../item/Item";
import "./featuredProducts.scss";
import styled from "@emotion/styled";

const FeaturesProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "hat",
      oldPrice: 19,
      price: 12,
    },
  ];
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
          <Item key={item.id} item={item} />
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
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  margin: "auto",
  gap: "2rem",
  [theme.breakpoints.down("xl")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));
