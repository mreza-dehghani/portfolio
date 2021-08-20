import * as actionTypes from '../constants/actionTypes';
import { todoInitialState } from '../initialStates';

export default (state = todoInitialState, { type, payload }) => {
	switch (type) {
		case actionTypes.ADD_TODO_TITLE:
			return {
				...state,
				todoTitle: payload,
			};
		case actionTypes.ADD_TODO_DESCRIPTION:
			return {
				...state,
				todoDescription: payload,
			};
		case actionTypes.REMOVE_TODO:
			return {
				...state,
				todoDescription: '',
				todoTitle: '',
			};

		case actionTypes.GET_DATA_REQUEST:
			return {
				...state,
				getData: { ...state.getData, loading: true },
			};
		case actionTypes.GET_DATA_SUCCESS:
			return {
				...state,
				getData: { data: payload, loading: false },
			};
		case actionTypes.GET_DATA_FAILURE:
			return {
				...state,
				getData: { data: [], loading: false },
			};

		default:
			return state;
	}
};
