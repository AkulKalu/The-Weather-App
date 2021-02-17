import React from 'react';
import classes from './Button.module.css';


const button = props => {

    const buttonStyle ={
        forecast:classes.Forecast,
        search: classes.Search,
        temp: classes.Temp,
        dataIcon: classes.DataIcon
    }
    const search = <img className={classes.SearchIcon} alt="search" src={require('../../../Assets/DataIcons/search.svg')}></img>
    return (
            <button  
            type='button'
            value={props.value}
            onClick={props.clickEvent} 
            className={`${buttonStyle[props.type]} ${props.active ? classes.Active : ''}`}
            >{props.type === 'search' ? search : props.name}</button>
        );
}

export default button;