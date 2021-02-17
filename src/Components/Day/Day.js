import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import DataIcon from '../DataIcon/DataIcon';
import classes from './Day.module.css';

const Day = props => {
    
    return (
        <div  className={classes.Wrap}>
            <div className={classes.InnerWrap}>
                <div className={classes.Card}>
                    <span>{props.day}</span>
                    <WeatherIcon type={props.icon} height="9vh"/>
                    <span>{props.info.temp.celsius}</span>
                    <span>{props.description}</span>
                </div>
                <div className={[classes.Card, classes.Details].join(' ')}>
                    <span>UV</span>
                    <span>{props.info.uvi}</span>
                    <span>Cloudines</span>
                    <span>{props.info.cloudiness}</span>
                    <span>Humidity</span>
                    <span>{props.info.humidity}</span>
                    <span>Wind Speed</span>
                    <span>{props.info.wind_speed} <DataIcon type="arrow" size="Arrow" additional={props.info.wind_direction}/></span>
                    <span>Precipitation</span>
                    <span>{props.info.precipitation}</span>
                </div>
            </div>
        </div>
       
    )
}

export default Day;
