import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system/';

const GradientButton = styled(Button)(({bgColor, hColor}) => ({
    background: bgColor ? bgColor : '',
    '&:hover': {
        background: hColor ? hColor : '',
    }
}))

export default function BasicButtons(props) {
  return (
      <GradientButton variant={props.variant} size={props.size} color={props.color} bgColor={props.bgColor} hColor={props.hColor} style={{ fontSize: props.font }}>{props.text}</GradientButton>
  );
}