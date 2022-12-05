import React from 'react';

const Home = () => {
    return (

        <div className="App">
            <br/>
            <h1>MUSTR</h1>
            <h2>an app for collaborative writers</h2>
            <p><strong>Muster </strong>/ˈməstər/<br/><br/>n. a group of people, <br/><em> ex. a muster of writers </em> <br/><br /> v. to come together, to produce, to summon, <br/><em>ex. write with all the energy you can muster</em>
            <br /><br />
            </p>

            <div>
                <hr/>
                <br />
                <img src={require("./img/exquisiteHorseLogo.png")} alt="A Very Exquisite Horse" height="200" />
                <h3>Try our first feature - Exquisite Horse - now. </h3>
                <br /><br /><br /><br />
            </div>

        </div>
    )
}

export default Home