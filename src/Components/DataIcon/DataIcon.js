import React from 'react';
import classes from './DataIcon.module.css';

const DataIcon = props => {

    const icons = {
        arrow: 'arrow',
        temp: 'temp',
        wind_speed: 'wind',
        humidity: 'humidity',
        cloudiness: 'cloudiness',
        uvi: 'uvi',
        precipitation: 'precipitation',
        visibility: 'visibility',
    }
    
    const styling = {
         transform: `rotate(${props.additional}deg)`
    }
    return (
        <img 
        className={`${classes.Icon} ${classes[props.size]}`} 
        style={styling}
        src={require(`../../Assets/DataIcons/${icons[props.type]}.svg`)} 
        alt={props.type + ' icon'} 
        />
    )
}

export default DataIcon;