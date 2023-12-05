import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ bgColor }) => ({
  background: bgColor ? bgColor : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  color: 'white',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  '&:hover': {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 4px 10px 2px rgba(33, 203, 243, .3)',
  },
}));

export default function CustomizedBtn(props) {
  return (
    <StyledButton
      variant={props.variant}
      color={props.color}
      size={props.size}
      bgColor={props.bgColor}
    >
      {props.text}
    </StyledButton>
  );
}
