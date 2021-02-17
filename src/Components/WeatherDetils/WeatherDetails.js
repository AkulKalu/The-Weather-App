import React from 'react';
import classes from './WeatherDetails.module.css';
import DataIcon from '../DataIcon/DataIcon';


const WeatherDetails = props => {
        const rows = Object.keys(props.info).map( (key, i) => {
            if(props.info[key] && !['temp', 'wind_direction'].includes(key)) {
                
                const windArrow = key === 'wind_speed' ?  
                <DataIcon type="arrow" size="Arrow" additional={props.info.wind_direction} /> : null;
             
                return <div className={classes.Tile} key={`wi${i}`}>
                            <p >{key[0].toUpperCase() + key.slice(1).replace('_', ' ')}</p>
                            <DataIcon type={key} size="Cover"  />
                            <p
                            className={classes.Value}>{props.info[key]}{windArrow}</p>
                       </div>
            }
            return null;   
        });
  
        return (
            <div className={classes.Wrap}>
                <div className={classes.Window}>
                    {rows}
                </div>
            </div>
        )
}

export default WeatherDetails;
