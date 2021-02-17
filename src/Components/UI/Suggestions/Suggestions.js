import React from 'react';
import classes from './Suggestions.module.css';
import Spinner from '../../Spinner/Spinner';
import {CSSTransition} from 'react-transition-group';
import Fade from '../../../Assets/Transitions/Fade.module.css';


const suggestions = props => {
    const error = <div className={classes.Error}>{props.error}</div>;
    const suggestions = props.places ? <ul onClick = {props.onClick} className = {classes.List}>
                                            {props.places.map( ( place, i) => {
                                                return <li 
                                                    className = {classes.ListItem} 
                                                    id={i} 
                                                    key={`sugg${i}`}>{place.address}</li>
                                        })}</ul> : <Spinner type="weather" />
    return (
        <CSSTransition classNames={Fade} mountOnEnter unmountOnExit in={props.show} timeout={400}>
            <div className={classes.Container}>
                {props.error ? error : suggestions}
            </div>
        </CSSTransition>
    )
}

export default suggestions;

