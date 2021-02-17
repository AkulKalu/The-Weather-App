import React from 'react';
import classes from './WeatherIcon.module.css';


const weatherIcon = props => {
    const iconTypeCodes = {
        '01d': 'day',
        '02d': 'cloudy-day-1',
        '03d': 'cloudy',
        '04d': 'cloudy',
        '09d': 'rainy-6',
        '10d': 'rainy-1',
        '11d': 'thunder',
        '13d': 'snowy-6',
        '50d': 'cloudy',
        '01n': 'night',
        '02n': 'cloudy-night-1',
        '03n': 'cloudy-night-3',
        '04n': 'cloudy-night-3',
        '09n': 'rainy-5',
        '10n': 'rainy-6',
        '11n': 'thunder',
        '13n': 'snowy-6',
        '50n': 'cloudy-night-1'

    }
    const addNight = ['09n','10n', '11n', '13n'];
    const styling = {
        height: props.height,
    }

    return (
        <div className={classes.Wrapp}>
            {addNight.includes(props.type) ? 
                <img style={styling} 
                className={`${classes.Icon} ${classes[props.size]} ${classes.Night}`} 
                src={require(`../../Assets/WeatherIcons/night.svg`)} 
                alt="Weather Icon" /> 
                : null }
            <img 
            style={styling} 
            className={`${classes.Icon} ${classes[props.size]}`} 
            src={require(`../../Assets/WeatherIcons/${iconTypeCodes[props.type]}.svg`)} 
            alt="Weather Icon" />
        </div>
    )
}


export default weatherIcon;