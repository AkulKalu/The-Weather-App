import React, {Component} from 'react';
import classes from './WeatherCard.module.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import TempNav from '../UI/TempNav/TempNav';
import {CSSTransition} from 'react-transition-group';
import transitions from '../../Assets/Transitions/Fade.module.css';

class WeatherCard extends Component {
    state = {
        tempUnit: 'celsius',
        switch: true
    }
    unitChangeHandler = event => {
        this.setState({
            switchTo: event.target.value,
            switch: false,
        })
    }

    render() {
        return (
            <div className={classes.Card}>
                <div className={classes.Date}>
                    <span className={classes.Text}>
                        {`${this.props.day} ${this.props.date.toLocaleDateString()}`}
                    </span>
                    <span className={classes.Text}>
                        {this.props.date.toLocaleTimeString()}
                    </span>
                </div>
                <WeatherIcon type={this.props.icon} size="Large" />
                <div className={classes.TempWrap}>
                    <TempNav clickEvent = {this.unitChangeHandler} active={this.state.tempUnit} />
                    <CSSTransition onExited={() => this.setState({switch: true, tempUnit: this.state.switchTo})} 
                    mountOnEnter unmountOnExit 
                    classNames={transitions} 
                    in={this.state.switch} timeout={500} >
                        <div className={classes.Temp}>
                            {this.props.temp[this.state.tempUnit]}
                        </div>
                    </CSSTransition>
                </div>
                <p className={classes.Text}>{this.props.description}</p>
            </div>
        )
    }
}

export default WeatherCard;

