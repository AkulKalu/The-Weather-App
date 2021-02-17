import React from 'react';
import classes from './Daily.module.css';
import {useSelector} from 'react-redux';

import Day from '../../../Components/Day/Day';
import transitions from '../../../Assets/Transitions/Fade.module.css'

const Daily = props => {
    const forecast = useSelector( state => state.forecastState.dailyForecast );
    const days =  forecast.slice(1).map( (weekday, i) => {
        return <Day 
                key={`day${i}`} 
                icon = {weekday.icon} 
                day = {weekday.day} 
                description = {weekday.description}
                info = {weekday.details} 
                />
    } )
  
    return (  
        <div className={classes.Wrap +' '+ transitions[props.state]}>
                {days}
        </div>
        
    )
}

export default Daily;