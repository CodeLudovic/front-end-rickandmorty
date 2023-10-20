import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "../type/type";
import axios from "axios";

export const addFav = (character) => {
	try {
		const endpoint =
			"https://back-end-rickandmorty-production.up.railway.app/rickandmorty/fav";
		return async (dispatch) => {
			const { data } = await axios.post(endpoint, character);
			return dispatch({
				type: ADD_FAV,
				payload: data,
			});
		};
		// eslint-disable-next-line
	} catch (error) {
		console.log(error);
	}
};

export const removeFav = (id) => {
	try {
		const endpoint =
			"https://back-end-rickandmorty-production.up.railway.app/rickandmorty/fav/" +
			id;
		return async (dispatch) => {
			const { data } = await axios.delete(endpoint);
			return dispatch({
				type: REMOVE_FAV,
				payload: data,
			});
		};
	} catch (error) {
		console.log(error);
	}
};

export const filterCards = (gender) => {
	return {
		type: FILTER,
		payload: gender,
	};
};

export const orderCards = (order) => {
	return {
		type: ORDER,
		payload: order,
	};
};

export const resetCards = () => {
	return {
		type: RESET,
	};
};
