import React from 'react';
import { Button } from "./styled/Button.style"


const Home = () => {
    return (

        <div className="App">
            <h1>Exquisite Horse</h1>
            <img src={require("./img/exquisiteHorseLogo.png")} alt="A Very Exquisite Horse" height="200" />
            <h2>the collaborative creation app</h2>
            <hr/>
            <p>Exquisite Horse is one feature of a colloborative app designed for storytellers of all types -- from film to commercial, novels to poetry. </p>
            <button>Begin</button> 
            <Button>Begin!</Button>
            

        </div>
    )
}

export default Home