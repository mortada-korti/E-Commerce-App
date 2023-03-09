import UseFtech from "../../hooks/UseFtech";
import { Link } from "react-router-dom";

// components
import Item from "../item/Item";

// @mui
import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const List = ({ catId, subCats, sort, maxPrice }) => {
  const payload = {
    catId: catId,
    subCats: subCats,
    sort: sort,
    maxPrice: maxPrice,
  };

  const { data, loading, error } = UseFtech(
    "/products",
    "post",
    JSON.stringify(payload)
  );

  return (
    <ListContainer container>
      {loading ? (
        <Typography color='text.primary'>Loading...</Typography>
      ) : error ? (
        <Typography color='text.primary'>Something Went Wrong...</Typography>
      ) : (
        data &&
        data?.map((item) => (
          <Grid
            item
            xs={12}
            md={12}
            lg={4}
            xl={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "0.5rem 0",
            }}
            key={item.product_id}>
            <Link to={`/product/${item.product_id}`}>
              <Item item={item} />
            </Link>
          </Grid>
        ))
      )}
    </ListContainer>
  );
};

export default List;

const ListContainer = styled(Grid)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
}));
