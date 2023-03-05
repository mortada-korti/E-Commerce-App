import Col from "react-bootstrap/esm/Col";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";
import "./product.scss";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Product = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const handleQuantity = (action) => {
    if (action === "+" && quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (action === "-" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];
  return (
    <Grid
      container
      className='product'
      spacing={2}
      sx={{
        padding: "2rem",
        backgroundColor: "background.default",
        color: "text.primary",
      }}>
      <Grid
        item
        xs={6}
        className='product--left'
        sx={{ gap: "1rem", display: "flex" }}>
        <Stack
          className='small'
          direction='column'
          spacing={2}
          sx={{ flex: 1 }}>
          <Box
            className='top'
            sx={{ flex: 1, maxHeight: "150px", overflow: "hidden" }}>
            <img src={images[0]} alt='' onClick={() => setSelectedIndex(0)} />
          </Box>
          <Box
            className='bottom'
            sx={{ flex: 1, maxHeight: "150px", overflow: "hidden" }}>
            <img src={images[1]} alt='' onClick={() => setSelectedIndex(1)} />
          </Box>
        </Stack>
        <Box className='large' sx={{ flex: 1 }}>
          <img src={images[selectedIndex]} alt='' />
        </Box>
      </Grid>
      <Grid item md={6} className='product--right'>
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
          Long Sleeve Graphic T-shirt
        </Typography>
        <Typography sx={{ color: "primary.main", fontSize: "1.5rem" }}>
          $19.99
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda
          ducimus repudiandae! Sed, provident vitae expedita pariatur deleniti
          sequi accusantium aut. Illo pariatur dignissimos voluptatibus eius
          aperiam itaque, magni quae.
        </Typography>
        <Stack alignItems='center' direction='row'>
          <IconButton
            color='primary'
            onClick={() => handleQuantity("-")}
            disabled={quantity === 1}>
            <RemoveCircleRoundedIcon />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton
            color='primary'
            onClick={() => handleQuantity("+")}
            disabled={quantity === 10}>
            <AddCircleRoundedIcon />
          </IconButton>
        </Stack>
        <Button
          variant='contained'
          className='add-cart'
          startIcon={<AddShoppingCartIcon />}>
          ADD TO CART
        </Button>

        <Stack direction='row' spacing={2}>
          <Button
            disableRipple
            startIcon={isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            onClick={() => setIsLiked(!isLiked)}>
            ADD TO WISHLIST
          </Button>

          <Stack direction='row' spacing={1} alignItems='center'>
            <Button disableRipple startIcon={<BalanceIcon />}>
              ADD TO COMPARE
            </Button>
          </Stack>
        </Stack>

        <Stack direction='column' className='product--info' spacing={1}>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </Stack>
        <Divider />
        <Stack
          className='additional-info'
          direction='column'
          spacing={1}
          divider={<Divider orientation='horizontal' flexItem />}>
          <span>DESCRIPTION</span>
          <span>ADDITIONAL INFORMATION</span>
          <span>FAQ</span>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Product;
