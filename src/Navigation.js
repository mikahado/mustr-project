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

        <Button>
          <NavLink
            to="/"
            exact
          >
            Home
          </NavLink>
        </Button>

        <Button>
          <NavLink
            to="/creations"
            exact
          >
            Creations
          </NavLink>
        </Button>

        <Button>
          <NavLink
            to="/creations/new"
            exact
          >
            New
          </NavLink>
        </Button>

        <Button>
          <NavLink
            to="/about"
            exact
          >
            About
          </NavLink>
        </Button>

    </ButtonGroup>  

  </Box>
      <br />
    </div>
  );
}

export default Navigation