import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs(props) {
  return (
    <div role="presentation"  onClick={handleClick}>
      <Breadcrumbs  aria-label="breadcrumb">
        <Link  underline="hover" color="inherit" to="/">
          Главная
        </Link>
        <Typography color="text.primary">{props.text}</Typography>
      </Breadcrumbs>
    </div>
  );
}