import "./item.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";
const Item = ({ item }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        sx={{ height: 450 }}
        image={item.img}
        title={item.title}
      />

      <StyledCardContent sx={{ padding: 0 }}>
        <Typography
          gutterBottom
          variant='body2'
          component='span'
          sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
          {item.title}
        </Typography>
        <Stack direction='row' spacing={1} alignItems='center' padding='0'>
          {item.oldPrice && (
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ textDecorationLine: "line-through" }}>
              {item.oldPrice}$
            </Typography>
          )}
          <Typography
            variant='h6'
            color='text.secondary'
            sx={{ fontWeight: "600", color: "text.primary", padding: "0" }}>
            {item.price}$
          </Typography>
        </Stack>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Item;

const StyledCard = styled(Card)(({ theme }) => ({
  width: "300px",
  backgroundColor: "",
  [theme.breakpoints.down("sm")]: {
    minWidth: "95%",
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: "0.5rem",
  "&:last-child": {
    paddingBottom: "0.5rem",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  transition: "0.3s",
  overflow: "hidden !important",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.5) !important",
    transitionDelay: "0.5s",
  },
}));
