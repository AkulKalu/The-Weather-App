import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import DataBar from '../../../Components/DataBar/DataBar';
import WeatherIcon from '../../../Components/WeatherIcon/WeatherIcon';
import DataNav from '../../../Components/UI/DataNav/DataNav';
import classes from './Hourly.module.css';
import transitions from '../../../Assets/Transitions/Fade.module.css';

const Hourly = props => {

    const forecast = useSelector( state => state.forecastState.hourlyForecast);
    const [dataMode, setDataMode ] = useState('temp');
    
    const units = {
        humidity: '%',
        cloudiness: '%',
        wind_speed: 'm/s',
        precipitation: 'mm/h',
        temp: ''
    }
    const hours = forecast.map((hour, i) => {
        return <div key={i} className={classes.Display}>
                <WeatherIcon type={hour.icon} size="Small" />
                <span className={classes.Data}>
                {dataMode === 'temp' ? hour[dataMode].celsius : `${hour[dataMode]}`}{` ${units[dataMode]}`}
                </span>
                <DataBar max={hour.highest[dataMode]} value={dataMode === 'temp' ? +hour[dataMode].celsius.slice(0, 2) : hour[dataMode]}/>
                <span className={classes.Time} >
                {hour.time.getHours()}<br/>{hour.time.toLocaleTimeString().slice(-2)}
               </span>
        </div> 
    });
    return (
        <div className = {[classes.Forecast, transitions[props.state]].join(' ')}>
            <DataNav dataMode={dataMode} onClick={mode => setDataMode(mode)} />
                <div className={classes.TimeLineWrap}>
                    <div className={classes.TimeLine}>
                        {hours}
                    </div>
                </div>
        </div>
    )
}

export default Hourly;