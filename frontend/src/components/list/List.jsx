import Col from "react-bootstrap/esm/Col";
import Item from "../item/Item";
import "./list.scss";
import { Box, Grid, Stack } from "@mui/material";

const List = () => {
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
    {
      id: 5,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "hat",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <Grid container direction='row' spacing={2} sx={{ maxWidth: "100%" }}>
      {data?.map((item) => (
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          xl={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          key={item.id}>
          <Item item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
