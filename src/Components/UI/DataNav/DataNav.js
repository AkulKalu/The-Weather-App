import React from 'react';
import Button from '../Button/Button';
import DataIcon from '../../DataIcon/DataIcon';
import classes from './DataNav.module.css';


const DataNav = props => {

    return (
        <div className={classes.Nav}>
            <div>
                <Button type="dataIcon" active={props.dataMode === "temp" } 
                clickEvent={() => props.onClick("temp")} 
                name={<DataIcon type="temp" size="Small" />} />
            </div>
                {props.uvi ? 
                    <div><Button 
                    type="dataIcon" 
                    active={props.dataMode === "uvi" } 
                    clickEvent={() => props.onClick("uvi")} 
                    name={<DataIcon type="uvi" size="Small" />} /> 
                    </div>
                : null}
            <div>
                <Button 
                    type="dataIcon" active={props.dataMode === "humidity" } 
                    clickEvent={() => props.onClick("humidity")} 
                    name={<DataIcon type="humidity" size="Small" />} />
                </div>
            <div>
                <Button 
                type="dataIcon" 
                active={props.dataMode === "wind_speed" } 
                clickEvent={() => props.onClick("wind_speed")} 
                name={<DataIcon type="wind_speed" size="Small" />} />
            </div>
            <div>
                <Button 
                type="dataIcon" 
                active={props.dataMode === "precipitation" } 
                clickEvent={() => props.onClick("precipitation")} 
                name={<DataIcon type="precipitation" size="Small" />} />
            </div>
        </div>
    )
}

export default DataNav;