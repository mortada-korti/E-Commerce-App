import Col from "react-bootstrap/esm/Col";
import "./products.scss";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormLabel, Slider } from "@mui/material";
import List from "../../components/list/List";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState("");
  const catId = parseInt(useParams().id);

  return (
    <div className='products'>
      <Col md={3} className='products--left'>
        <div className='left--item'>
          <span className='item--title'>Products Categories</span>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label='hat' />
            <FormControlLabel control={<Checkbox />} label='t-shirt' />
          </FormGroup>
        </div>
        <div className='left--item'>
          <span className='item--title'>Filter By Price</span>
          <div className='slider'>
            <span>0</span>
            <Slider
              defaultValue={30}
              min={0}
              max={1000}
              valueLabelDisplay='auto'
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice ? `${maxPrice} $` : "1000 $"}</span>
          </div>
        </div>
        <div className='left--item'>
          <span className='item--title d-block'>Sort By</span>
          <FormControl>
            <RadioGroup defaultValue='female' name='radio-buttons-group'>
              <FormControlLabel
                disableTypography
                value='asc'
                control={<Radio />}
                label='Price (Lowest First)'
                sx={{ fontSize: "0.9rem" }}
                onChange={(e) => setSort(e.target.value)}
              />
              <FormControlLabel
                disableTypography
                value='desc'
                control={<Radio />}
                label='Price (Highest First)'
                sx={{ fontSize: "0.9rem" }}
                onChange={(e) => setSort(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Col>
      <Col md={9} className='products--right'>
        <img
          src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
        {/* <div>dsqdqs</div> */}
      </Col>
    </div>
  );
};

export default Products;
