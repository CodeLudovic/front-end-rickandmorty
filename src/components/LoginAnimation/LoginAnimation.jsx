import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Navigate } from "react-router-dom";

import style from "./LoginAnimation.css"; // Importa tus estilos CSS para la animación

function LoginAnimation({ isLoggedIn, children }) {
	const [isTransitionDone, setIsTransitionDone] = useState(false);

	useEffect(() => {
		setIsTransitionDone(false);
	}, [isLoggedIn]);

	const handleTransitionComplete = () => {
		setIsTransitionDone(true);
	};

	return (
		<CSSTransition
			in={isLoggedIn}
			timeout={500} // Duración de la animación en milisegundos
			classNames={{
				enter: style["login-animation-enter"],
				enterActive: style["login-animation-enter-active"],
				exit: style["login-animation-exit"],
				exitActive: style["login-animation-exit-active"],
			}}
			unmountOnExit
			onExited={() => setIsTransitionDone(false)}
			onEntered={handleTransitionComplete}>
			<div
				className={`${style.loginAnimation} ${
					isTransitionDone ? style.hidden : ""
				}`}>
				{children}
			</div>
		</CSSTransition>
	);
}

export default LoginAnimation;
