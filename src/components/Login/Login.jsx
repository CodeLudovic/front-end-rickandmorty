import { useEffect, useState } from "react";
import { validate } from "../../helpers/validation";
import style from "./Login.module.css";
import useSound from "use-sound";
import soundFile from "../../assets/rickandmorty.mp3";
/* eslint-disable */
function Login({ login }) {
	const [errors, setErrors] = useState({});
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const [play, { stop }] = useSound(soundFile);

	useEffect(() => {
		play();
		return () => {
			stop();
		};
	}, [play]);

	function handleChange(event) {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});

		setErrors(
			validate({ ...userData, [event.target.name]: event.target.value })
		);
	}

	function handleSubmit(event) {
		event.preventDefault();
		login(userData);
	}

	// useEffect(() => {
	// 	// Función para reproducir el sonido
	// 	const audio = new Audio(soundFile);
	// 	if (!audio.play()) {
	// 		audio.stop();
	// 	} else audio.play();
	// }, []);

	return (
		<>
			<div className={style.container}>
				<h2>Inicia sesión</h2>
				<form onSubmit={handleSubmit} name="loginForm">
					<div className={style.email}>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={userData.email}
							onChange={handleChange}
						/>
						{errors.email && <h5 className={style.error}>{errors.email}</h5>}
					</div>
					<div className={style.password}>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={userData.password}
							onChange={handleChange}
						/>
						{errors.password && (
							<h5 className={style.error}>{errors.password}</h5>
						)}
					</div>
					<div>
						{Object.keys(errors).length === 0 && (
							<button type="submit" className={style.submit}>
								Submit
							</button>
						)}
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;
