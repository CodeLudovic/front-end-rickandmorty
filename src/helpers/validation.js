/*eslint-disable*/
import { REGEXEMAIL, REGEXPASS } from "./data";
export function validate(userData) {
	let errors = {};
	if (!REGEXEMAIL.test(userData.email)) {
		errors.email = "Debe ser un correo valido";
	}
	if (!userData.email != "") {
		errors.email = "Nombre de usuario no puede estar vacio";
	}
	if (userData.email.length > 35) {
		errors.email = "No puede contener mas de 35 caracteres";
	}
	if (!REGEXPASS.test(userData.password)) {
		errors.password = "Password debe contener al menos 1 numero";
	}
	if (userData.password.length < 6 || userData.password.length > 10) {
		errors.password = "Password debe contener entre 6 y 10 caracteres";
	}
	return errors;
}
export function lookUpForState(id, characters) {
	let bool = false;
	for (let i = 0; i < characters.length; i++) {
		if (characters[i].id === id) {
			bool = true;
		}
	}
	return bool;
}
