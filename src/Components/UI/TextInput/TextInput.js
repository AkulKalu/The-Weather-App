import React from 'react';
import classes from './TextInput.module.css';


const textInput = props => {
    return (
            <input type="input" 
            className={classes.TextInput} 
            onChange={props.onChange} 
            placeholder={props.placeholder} 
            value={props.value} />
    )
}

export default textInput;




