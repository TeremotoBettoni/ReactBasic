import React, { Component } from "react";
import data from "../assets/data/dishes.json"
import Button from '@mui/material/Button';
import Dish from './dish'
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import RestaurantIcon from '@mui/icons-material/Restaurant';

// import { ListSubheader } from "@mui/material";


export class Dishes extends Component{

    goBack = e => {
        e.preventDefault();
        window.location.href = '/';
    }

    render(){
        return(
            <div>
                <h1>Platillos</h1>
                <Button variant="contained" color="secondary" onClick={this.goBack}>Regresar</Button>
                {/* {data.dishes.map(dish => (
                    <div>
                        <div>{dish.name}</div>
                        <div>{dish.ingredientes}</div>
                        <br />
                    </div>
                ))} */}

                {/* Lista de platillos pero con stilo de Material */}

                {/* <nav aria-label="main mailbox folders">
                    <List subheader={<ListSubheader component="div">Platillos</ListSubheader>}>
                        {data.dishes.map((dish, index) =>(
                            <ListItem key={index}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <RestaurantIcon />
                                    </ListItemIcon>
                                    <ListItemText inset primary={dish.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </nav> */}

                {data.dishes.map((dish, index) =>(
                    <Dish key={index} name={dish.name} ingredients={dish.ingredients}></Dish>
                ))}

            </div>
        );
    }
}

export default Dishes;