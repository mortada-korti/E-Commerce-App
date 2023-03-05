// @mui
import { Button, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import styled from "@emotion/styled";

// Style
import "./cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      desc: "lorem lorem lorem lorem",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "lorem lorem lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "lorem lorem lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <StyledCart direction='column' spacing={2}>
      {/*  */}
      <CartTitle
        sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "600" }}>
        Products in your cart
      </CartTitle>

      {data?.map((item) => (
        <CartItem direction='row' key={item.id} item={item} spacing={2}>
          {/*  */}
          <img src={item.img} alt='' />

          <Stack sx={{ width: "100%" }} alignItems='center' direction='row'>
            {/*  */}
            <Stack spacing={1} sx={{ width: "80%" }}>
              {/*  */}
              <Typography sx={{ color: "text.primary", fontWeight: "600" }}>
                {item.title}
              </Typography>

              <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>
                {item.desc.substring(0, 50)}
              </Typography>

              <Typography
                sx={{
                  color: "primary.main",
                  fontWeight: "500",
                  fontSize: "0.9rem",
                }}>
                1 x ${item.price}
              </Typography>
              {/*  */}
            </Stack>

            <IconButton color='error'>
              <DeleteIcon color='error' />
            </IconButton>
            {/*  */}
          </Stack>
        </CartItem>
      ))}

      <Stack
        className='subtotal'
        justifyContent='space-between'
        direction='row'>
        <Typography sx={{ color: "text.primary", fontWeight: "600" }}>
          SUBTOTAL
        </Typography>
        <Typography sx={{ color: "text.primary", fontWeight: "600" }}>
          $123
        </Typography>
      </Stack>

      <Button startIcon={<ShoppingCartCheckoutIcon />} variant='contained'>
        PROCEED TO CHECKOUT
      </Button>
      <Button startIcon={<RestartAltIcon />} variant='outlined' color='error'>
        RESET CART
      </Button>
    </StyledCart>
  );
};

export default Cart;

const CartItem = styled(Stack)(({ theme }) => ({
  "& > img": {
    width: "100px",
    objectFit: "cover",
    height: "120px",
  },
}));

const StyledCart = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "1rem 2rem",
  position: "absolute",
  top: "4rem",
  right: "2rem",
  width: "500px",
  zIndex: 3,
}));

const CartTitle = styled(Stack)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1.5rem",
  fontWeight: "600",
}));
