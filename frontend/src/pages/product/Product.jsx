import UseFtech from "../../hooks/UseFtech";
import { makeRequest } from "../../hooks/MakeRequest";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Pages
import NotFound from "../404/NotFound";

// @mui
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = parseInt(useParams().id);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleQuantity = (action) => {
    if (action === "+" && quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (action === "-" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const deleteProduct = () => {
    makeRequest.post("/delete-product", productId).then((res) => {
      navigate("/");
    });
  };
  const { data, loading, error } = UseFtech("/product/info", "post", productId);
  const images = [data[0]?.img, data[0]?.img2];
  return (
    <ProductContainer container spacing={2}>
      {loading ? (
        "loading.."
      ) : error ? (
        "error"
      ) : !data ? (
        <NotFound />
      ) : (
        <>
          <LeftSide item xs={12} lg={6}>
            <SmallContainer>
              {/*  */}
              <SmallImg>
                <img
                  src={data[0]?.img}
                  alt=''
                  onClick={() => setSelectedIndex(0)}
                />
              </SmallImg>

              <SmallImg>
                {data[0]?.img2 && (
                  <img
                    src={data[0]?.img2}
                    alt=''
                    onClick={() => setSelectedIndex(1)}
                  />
                )}
              </SmallImg>
              {/*  */}
            </SmallContainer>

            <LargeImg>
              <img src={images[selectedIndex]} alt='' />
            </LargeImg>
          </LeftSide>

          <RightSide item sm={12} lg={6}>
            <ProductTitle>{data[0]?.title}</ProductTitle>

            <Typography sx={{ color: "primary.main", fontSize: "1.5rem" }}>
              ${data[0]?.price}
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              {data[0]?.desc}
            </Typography>

            <QuantityContainer>
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
            </QuantityContainer>

            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    product_id: data[0]?.product_id,
                    title: data[0]?.title,
                    desc: data[0]?.desc,
                    price: data[0]?.price,
                    img: data[0]?.img,
                    quantity,
                  })
                )
              }
              variant='contained'
              sx={{ width: "200px" }}
              startIcon={<AddShoppingCartIcon />}>
              ADD TO CART
            </Button>

            <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
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

              <Button
                disableRipple
                color='error'
                startIcon={isLiked ? <DeleteIcon /> : <DeleteIcon />}
                onClick={() => deleteProduct(productId)}>
                DELETE PRODUCT
              </Button>
            </Stack>

            <Stack direction='column' className='product--info' spacing={1}>
              <SpanInfo>
                Vendor: {data[0]?.vendor ? data[0]?.vendor : "NA"}
              </SpanInfo>
              <SpanInfo>Product Type: {data[0]?.subCatName}</SpanInfo>
              <SpanInfo>
                Tag: {data[0]?.subCatName}, {data[0]?.catName}
              </SpanInfo>
            </Stack>

            <Divider />

            <Stack
              sx={{ width: "250px" }}
              direction='column'
              spacing={1}
              divider={<Divider orientation='horizontal' flexItem />}>
              <SpanInfo>DESCRIPTION</SpanInfo>
              <SpanInfo>ADDITIONAL INFORMATION</SpanInfo>
              <SpanInfo>FAQ</SpanInfo>
            </Stack>
          </RightSide>
        </>
      )}
    </ProductContainer>
  );
};

export default Product;

const ProductTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "600",
  color: theme.palette.text.primary,
}));

const SmallContainer = styled(Stack)(({ theme }) => ({
  flex: 1,
  flexDirection: "column",
  gap: "1rem",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

const QuantityContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
  },
}));

const LeftSide = styled(Grid)(({ theme }) => ({
  gap: "1rem",
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
    height: "50vh",
  },
}));

const RightSide = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
    alignItems: "center",
  },
}));

const ProductContainer = styled(Grid)(({ theme }) => ({
  padding: "2rem",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  alignItems: "flex-start",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 0.5rem",
  },
}));

const SmallImg = styled(Box)(({ theme }) => ({
  flex: 1,
  maxHeight: "150px",
  maxWidth: "150px",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  "& > img": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    cursor: "pointer",
    position: "relative",
    transition: "0.2s all ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

const LargeImg = styled(Box)(({ theme }) => ({
  flex: 5,
  backgroundColor: "red",
  [theme.breakpoints.down("lg")]: {
    flex: 3,
  },
  "& > img": {
    width: "100%",
    height: "80vh",
    objectFit: "cover",
    [theme.breakpoints.down("lg")]: {
      height: "100%",
    },
  },
}));

const SpanInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.9rem",
}));
