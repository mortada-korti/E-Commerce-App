import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import UseFtech from "../../hooks/UseFtech";

// Components
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

// Pages
import NotFound from "../404/NotFound";

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
import { makeRequest } from "../../hooks/MakeRequest";

const Products = () => {
  const navigate = useNavigate();
  const images = [
    "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1600",
  ];
  const [sort, setSort] = useState(null);

  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);

  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const handleSelectedSubcats = (e) => {
    const { checked, value } = e.target;
    setSelectedSubCategories(
      checked
        ? (prev) => [...prev, parseInt(value)]
        : (prev) => prev.filter((item) => item !== parseInt(value))
    );
  };
  useEffect(() => {
    makeRequest.post("/categories", catId).then((res) => {
      if (!res.data) navigate("/");
    });
  }, []);

  const { data, loading, error } = UseFtech("/subcategories", "get");

  return (
    <PageContainer container>
      <ScrollToTop />
      <SideBar item xs={0} md={5} lg={3} xl={2}>
        {/*  */}
        <Stack spacing={2}>
          {/*  */}
          <Title>Products Categories</Title>

          <FormGroup>
            {loading ? (
              <Typography sx={{ minHeight: "100vh" }} color='text.primary'>
                Loading...
              </Typography>
            ) : error ? (
              <Typography color='text.primary'>
                Something Went Wrong ...
              </Typography>
            ) : (
              data &&
              data?.map((item) => (
                <FormControlLabel
                  key={item.subcat_id}
                  disableTypography
                  sx={{ color: "text.secondary" }}
                  control={<Checkbox />}
                  label={item.name}
                  onChange={handleSelectedSubcats}
                  value={item.subcat_id}
                />
              ))
            )}
          </FormGroup>
          {/*  */}
        </Stack>

        <Stack direction='column' spacing={2}>
          {/*  */}
          <Title>Filter By Price</Title>

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
          <Title>Sort By</Title>

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

      <ProductsContainer item xs={12} md={7} lg={9} xl={10}>
        <img
          src={images[catId - 1]}
          // src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />

        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCategories}
        />
      </ProductsContainer>
    </PageContainer>
  );
};

export default Products;

const SideBar = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  width: "100%",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  height: "calc(100vh - 4rem)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
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

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.25rem",
}));

const PageContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  minHeight: "calc(100vh - 4rem)",
  backgroundColor: theme.palette.background.default,
}));
