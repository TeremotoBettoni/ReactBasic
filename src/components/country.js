import React, { Component } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



export class Country extends Component{
    delete = name => {
        this.props.onDelete(name);
    }

    render(){
        return(
            <li>
                <IconButton size="small" onClick={this.edit}>
                    <DeleteIcon onClick={() => this.delete(this.props.name)}/>
                </IconButton>
                {this.props.name}
            </li>
        )
    }
}

export default Country;