import * as actionTypes from '../Actions/actionTypes';
import { updateState, sortSuggestions} from '../../Toolkit/toolkit';

const initialState = {
    longitude: null,
    latitude: null,
    location: '',
    suggestions: null,
    requestingService: false,
    error: null
}

const reducer = ( state=initialState, action ) => {

    switch ( action.type ) {
        case actionTypes.REQUESTING_SERVICE:
            return updateState(state, {
                requestingService:true,
                suggestions: null,
                error: null
            });

        case actionTypes.CLEAR_SUGGESTIONS:
            return updateState(state, {
                suggestions: null,
                error: null
            });

        case actionTypes.LOCATION_AUTOCOMPLETE_SUCCESS:
            return updateState( state,{ 
                 requestingService:false,
                 suggestions:sortSuggestions(action.suggestions)
                });

        case actionTypes.LOCATION_SERVICE_FAIL:
            return updateState( state, {
                requestingService:false,
                error: action.error
            });

        case actionTypes.GEOCODING_SUCCESS:
            const res = action.suggestions ? {key: 'suggestions', data: sortSuggestions(action.suggestions)} 
            : {key: 'error', data: {message:'No results'}};
            return updateState( state, {
                requestingService:false,
                [res.key]: res.data
            });

        case actionTypes.REVERSE_GEOCODING_SUCCESS:
            return updateState(state, {
                location: action.address.display_name
            })

        case actionTypes.GEO_LOCATION_SUCCESS: 
            return updateState( state, { 
                longitude:action.position.longitude, 
                latitude:action.position.latitude,
                requestingService: false } );

        case actionTypes.CLEAR_ERROR:
            return updateState(state, {error: null});
        default:
            return state;
    }
}


export default reducer;