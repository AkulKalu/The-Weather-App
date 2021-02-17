import React from 'react';
import classes from './ForecastMenu.module.css';
import Button from '../Button/Button';



const forecastMenu = (props) => {
    const onClickHandler = e => {
        const parent = e.target.parentElement;
        parent.classList.toggle(classes.Underlinie);
        parent.onanimationend = () => {
            parent.classList.toggle(classes.Underlinie, false);
        }
    }
    return (
        <div onClick={onClickHandler} className={classes.Menu}>
            <Button active={props.active === 'Current' } clickEvent={props.onClick} type='forecast' name='Current'/>
            <Button active={props.active === 'Hourly' } clickEvent={props.onClick} type='forecast' name='Hourly'/>
            <Button active={props.active === 'Daily' } clickEvent={props.onClick} type='forecast' name='Daily'/>
        </div>
    )
}

export default forecastMenu;