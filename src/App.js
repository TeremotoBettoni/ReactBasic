import React, { Component } from "react";
import Header from "./components/header";
//import Dish from "./components/dish";
import NewDish from "./components/newDish";
// import Dish, {Flag} from "./components/dish";
// import Dish, * as D from "./components/dish";
// import Dish, {Flag, Ingredient} from "./components/dish";

import './styles/App.css';
import Button from '@mui/material/Button';


class App extends Component{
    dish = "tacos";
    diches = ["Tacor", "Ceviche", "Paella"];

    showDishes = e => {
        e.preventDefault();
        window.location.href = '/platillos';
    }
    showCountries = e => {
        e.preventDefault();
        window.location.href = '/countries';
    }

    render(){
        return(
            <div className="App">
                <Header/>
                <NewDish />
                <br />
                {/* <Dish name={this.dish} qty="3"/> */}
                <Button variant="contained" color="secondary" onClick={this.showDishes}>Platillos</Button>
                <br />
                <br />
                <Button variant="contained" color="secondary" onClick={this.showCountries}>Paises</Button>
                
                {/* Yo como { this.dish }
                <ul>
                    {
                        this.diches.map(dish=><li>{dish}</li>)
                    }
                </ul> */}
            </div>
        )
    }
}

export default App;