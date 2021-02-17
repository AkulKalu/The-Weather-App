import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../Store/Actions';
import classes from './Location.module.css';
import Button from '../../Components/UI/Button/Button';
import TextInput from '../../Components/UI/TextInput/TextInput';
import Suggestions from '../../Components/UI/Suggestions/Suggestions';

class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSearchBtn: false,
            showSuggestions: false,
            inputValue: '',
            touched: false
        }
        this.delayedRequest = null;
    }
   
    onChangeHandler = (event) => {
        const value = event.target.value;
        this.props.clearSuggestions();
        clearTimeout(this.delayedRequest);
        if(value.length > 1 ) {
            this.delayedRequest =setTimeout(() => { 
                this.props.autoComplete(value)
            },1500)
        }
        this.setState({
            inputValue: value,
            touched: true,
            showSearchBtn: value.length > 1,
            showSuggestions: value.length > 1
        })
    }
    onClickSuggestionsHandler = event => {
        const location = this.props.suggestions[+event.target.id];
        this.props.getForecast(location.longitude, location.latitude);
        this.setState({
            inputValue: location.address,
            showSuggestions: false,
            showSearchBtn: false
        })
    }
    onClickSearchHandler =  () => {
        this.props.geocoding(this.state.inputValue);
    }

    render() {
        return (
            <div className={classes.SearchBar}>
                <TextInput 
                onChange = {this.onChangeHandler} 
                value={this.state.touched ? this.state.inputValue : this.props.currentLocation} 
                label="Location"  
                placeholder="City, address or country" />
                {this.state.showSearchBtn ? <Button clickEvent={this.onClickSearchHandler} type="search" /> : null}
            <Suggestions 
            show={this.state.showSuggestions}
            onClick={this.onClickSuggestionsHandler}
            error={this.props.error ? this.props.error.message : null}  
            places = {this.props.suggestions}/> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        suggestions: state.locationState.suggestions,
        requestingService: state.locationState.requestingService,
        currentLocation: state.locationState.location,
        error: state.locationState.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        autoComplete : (searchString) => dispatch(actions.location_autocomlete(searchString)),
        geoLocation: () => dispatch(actions.geo_location()),
        clearSuggestions: () => dispatch(actions.clear_suggestions()),
        getForecast: (lon, lat) => dispatch(actions.get_forecast(lon, lat)),
        geocoding: (searchString) => dispatch(actions.geocoding(searchString)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);