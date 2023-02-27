import React, { Component } from "react";
import Button from '@mui/material/Button';
import Country from "./country";


export class Countries extends Component{
    constructor(){
        super();
        this.state ={
            countries: []
        }
    }

    componentDidMount(){
        this.getCountries();
    }

    getCountries(){
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            this.setState({countries: data});
        })
        .catch(error => console.log(error));
    }

    delete = name => {
        let newState = {...this.state};
        newState.countries = newState.countries.filter(
            country => country.name !==name
        );
        this.setState(newState);
    }

    render(){
        console.log(this.state.countries)
        return(
            <div>
                <h1>Paises</h1>
                <Button variant="contained" color="secondary" onClick={this.getCountries}>Cargar Lista</Button>
                <ul>
                    {this.state.countries.map((country, index) => (
                        <Country key={index} name={country.name} onDelete={this.delete}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Countries;