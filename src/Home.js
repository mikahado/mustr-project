import React from 'react';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

const Home = () => {
    return (

        <div className="App">
            <br/>
            <h1>MUSTR</h1>
            <h2>a platform for collaborative writers</h2>
            <p><strong>Muster </strong>/ˈməstər/<br/><br/>n. a group of people, <br/><em> ex. a muster of writers </em> <br/><br /> v. to come together, to produce, to summon, <br/><em>ex. to write with all the energy you can muster</em>
            <br /><br />
            </p>

            <div>
                <hr/>
                <br />
                <h3>Try Our First Feature </h3>
                    <NavLink to="/creations/new" end>
                        <img src={require("./img/exquisiteHorseLogo.png")} alt="An Exquisite Horse" height="200" />
                    </NavLink>
                    <h3>The Exquisite Horse </h3>
               
        <br /><br />
            </div>

        </div>
    )
}

export default Home