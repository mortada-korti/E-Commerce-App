import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import {
  Stack,
  TextField,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Button,
  Select,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  FormLabel,
  Radio,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import { makeRequest } from "../../hooks/MakeRequest";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest.post("/add-product", JSON.stringify(inputs)).then((res) => {
      console.log(res.data), navigate("/");
    });
  };

  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    img: "",
    img2: null,
    isNew: 0,
    oldPrice: null,
    price: null,
    type: 0,
    product_catId: "",
    product_subCatId: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setInputs((prevInputs) => {
      return type === "checkbox"
        ? { ...prevInputs, [name]: checked ? 1 : 0 }
        : {
            ...prevInputs,
            [name]:
              type === "radio" || type === "number" ? parseFloat(value) : value,
          };
    });
  };

  return (
    <UserContainer onSubmit={handleSubmit} component='form'>
      <Title>Product Add</Title>
      <TextField
        name='title'
        label='Title'
        required
        variant='outlined'
        onChange={handleChange}
        size='small'
      />
      <TextField
        name='desc'
        label='Desc'
        variant='outlined'
        required
        onChange={handleChange}
        size='small'
      />
      <TextField
        name='img'
        label='Img Link'
        variant='outlined'
        required
        onChange={handleChange}
        size='small'
      />
      <TextField
        name='img2'
        label='Img2 Link'
        variant='outlined'
        size='small'
        onChange={handleChange}
      />

      <Typography color='text.primary'>
        <FormControlLabel
          control={<Checkbox name='isNew' onChange={handleChange} />}
          label='New Season'
        />
      </Typography>

      <FormControl variant='outlined' size='small' onChange={handleChange}>
        <InputLabel htmlFor='oldPrice'>Old Price</InputLabel>
        <OutlinedInput
          id='oldPrice'
          name='oldPrice'
          endAdornment={<InputAdornment position='end'>$</InputAdornment>}
          label='Old Price'
          type='number'
          inputProps={{
            step: 0.01,
            min: 0.01,
          }}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl variant='outlined' size='small' onChange={handleChange}>
        <InputLabel htmlFor='price'>Price</InputLabel>
        <OutlinedInput
          id='price'
          name='price'
          endAdornment={<InputAdornment position='end'>$</InputAdornment>}
          label='Price'
          type='number'
          step={0.01}
          inputProps={{
            step: 0.01,
            min: 0.01,
            required: true,
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Type</FormLabel>
        <RadioGroup
          defaultValue={0}
          name='type'
          value={inputs.type}
          onChange={handleChange}>
          <FormControlLabel
            value={0}
            sx={{ color: "text.primary" }}
            control={<Radio />}
            label='Normal'
          />
          <FormControlLabel
            value={1}
            sx={{ color: "text.primary" }}
            control={<Radio />}
            label='Featured'
          />
          <FormControlLabel
            value={2}
            sx={{ color: "text.primary" }}
            control={<Radio />}
            label='Trending'
          />
        </RadioGroup>
      </FormControl>

      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth size='small'>
          <InputLabel>Category</InputLabel>
          <Select
            value={inputs.product_catId}
            label='Category'
            name='product_catId'
            // defaultValue={0}
            required
            onChange={handleChange}>
            <MenuItem disabled value={0}>
              Category
            </MenuItem>
            <MenuItem value={1}>Men</MenuItem>
            <MenuItem value={2}>Women</MenuItem>
            <MenuItem value={3}>Children</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth size='small'>
          <InputLabel>SubCategory</InputLabel>
          <Select
            value={inputs.product_subCatId}
            label='SubCategory'
            name='product_subCatId'
            required
            defaultValue={0}
            onChange={handleChange}>
            <MenuItem disabled value={0}>
              SubCategory
            </MenuItem>
            <MenuItem value={1}>Hat</MenuItem>
            <MenuItem value={2}>Shoes</MenuItem>
            <MenuItem value={3}>Pants</MenuItem>
            <MenuItem value={4}>T-shirt</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button type='submit' variant='contained'>
        Add
      </Button>
    </UserContainer>
  );
};

export default ProductAdd;

const UserContainer = styled(Box)(({ theme }) => ({
  padding: "2rem",
  minHeight: "calc(100vh - 4rem)",
  display: "flex",
  alignItems: "flex-start",
  backgroundColor: theme.palette.background.default,
  flexDirection: "column",
  gap: "1rem",
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "2rem",
  fontWeight: "600",
}));
