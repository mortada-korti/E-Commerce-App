import { Button, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.scss";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
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
    <div className='cart'>
      <h1 className='cart--title'>Products in your cart</h1>
      {data?.map((item) => (
        <div className='cart--item' key={item.id} item={item}>
          <img src={item.img} alt='' />
          <div className='right'>
            <div className='info'>
              <span className='title'>{item.title}</span>
              <span className='desc'>{item.desc.substring(0, 50)}</span>
              <span className='price'>1 x ${item.price}</span>
            </div>
            <IconButton color='error'>
              <DeleteIcon color='error' />
            </IconButton>
          </div>
        </div>
      ))}
      <Stack
        className='subtotal'
        justifyContent='space-between'
        direction='row'>
        <span>SUBTOTAL</span>
        <span>$123</span>
      </Stack>
      <Button startIcon={<ShoppingCartCheckoutIcon />} variant="contained">
        PROCEED TO CHECKOUT
      </Button>
      <Button startIcon={<RestartAltIcon />} variant="outlined" color="error">
        RESET CART
      </Button>

    </div>
  );
};

export default Cart;
