import { useState } from "react";
import { useParams } from "react-router-dom";

// @mui
import { Grid, Slider, Stack, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import List from "../../components/list/List";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import styled from "@emotion/styled";

// Style
import "./products.scss";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState("");
  const catId = parseInt(useParams().id);

  return (
    <Grid
      container
      className='products'
      direction='row'
      sx={{ backgroundColor: "background.default" }}>
      <SideBar item xs={4} lg={3} xl={2}>
        {/*  */}
        <Stack spacing={2}>
          {/*  */}
          <Typography sx={{ fontSize: "1.25rem", fontWeight: "600" }}>
            Products Categories
          </Typography>

          <FormGroup>
            <FormControlLabel
              disableTypography
              sx={{ color: "text.secondary" }}
              control={<Checkbox />}
              label='hat'
            />

            <FormControlLabel
              disableTypography
              sx={{ color: "text.secondary" }}
              control={<Checkbox />}
              label='t-shirt'
            />
          </FormGroup>
          {/*  */}
        </Stack>

        <Stack direction='column' spacing={2}>
          {/*  */}
          <Typography sx={{ fontSize: "1.25rem", fontWeight: "600" }}>
            Filter By Price
          </Typography>

          <Stack
            direction='row'
            spacing={2}
            alignItems='center'
            className='slider'>
            {/*  */}
            <Typography sx={{ color: "text.secondary" }}>0</Typography>

            <Slider
              min={0}
              max={1000}
              sx={{ width: "150px" }}
              valueLabelDisplay='auto'
              onChange={(e) => setMaxPrice(e.target.value)}
            />

            <Typography sx={{ color: "text.secondary" }}>
              {maxPrice ? `${maxPrice} $` : "1000 $"}
            </Typography>
            {/*  */}
          </Stack>
          {/*  */}
        </Stack>

        <Stack direction='column' spacing={2}>
          {/*  */}
          <Typography sx={{ fontWeight: 600, fontSize: "1.25rem" }}>
            Sort By
          </Typography>

          <FormControl>
            <RadioGroup defaultValue='female' name='radio-buttons-group'>
              <FormControlLabel
                disableTypography
                value='asc'
                control={<Radio />}
                label='Price (Lowest First)'
                sx={{ fontSize: "0.9rem", color: "text.secondary" }}
                onChange={(e) => setSort(e.target.value)}
              />

              <FormControlLabel
                disableTypography
                value='desc'
                control={<Radio />}
                label='Price (Highest First)'
                sx={{ fontSize: "0.9rem", color: "text.secondary" }}
                onChange={(e) => setSort(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </SideBar>

      <ProductsContainer item xs={8} lg={9} xl={10}>
        <img
          src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />

        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </ProductsContainer>
    </Grid>
  );
};

export default Products;

const SideBar = styled(Grid)(({ theme }) => ({
  backgroundColor: "background.default",
  color: theme.palette.text.primary,
  width: "100%",
  padding: "1rem",
  position: "sticky",
  top: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  height: "100%",
}));
const ProductsContainer = styled(Grid)(({ theme }) => ({
  gap: "2rem",
  display: "flex",
  paddingBottom: "2rem",
  flexDirection: "column",
  "& > img": {
    height: "300px",
    width: "100%",
    objectFit: "cover",
  },
}));
