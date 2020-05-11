import { combineReducers } from 'redux';
import initialState from './initial-state';
import { 
	FETCH_ROOTS, 
	FETCH_ROOTS_FAILURE, 
	FETCH_ROOTS_SUCCESS,
	FETCH_RESOURCES,
	FETCH_RESOURCES_SUCCESS,
	FETCH_RESOURCES_FAILURE,
	SET_FAVOURITE_CATEGORY,
	REMOVE_FAVOURITE_CATEGORY
 } from '../constants';

export default combineReducers({
	roots: (state = initialState.roots, action) => {
		switch (action.type) {
			case FETCH_ROOTS:
				return { isLoading: true };

			case FETCH_ROOTS_FAILURE:
				return {
					isLoading: false,
					error: action.payload,
				};
			
			case FETCH_ROOTS_SUCCESS:
				return {
					isLoading: false,
					payload: action.payload,
				};
			
			default:
				return state;
		}
	},
	resources: (state = initialState.resources, action) => {
		switch(action.type){
			case FETCH_RESOURCES: 
				return {
					...state,
					isLoading : true,
				};
			case FETCH_RESOURCES_SUCCESS: 
				return {
					isLoading: false,
					...action.payload
				}
			case FETCH_RESOURCES_FAILURE:
				return {
					...state,
					isLoading: false,
					error: action.payload,
				};
			default:
				return state;
		}
	},
	favourite: (state = initialState.favourite, action) => {
		switch(action.type){
			case SET_FAVOURITE_CATEGORY: 
				return action.payload
			case REMOVE_FAVOURITE_CATEGORY: 
				return null
			default: 
				return state
		}
	}
});


