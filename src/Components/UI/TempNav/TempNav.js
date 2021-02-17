import React from 'react';
import classes from './TempNav.module.css';
import Button from '../Button/Button';


const TempNav = props => {
    return ( 
    <div className={classes.UnitControl}>
        <Button clickEvent={props.clickEvent} active={props.active === 'celsius'} value="celsius" type='temp' name='C°' />
        <Button clickEvent={props.clickEvent} active={props.active === 'fahrenheit'} value="fahrenheit" type='temp' name='F°' />
        <Button clickEvent={props.clickEvent} active={props.active === 'kelvin'} value="kelvin" type='temp' name='K°'/>
    </div>
    )
}

export default TempNav;


