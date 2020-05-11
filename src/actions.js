import { getRoots, getRoot } from './api';
import {
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS,
	FETCH_RESOURCES,
	FETCH_RESOURCES_SUCCESS,
	FETCH_RESOURCES_FAILURE,
	SET_FAVOURITE_CATEGORY,
	REMOVE_FAVOURITE_CATEGORY
} from './constants';

import {
	setCookie,
	deleteCookie
} from './helpers/helpers'

export const fetchRoots = () => dispatch => {
	dispatch({ type: FETCH_ROOTS });

	const request = getRoots();

	return request.then(
		resp => dispatch({ type: FETCH_ROOTS_SUCCESS, payload: resp }),
		error => dispatch({ type: FETCH_ROOTS_FAILURE, payload: error }),
	);
};


export const fetchAllResources = (roots) => {
	return (dispatch) => {
		dispatch({ type: FETCH_RESOURCES })
		const requests = Object.keys(roots).reduce((acc, root) => {
			return {
				...acc, 
				[root]: getRoot(roots[root])}
		}, {})
		
		return Promise.all(Object.values(requests))
			.then ((resp) => {
					const results = resp.map(items => [...items.results]).flat(1);
					dispatch({ type: FETCH_RESOURCES_SUCCESS, payload: { results } })
			})
			.catch(err => dispatch({ type: FETCH_RESOURCES_FAILURE, payload: err }))
	} 
}

export const fetchResource = (root) => dispatch => {
	dispatch({type: FETCH_RESOURCES})

	const request = getRoot(root)
	return request.then(
		resp => dispatch({ type: FETCH_RESOURCES_SUCCESS, payload: resp }),
		err => dispatch({ type: FETCH_RESOURCES_FAILURE, payload: err })
	)
}


export const handleFavourite = (favourite = null) => dispatch => {
	if(favourite) {
		setCookie('favourite_category', favourite, 2)
		dispatch({type: SET_FAVOURITE_CATEGORY, payload: favourite})
	} else {
		deleteCookie('favourite_category')
		dispatch({type: REMOVE_FAVOURITE_CATEGORY, payload: favourite })
	}
}