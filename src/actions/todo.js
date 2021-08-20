import * as actionTypes from '../constants/actionTypes';
import * as testApi from '../apis/test';
import { TodoAction } from './index';

export const addTodoTitle = payload => {
	return {
		type: actionTypes.ADD_TODO_TITLE,
		payload,
	};
};
export const addTodoDescription = payload => {
	return {
		type: actionTypes.ADD_TODO_DESCRIPTION,
		payload,
	};
};
export const removeTodo = () => {
	return {
		type: actionTypes.REMOVE_TODO,
	};
};

export const getDataRequest = () => {
	return {
		type: actionTypes.GET_DATA_REQUEST,
	};
};
export const getDataSuccess = data => {
	return {
		type: actionTypes.GET_DATA_SUCCESS,
		payload: data,
	};
};
export const getDataFailure = () => {
	return {
		type: actionTypes.GET_DATA_FAILURE,
	};
};

export const getData = async dispatch => {
	console.log('getData');

	dispatch(getDataRequest());
	try {
		const response = await testApi.getData();
		const data = response && response.data;
		if (response.status === 200) {
			dispatch(getDataSuccess(data));
			await dispatch(getData2(dispatch));
		}
	} catch (error) {
		console.log(error);
		dispatch(getDataFailure());
	}
};

export const getData2 = async dispatch => {
	console.log('getData');

	// dispatch(getDataRequest());
	try {
		const response = await testApi.getData2();
		const data = response && response.data;
		// if (response.status === 200) {
		// 	dispatch(getDataSuccess(data));
		// }
	} catch (error) {
		console.log(error);
		// dispatch(getDataFailure());
	}
};
