import * as actionTypes from './actionTypes';
import {locationIq , LOCATION_IQ_KEY, geoLocation} from '../../axiosInstances';
import { get_forecast } from './forecast';

export const requesting_service = () => {
    return {
        type: actionTypes.REQUESTING_SERVICE, 
    }
}
const location_autocomlete_success = data => {
    return {
        type: actionTypes.LOCATION_AUTOCOMPLETE_SUCCESS,
        suggestions: data
    }
}
const location_service_fail = (err) => {
    return {
        type: actionTypes.LOCATION_SERVICE_FAIL,
        error: err
    }
}
export const location_autocomlete = (searchString) => {
    return dispatch => {
        dispatch(requesting_service());
        locationIq.get('/autocomplete.php',{
            params: {
                key: LOCATION_IQ_KEY,
                q: searchString,
            }
        }).then( res => {
            dispatch(location_autocomlete_success( res.data ))
            
        }).catch( err => {
            dispatch(location_service_fail(err))
        })
    }
}
export const clear_suggestions = () => {
    return {
        type: actionTypes.CLEAR_SUGGESTIONS
    }
}

const geo_location_success = data => {
    return {
        type: actionTypes.GEO_LOCATION_SUCCESS,
        position: data
    }
}


export const geo_location = () => {
    return dispatch => {
        dispatch( requesting_service() );
        geoLocation.get()
        .then(res => {
            dispatch(geo_location_success( res.data ));
            dispatch(reverse_geocoding(res.data.longitude, res.data.latitude));
            dispatch(get_forecast(res.data.longitude, res.data.latitude));
        })
        .catch(err => {
            dispatch (location_service_fail( err ) )
        })
    }
}

const reverse_geocoding_success = data => {
    return {
        type: actionTypes.REVERSE_GEOCODING_SUCCESS,
        address: data
    }
}

export const reverse_geocoding = ( longitude, latitude ) => {
    return dispatch => {
        dispatch( requesting_service() );
        locationIq.get( '/reverse.php', {
            params: {
                key: LOCATION_IQ_KEY,
                lat: latitude,
                lon: longitude,
                format: 'json',
                normalizeaddress: '1'
            }
        }).then ( res => {
            dispatch(reverse_geocoding_success( res.data ));
        }).catch( err => {
            dispatch(location_service_fail( err ));
        })
    }
}
const geocoding_success = (data) => {
    return {
        type: actionTypes.GEOCODING_SUCCESS,
        suggestions: data
    }
}

export const geocoding = searchString => {
    return dispatch => {
        dispatch(requesting_service());
        locationIq.get('/search.php', {
            params:{
                key:LOCATION_IQ_KEY,
                q: searchString,
                format: 'json'
            }
        }).then( res => {
            dispatch(geocoding_success( res.data ))
        }
        ).catch( err => {
            dispatch(location_service_fail( err ));
        }
        )
    }
}