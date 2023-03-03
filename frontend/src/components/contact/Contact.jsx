import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@mui/icons-material/Instagram";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IconButton } from "@mui/material";
import "./contact.scss";
import styled from "@emotion/styled";

const StyledIconButton = styled(IconButton)({
    color: "#eee",
    "&:hover": {
      color: "#fff",
    },
  });
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact--left'>
        <span>BE IN TOUCH WITH US:</span>
      </div>
      <div className='contact--center'>
        <InputGroup>
          <Form.Control placeholder="Recipient's username" />
          <InputGroup.Text>JOIN US</InputGroup.Text>
        </InputGroup>
      </div>
      <div className='contact--right'>
        <StyledIconButton href='https://www.facebook.com/xtern44' target='_blank'>
          <FacebookIcon />
        </StyledIconButton>
        <StyledIconButton href='https://www.instagram.com/mortada_korti' target='_blank'>
          <InstagramIcon />
        </StyledIconButton>
        <StyledIconButton href='https://www.twitter.com/mortada_kr' target='_blank'>
          <GitHubIcon />
        </StyledIconButton>
        <StyledIconButton href='https://www.facebook.com/xtern44' target='_blank'>
          <LinkedInIcon />
        </StyledIconButton>
      </div>
    </div>
  );
};

export default Contact;
