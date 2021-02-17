import React, { Component } from 'react';
import classes from './Forecast.module.css';
import ForecastMenu from '../../Components/UI/ForecastMenu/ForecastMenu';
import Current from '../ForecastLayouts/Current/Current';
import Daily from '../ForecastLayouts/Daily/Daily';
import Hourly from '../ForecastLayouts/Hourly/Hourly';
import {Transition} from 'react-transition-group';
import {entering} from '../../Assets/Transitions/Fade.module.css';

class Forecast extends Component {

    state = {
        forecastType: 'Current',
        switchTo: '',
        show: true
    }
    menuClickHandler = event => {
        this.setState({
            switchTo: event.target.textContent,
            show: false
        })
    }
    switch = ()=> {
        this.setState({
            forecastType: this.state.switchTo,
            show:true
        })
    }

    render() {
        let forecast = state => null;
        switch (this.state.forecastType) {
            case 'Hourly':
                forecast = state => <Hourly state={state} />;
                break;
            case 'Daily':
                forecast =  state =>  <Daily state={state} />;
                break;
            default:
                forecast = state =>  <Current state={state} />;
        }
        return (
            <div className={[classes.Forecast, entering].join(' ')}>
                <ForecastMenu active={this.state.forecastType} onClick = {this.menuClickHandler}/>
                <Transition onExited={this.switch} unmountOnExit mountOnEnter in={this.state.show} timeout={400}>
                 {state => forecast(state)}
                </Transition>
            </div>
        );
    }
}

export default Forecast;