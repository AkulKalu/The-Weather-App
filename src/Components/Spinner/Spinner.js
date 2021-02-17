import React from 'react';
import classes from './Spinner.module.css';

const Spinner = props => {
    const spinners = {
        weather: require(`../../Assets/WeatherIcons/weather.svg`),
    }
    return (
        <img className={classes.Spinner} src={spinners[props.type]} alt={props.type + ' spinner'} />
    );
}

export default Spinner;