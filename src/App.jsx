/* eslint-disable */
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions/actions";
import axios from "axios";

import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards";
import Error404 from "./components/error404/Error404";
import Favorites from "./components/Favorites/Favorites";
import { lookUpForState } from "./helpers/validation";
import { BASEURL_LOC } from "./helpers/data";

import style from "./App.module.css";

import {
	DETAILID,
	FAVORITES,
	BASE_URL,
	DEFAULT,
	ABOUT,
	ERROR404,
	HOME,
} from "./helpers/routing";
import { LadingPage } from "./views/LandingPage/LadingPage";
import { OrderBar } from "./components/OrderBar/OrderBar";

function App() {
	const nav = useNavigate();
	const dispatch = useDispatch();
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		!access && nav("/");
	}, [access]);

	const login = async (userData) => {
		try {
			const { email, password } = userData;
			const URL = "https://back-end-rickandmorty-production.up.railway.app/rickandmorty/login";
			const { data } = await axios(
				URL + `?email=${email}&password=${password}`
			);
			const { access } = data;
			if (access) {
				setAccess(access);
				nav("/home");
			}
		} catch (error) {
			console.log(error);
		}
	};

	function onRandomize(id = 0) {
		id = Math.floor(Math.random() * 827) + 1;
		const rid = id.toString();
		// axios(`${BASEURL}${id}${APIKEY}`)
		axios(`${BASEURL_LOC}${rid}`)
			.then(({ data }) => {
				if (!lookUpForState(rid, characters)) {
					if (data.name) {
						setCharacters((oldChars) => [...oldChars, data]);
					} else {
						window.alert("¡No hay personajes con este ID!");
					}
				} else {
					window.alert("¡Este personaje ya se encuentra en la vista!");
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 404) {
					window.alert("¡No hay personajes con este ID!");
				} else {
					window.alert("Ocurrio un error al buscar el personaje");
				}
			});
	}
	async function onSearch(id) {
		// axios(`${BASEURL}${id}${APIKEY}`) //Rick and Morty Api Henry
		try {
			const { data } = await axios(`${BASEURL_LOC}${id}`);
			if (!lookUpForState(id, characters)) {
				if (data.name) {
					setCharacters((oldChars) => [...oldChars, data]);
				} else {
					window.alert("¡No hay personajes con este ID!");
				}
			} else {
				window.alert("¡Este personaje ya se encuentra en la vista!");
			}
		} catch (error) {
			if (error.response && error.response.status === 404) {
				window.alert("¡No hay personajes con este ID!");
			} else {
				window.alert("Ocurrio un error al buscar el personaje");
			}
		}
	}
	function onClose(id) {
		const charsWithOutErased = characters.filter((character) => {
			return character.id !== id;
		});

		dispatch(removeFav(id));

		setCharacters(charsWithOutErased);
	}

	function handlerSetAccess(access) {
		setAccess(access);
		nav("/");
	}
	return (
		<div className={style.App}>
			<Routes>
				<Route
					path={BASE_URL}
					element={
						<>
							<LadingPage login={login} />
						</>
					}
				/>
				<Route
					path="/home"
					element={
						access ? (
							<>
								<NavBar
									closeMenu={closeMenu}
									onSearch={onSearch}
									onRandomize={onRandomize}
									access={handlerSetAccess}
									acc={access}
									isOpenFn={setIsMenuOpen}
									isOpenMenu={isMenuOpen}
								/>
								<Cards characters={characters} onClose={onClose} />
								{/*Footer pendiente*/}
							</>
						) : (
							<Navigate to="/" />
						)
					}
				/>
				<Route
					path={ABOUT}
					element={
						access ? (
							<>
								<NavBar
									closeMenu={closeMenu}
									onSearch={onSearch}
									onRandomize={onRandomize}
									access={handlerSetAccess}
									acc={access}
									isOpenFn={setIsMenuOpen}
									isOpenMenu={isMenuOpen}
								/>
								<About />
								{/*Footer pendiente*/}
							</>
						) : (
							<Navigate to="/" />
						)
					}
				/>
				<Route
					path={FAVORITES}
					element={
						access ? (
							<>
								<NavBar
									closeMenu={closeMenu}
									onSearch={onSearch}
									onRandomize={onRandomize}
									access={handlerSetAccess}
									acc={access}
									isOpenFn={setIsMenuOpen}
									isOpenMenu={isMenuOpen}
								/>
								<OrderBar />
								<Favorites onClose={onClose} />
								{/*Footer pendiente*/}
							</>
						) : (
							<Navigate to="/" />
						)
					}
				/>
				<Route
					path={DETAILID}
					element={
						access ? (
							<>
								<NavBar
									closeMenu={closeMenu}
									onSearch={onSearch}
									onRandomize={onRandomize}
									access={handlerSetAccess}
									acc={access}
									isOpenFn={setIsMenuOpen}
									isOpenMenu={isMenuOpen}
								/>
								<Detail />
								{/*Footer pendiente*/}
							</>
						) : (
							<Navigate to="/" />
						)
					}
				/>

				<Route path={ERROR404} element={<Error404 />} />
				<Route path="*" element={<Error404 />} />

				{/* <Route
					path={HOME}
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path={FAVORITES} element={<Favorites onClose={onClose} />} />
				<Route path={ABOUT} element={<About />} />
				<Route path={DETAILID} element={<Detail />} />
				<Route path={ERROR404} element={<Error404 />} />
				<Route path={DEFAULT} element={<Error404 />} />
				<Cards /> */}
			</Routes>
		</div>
	);
}

export default App;
