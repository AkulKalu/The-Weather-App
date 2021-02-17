import React from 'react';
import classes from './Current.module.css';
import {useSelector} from 'react-redux';
import WeatherCard from '../../../Components/WeatherCard/WeatherCard';
import WeatherDetails from '../../../Components/WeatherDetils/WeatherDetails';
import transitions from '../../../Assets/Transitions/Fade.module.css';
 
const Current = props => {
    const forecast = useSelector( state => state.forecastState.currentForecast);
    return (
        <div className={[classes.Forecast, transitions[props.state]].join(' ')}>
            <WeatherCard 
                icon={forecast.icon} 
                temp={forecast.details.temp}
                day={forecast.day}
                date={forecast.date}
                description={forecast.description} />
            <WeatherDetails info={forecast.details} />
        </div>
    )
}

export default Current;