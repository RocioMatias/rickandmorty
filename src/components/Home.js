import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Home = () => {

    return (
        <div className="App">
            <header className="App-header">
            <img src= {process.env.PUBLIC_URL + "/images/Rick_and_Morty.svg.png"}  width="400" alt= "rickandmorty"/>
                <Link to="character">Ver personajes</Link>
            </header>
        </div>

    )

}

export default Home;

