import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function Navigation() {
  return (
    <div>

<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >

    <ButtonGroup size="large" variant="contained" aria-label="contained button group">

        <Button color="secondary">
          <NavLink
            to="/"
            exact
          >
            Home
          </NavLink>
        </Button>

        <Button color="secondary">
          <NavLink
            to="/creations"
            exact
          >
            Creations
          </NavLink>
        </Button>

        <Button color="secondary">
          <NavLink
            to="/creations/new"
            exact
          >
            New
          </NavLink>
        </Button>

        <Button color="secondary">
          <NavLink
            to="/about"
            exact
          >
            About
          </NavLink>
        </Button>

    </ButtonGroup>  

  </Box>
      
    </div>
  );
}

export default Navigation