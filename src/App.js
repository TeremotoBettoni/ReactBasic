import React, { Component } from "react";
import Header from "./components/header";
import Dish from "./components/dish";
import NewDish from "./components/newDish";
// import Dish, {Flag} from "./components/dish";
// import Dish, * as D from "./components/dish";
// import Dish, {Flag, Ingredient} from "./components/dish";

import './styles/App.css';

class App extends Component{
    dish = "tacos";
    diches = ["Tacor", "Ceviche", "Paella"];
    render(){
        return(
            <div className="App">
                <Header/>
                <NewDish />
                <Dish name={this.dish} qty="3"/>
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