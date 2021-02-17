import * as actionTypes from '../Actions/actionTypes';
import {updateState, sortForecastData, translateWCode} from '../../Toolkit/toolkit';
const initialState = {
    background: null,
    requestingForecast: false,
    avalible: false,
    error: null
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUESTING_FORECAST:
            return updateState(state, {
                requestingForecast : true,
                error: null
            });
        case actionTypes.GET_FORECAST_SUCCESS:
            const forecast = sortForecastData(action.forecast);
            const background = translateWCode(forecast.currentForecast.icon);
            return updateState(state, {
                ...forecast,
                background: background,
                requestingForecast: false 
            });
        case actionTypes.GET_FORECAST_FAIL:
            return updateState(state, {
                requestingForecast : false,
                error: action.error
            });
        case actionTypes.CLEAR_ERROR:
            return updateState(state, {error: null});
        default:
            return state;
    }
}

export default reducer;


