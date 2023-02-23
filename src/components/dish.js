import React, { Component, Fragment } from "react";
import Button from '@mui/material/Button';

export class Flag extends Component{
    render(){
        return(
            <div>
                <h1>Bandera</h1>
            </div>
        );
    }
}

export class Ingredient extends Component{
    render(){
        return(
            //forma normal con sintaxtos JSX
            /*<div>
                <h1>Ingredientes</h1>
            </div>*/
            // forma usando la etiqueta Frgment
            <Fragment>
                <h4>Ingredientes</h4>
                <h4>Ingredientes</h4>
            </Fragment>// lo que permite esta etiuqeta, es que al llamar al componente dentro de otra clase, esta se encontrara ahora al mismo nivel y no dentro de otro div
            // sintaxisis pero en React Native
            //return React.createElement('h4', {}, "Ingrediente");
        );
    }
}

class Dish extends Component{
    ingredients = ["Tortilla", "Carne", "Cebolla"];
    
    countIngredients() {
        return this.ingredients.length;
    }

    render(){
        return(
            <div className="dish">
                {/* <h1>Platillo</h1> */}
                {/* <h1>{this.props.name}</h1>
                {this.props.qty} */}
                <h1>{this.props.name}</h1>
                <h3>Total de Ingredientes {this.countIngredients()}</h3>
                <ul>
                    {this.ingredients.map(ingredient => (
                        <li>{ingredient}</li>
                    ))}
                </ul>
                {/* <Ingredient/> */}
                <Button variant="contained">Elegir</Button>
            </div>
        );
    }
}

export default Dish;