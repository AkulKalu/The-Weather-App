import { openWeatherMap, OPEN_WEATHER_KEY } from '../../axiosInstances';
import * as actionTypes from './actionTypes';


const get_forecast_success = data => {
    return {
        type: actionTypes.GET_FORECAST_SUCCESS,
        forecast: data
    }
}
const get_forecast_fail = err => {
    return {
        type: actionTypes.GET_FORECAST_FAIL,
        error: err
    }
}
const requesting_forecast = () => {
    return {
        type: actionTypes.REQUESTING_FORECAST,
    }
}
export const clear_error = () => {
    return {
        type: actionTypes.CLEAR_ERROR
    }
}

export const  get_forecast = ( longitude, latitude ) => {
    return dispatch => {
        dispatch(requesting_forecast());
        openWeatherMap.get('', {
            params: {
                appid: OPEN_WEATHER_KEY,
                lon: longitude,
                lat: latitude
            }
        }).then( res => {
            dispatch(get_forecast_success( res.data ));
        }).catch( err => {
            console.log(err)
            dispatch(get_forecast_fail( err ));
        })
    }
}