import { useDispatch, useSelector } from "react-redux";

// @mui
import { Button, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import styled from "@emotion/styled";

// Style
import { removeFromCart, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const subTotal = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  const dispatch = useDispatch();
  return (
    <StyledCart>
      <CartTitle>Products in your cart</CartTitle>
      {products?.map((item) => (
        <CartItem key={item.product_id} item={item}>
          <img src={item.img} alt='' />

          <Stack
            sx={{ width: "100%" }}
            alignItems='center'
            direction={{ xs: "column", sm: "row" }}>
            {/*  */}
            <Stack spacing={1} sx={{ flex: 1 }}>
              {/*  */}
              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: "600",
                  width: "100%",
                }}>
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
                {item.quantity} x ${item.price}
              </Typography>
              {/*  */}
            </Stack>

            <IconButton
              color='error'
              onClick={() =>
                dispatch(
                  removeFromCart({
                    product_id: item.product_id,
                  })
                )
              }>
              <DeleteIcon color='error' />
            </IconButton>
            {/*  */}
          </Stack>
        </CartItem>
      ))}

      <Stack
        className='subtotal'
        justifyContent='space-between'
        width='100%'
        direction='row'>
        <Typography sx={{ color: "text.primary", fontWeight: "600" }}>
          SUBTOTAL
        </Typography>
        <Typography sx={{ color: "text.primary", fontWeight: "600" }}>
          ${subTotal()}
        </Typography>
      </Stack>

      <Button
        sx={{ width: "100%" }}
        startIcon={<ShoppingCartCheckoutIcon />}
        variant='contained'>
        PROCEED TO CHECKOUT
      </Button>
      <Button
        onClick={() => dispatch(resetCart())}
        sx={{ width: "100%" }}
        startIcon={<RestartAltIcon />}
        variant='outlined'
        color='error'>
        RESET CART
      </Button>
    </StyledCart>
  );
};

export default Cart;

const CartItem = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "row",
  gap: "0.5rem",
  height: "120px",
  "& > img": {
    width: "100px",
    objectFit: "cover",
    height: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    flexDirection: "column",
    gap: "1rem",
    height: "100%",
  },
}));

const StyledCart = styled(Stack)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.default,
  padding: "1rem 2rem",
  minHeight: "calc(100vh - 4rem)",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "1rem 0.5rem",
    maxWidth: "100%",
    textAlign: "center",
    alignItems: "center",
  },
}));

const CartTitle = styled(Stack)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1.5rem",
  fontWeight: "600",
  // backgroundColor: "red",
}));
