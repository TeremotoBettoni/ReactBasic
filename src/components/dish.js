import React, { Component } from "react";
//import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import Typography from '@mui/material/Typography';
//import { CardActionArea, List } from '@mui/material';
import { ScatterPlot } from "@mui/icons-material";
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


// export class Flag extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Bandera</h1>
//             </div>
//         );
//     }
// }

// export class Ingredient extends Component{
//     render(){
//         return(
//             //forma normal con sintaxtos JSX
//             /*<div>
//                 <h1>Ingredientes</h1>
//             </div>*/
//             // forma usando la etiqueta Frgment
//             <Fragment>
//                 <h4>Ingredientes</h4>
//                 <h4>Ingredientes</h4>
//             </Fragment>// lo que permite esta etiuqeta, es que al llamar al componente dentro de otra clase, esta se encontrara ahora al mismo nivel y no dentro de otro div
//             // sintaxisis pero en React Native
//             //return React.createElement('h4', {}, "Ingrediente");
//         );
//     }
// }

class Dish extends Component{
    ingredients = ["Tortilla", "Carne", "Cebolla"];
    
    countIngredients() {
        return this.ingredients.length;
    }

    render(){
        //const { params } = this.props.match;
        
        return(
            // Primera Manera
            // <div className="dish">
            //     {/* <h1>Platillo</h1> */}
            //     {/* <h1>{this.props.name}</h1>
            //     {this.props.qty} */}
            //     <h1>{params.name}</h1>
                
            //     <h1>{this.props.name}</h1>
            //     <h3>Total de Ingredientes {this.countIngredients()}</h3>
            //     <ul>
            //         {this.ingredients.map((ingredient, index) => (
            //             <li key={index}>{ingredient}</li>
            //         ))}
            //     </ul>
            //     {/* <Ingredient/> */}
            //     <Button variant="contained">Elegir</Button>
            // </div>

            // Manera con card de Material IU
            <Card>
                <CardContent>
                    <nav aria-label="main mailbox folders">
                        <List subheader={<ListSubheader component="div">{this.props.name}</ListSubheader>}>
                            {this.props.ingredients.map((ingredients, index) =>(
                                <ListItem key={index}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ScatterPlot />
                                        </ListItemIcon>
                                        <ListItemText inset primary={ingredients} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </nav>
                </CardContent>
            </Card>
        );
    }
}

export default Dish;