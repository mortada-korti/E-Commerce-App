import "./item.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, Box } from "@mui/material";
import styled from "@emotion/styled";
const Item = ({ item }) => {
  return (
    <StyledCard>
      {item.isNew === 1 && <NewSeason>New Season</NewSeason>}
      <Top>
        <img src={item.img} alt='' className='firstImg' />
        {item.img2 && <img src={item.img2} alt='' className='secondImg' />}
      </Top>
      <Bottom>
        <Typography
          sx={{
            fontSize: "1.1rem",
            color: "text.primary",
            fontWeight: "500",
          }}>
          {item.title}
        </Typography>
        <Stack direction='row' spacing={2} alignItems='center'>
          {item.oldPrice && (
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "text.secondary",
                textDecorationLine: "line-through",
              }}>
              {item.oldPrice}$
            </Typography>
          )}
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "text.primary",
              fontWeight: "bold",
            }}>
            {item.price}$
          </Typography>
        </Stack>
      </Bottom>
    </StyledCard>
  );
};

export default Item;

const StyledCard = styled(Box)(({ theme }) => ({
  position: "relative",
  border: "1px solid transparent",
  borderColor: theme.palette.divider,
  height: "450px",
  width: "300px",
  [theme.breakpoints.down("sm")]: {
    minWidth: "95%",
  },
}));

const NewSeason = styled(Typography)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "rgb(255,255,255,0.5)",
  color: theme.palette.primary.main,
  padding: "0 0.5rem",
  top: "0.25rem",
  left: "0.25rem",
  zIndex: "10",
  fontSize: "0.8rem",
  fontWeight: "500",
}));

const Top = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  height: "85%",
  "& > img": {
    width: "100%",
    objectFit: "cover",
    minHeight: "100%",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.8)",
    },
  },
}));
const Bottom = styled(Stack)(({ theme }) => ({
  padding: "0.5rem",
  height: "15%",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
}));
