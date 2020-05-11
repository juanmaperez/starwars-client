import { getCookie } from "helpers/helpers";

export default {
	roots: {
		isLoading: true,
		payload: void 0,
		error: void 0,
	},
	resources: {
		isLoading: false,
		results: null
	},
	favourite: getCookie('favourite_category') || null
};
