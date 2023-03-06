// @mui
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Style
import "./contact.scss";

const StyledIconButton = styled(IconButton)({
  color: "#eee",
  "&:hover": {
    color: "#fff",
  },
});
const Contact = () => {
  return (
    <ContactContainer>
      {/*  */}
      <Typography>BE IN TOUCH WITH US:</Typography>

      <Box className='input'>
        <InputGroup>
          <Form.Control placeholder='Contact Us' />
          <InputGroup.Text>JOIN US</InputGroup.Text>
        </InputGroup>
      </Box>

      <Stack direction='row' className='contact--right'>
        <StyledIconButton
          href='https://www.facebook.com/xtern44'
          target='_blank'>
          <FacebookIcon />
        </StyledIconButton>

        <StyledIconButton
          href='https://www.instagram.com/mortada_korti'
          target='_blank'>
          <InstagramIcon />
        </StyledIconButton>

        <StyledIconButton href='https://www.github.com/xtern44' target='_blank'>
          <GitHubIcon />
        </StyledIconButton>

        <StyledIconButton
          href='https://www.linkedin.com/in/mortada-korti/'
          target='_blank'>
          <LinkedInIcon />
        </StyledIconButton>
      </Stack>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: "1rem 0",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "3rem",
  padding: "0.5rem 1rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "1rem",
  },
}));
