import React from 'react';

const Home = () => {
    return (

        <div className="App">
            
            <h1>MUSTR</h1>
            <h2>an app for collaborative writers</h2>
            <div>
                <hr/>
                <img src={require("./img/exquisiteHorseLogo.png")} alt="A Very Exquisite Horse" height="200" />
                <h3>Try our first feature - Exquisite Horse -- now. </h3>
            </div>

        </div>
    )
}

export default Home