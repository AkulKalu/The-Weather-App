import React from 'react';
import classes from './Intro.module.css';

const Intro = props => {
    return (
        <div className={classes.Wrap}>
            <p className={classes.P1}>The</p>
            <p className={classes.P2} onAnimationEnd={props.onEnd}>Weather</p>
            <p className={classes.P3}>App</p>
        </div>
    )
}

export default Intro;