import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import React, { Component } from "react";

import AddIcon from '@mui/icons-material/Add';

class NewDish extends Component{
    render(){
        return(
            <form autoComplete="off">
                <TextField id="outlined-basic" label="Platillo..." type="text" variant="outlined" />
                
                <Fab color="primary" aria-label="add" size='medium' onClick={}>
                    <AddIcon />
                </Fab>
                
            </form>
        );
    }
}

export default NewDish;
