import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      404 Page Not Found Go Back{" "}
      <Link to='/'>
        <Typography
          sx={{ display: "inline", color: "primary.main", margin: "0.5rem" }}>
          Home
        </Typography>
      </Link>
    </Container>
  );
};

export default NotFound;

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "calc(100vh - 4rem)",
}));
