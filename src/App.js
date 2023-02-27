import React, { Component } from "react";
import Header from "./components/header";
import NewDish from "./components/newDish";
import Dishes from "./components/dishes";
//import Dish from "./components/dish";
// import Dish, {Flag} from "./components/dish";
// import Dish, * as D from "./components/dish";
// import Dish, {Flag, Ingredient} from "./components/dish";

import './styles/App.css';
//import Button from '@mui/material/Button';

import data from "./assets/data/dishes.json"


class App extends Component{
    // todos los datos siempre deben vivir dentro de u7n state
    state = {
        dish : "tacos",
        diches : data

    }

    showDishes = e => {
        e.preventDefault();
        window.location.href = '/platillos';
    }

    showCountries = e => {
        e.preventDefault();
        window.location.href = '/countries';
    }

    updateDish = (index, updateName) =>{
        let newState = {...this.state};
        newState.diches.dishes[index].name = updateName;

        this.setState(newState);
    }

    addDish = (dishName) =>{
        let newState = {...this.state};

        const newDish ={
            id: newState.diches.dishes.length,
            name: dishName,
            country: "Peru",
            ingredients: [
                "Carne",
                "Papa",
                "Salsa"
            ]
        };

        //ahora generamos la asignacion
        newState.diches.dishes.push(newDish);
        this.setState(newState);
    }

    render(){
        return(
            <div className="App">
                <Header/>
                <NewDish onAddDish={this.addDish}/>
                <br />
                {/* <Dish name={this.dish} qty="3"/> */}
                {/* <Button variant="contained" color="secondary" onClick={this.showDishes}>Platillos</Button> */}
                {/* <Button variant="contained" color="secondary" onClick={this.showCountries}>Paises</Button> */}
                
                {/* Yo como { this.dish }
                <ul>
                    {
                        this.diches.map(dish=><li>{dish}</li>)
                    }
                </ul> */}

                {/* a travez de este podemos obtener los datos a travez de la propiedad data */}
                <Dishes data={this.state.diches} onUpdateDish={this.updateDish}/>
            </div>
        )
    }
}

export default App;