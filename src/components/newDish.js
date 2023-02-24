import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import React, { Component } from "react";

import AddIcon from '@mui/icons-material/Add';

class NewDish extends Component{
    // constructor(){
    //     super();
    //     this.addDish = this.addDish.bind(this);
    // }

    newDish = React.createRef();

    // forma con Arrow Funtion
    addDish = event => {
        console.log('Agregar platillo');
        event.preventDefault();
        //forma de acceser a valor con TextField con inputRef que pertenece a Material para React
        console.log(this.newDish.value);
        //De esta forma se accede con in inpud normal como el comentado luego
        //console.log(this.newDish.current.value);
    }

    // addDish (event){
    //     console.log('Agregar platillo');
    //     event.preventDefault();
    //     console.log(this);
    // }
    render(){
        return(
            <form autoComplete="off" onSubmit={this.addDish}>
                {/* <input ref={this.newDish} /> */}
                <TextField id="outlined-basic" label="Platillo..." type="text" variant="outlined" inputRef={e => (this.newDish = e)}/>
                
                <Fab color="primary" aria-label="add" size='medium' onClick={this.addDish}>
                    <AddIcon />
                </Fab>
                
            </form>
        );
    }
}

export default NewDish;
