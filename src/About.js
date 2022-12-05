import React from 'react';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

const About = () => {
    return (

        <div className="App">
            <br/>
            <h1>ABOUT MUSTR</h1>
            <h2>the app for collaborative writers</h2>
            <p><strong>Muster </strong>/ˈməstər/<br/><br/>n. a group of people, <br/><em> ex. a muster of writers </em> <br/><br /> v. to come together, to produce, to summon, <br/><em>ex. write with all the energy you can muster</em>
            <br /><br />
            </p>

            <div>
                <hr/>
                <br /> <Button a href="https://medium.com/@mikahado" target="_blank">Click here to read the blog!</Button> <br />
            </div>
            <br />

        </div>
    )
}

export default About