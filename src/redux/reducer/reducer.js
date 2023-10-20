/* eslint-disable */
import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "../type/type";

export const initialState = {
	myFavorites: [],
	allCharacters: [],
};
/* eslint-disable */
export const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_FAV:
			return {
				...state,
				myFavorites: payload,
				allCharacters: payload,
			};
		case REMOVE_FAV:
			// const respon = state.myFavorites.filter(
			// 	(character) => character.id !== parseInt(action.payload)
			// );
			// const respon2 = state.allCharacters.filter(
			// 	(character) => character.id !== parseInt(action.payload)
			// );
			// return {
			// 	...state,
			// 	myFavorites: respon,
			// 	allCharacters: respon2,
			// };
			return {
				...state,
				myFavorites: payload,
				allCharacters: payload,
			};

		case FILTER:
			return {
				...state,
				myFavorites: state.allCharacters.filter(
					(character) => character.gender === payload
				),
			};

		case RESET:
			return {
				...state,
				myFavorites: [...state.allCharacters],
			};

		case ORDER:
			if (payload === "A") {
				const copy2 = state.myFavorites;
				const result = copy2.sort((a, b) => a.id - b.id);
				return {
					...state,
					myFavorites: [...result],
				};
			}

			if (payload === "D") {
				const copy2 = state.myFavorites;
				const result = copy2.sort((a, b) => b.id - a.id);
				return {
					...state,
					myFavorites: [...result],
				};
			}
		default:
			return { ...state, myFavorites: state.allCharacters };
	}
};
