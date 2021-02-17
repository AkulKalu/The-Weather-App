import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../Store/Actions';
import Location from '../Location/Location';
import Forecast from '../Forecast/Forecast';
import Spinner from '../../Components/Spinner/Spinner';
import ErrorHandler from '../../Components/ErrorHandler/ErrorHandler';
import Intro from '../../Components/Intro/Intro';
import Background from '../../Components/Background/Background'

class Layout extends Component {

    state = {
        introFinished :  JSON.parse(sessionStorage.getItem('introFinished')) ?? false,
    }

    componentDidMount() {
        this.props.geoLocation();
    }
    onIntroEndHandler = () => {
        this.setState({
            introFinished : true,
        })
        const introFinished = true;
       
        sessionStorage.setItem('introFinished', JSON.stringify(introFinished));
    }
   
    render() {
        const forecast = this.props.requestingForecast ? <Spinner type="weather"/> : 
                         this.props.forecastAvalible ? <Forecast />: null;
        const load = (JSON.parse(sessionStorage.getItem('introFinished')) || this.state.introFinished) ? true : false;

        return (
           <Fragment>
                <ErrorHandler />
                <Background introEnded={this.state.introFinished}/>
                {load ? <Location /> : null}
                {load ? forecast : <Intro onEnd={this.onIntroEndHandler}/>}
            </Fragment>
        ) ;
    }
}
const mapStateToProps = state => {
    return {
        location: state.locationState.location,
        requestingForecast: state.forecastState.requestingForecast,
        forecastAvalible: state.forecastState.avalible
    }
}
const mapDispatchToProps = dispatch => {
    return {
        geoLocation: () => dispatch(actions.geo_location()),
        getForecast: (lon, lan) => dispatch(actions.get_forecast(lon, lan))
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(Layout);