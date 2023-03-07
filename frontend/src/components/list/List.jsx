import { useState, useEffect } from "react";
import axios from "axios";

import Item from "../item/Item";
import { makeRequest } from "../../hooks/MakeRequest";

import { Box, Grid, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

import "./list.scss";
import UseFtech from "../../hooks/UseFtech";

const List = ({ catId, subCats, sort }) => {
  const payload = {
    catId: catId,
    subCats: subCats,
    sort: sort
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
            <Item item={item} />
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
