import React from 'react';
import classes from './DataBar.module.css';
import { useMediaPredicate } from 'react-media-hook';


const DataBar = props => {
    const barDir = useMediaPredicate("(max-width: 1024px)");

    return (
        <div className={classes.Wrap}>
            <div style={{[ barDir ? 'width': 'height']:  `${Math.round((props.value /props.max)*100) || 0}%`}} className={classes.Bar}>
            </div>
        </div>
    )
}

export default DataBar;