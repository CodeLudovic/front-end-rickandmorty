import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASEURL_LOC } from "../../helpers/data";
import style from "./Detail.module.css";
import { motion } from "framer-motion";
/* eslint-disable */

function Detail() {
	const [character, setCharacter] = useState({});
	const nagivate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		axios(`${BASEURL_LOC}${id}`)
			.then(({ data }) => {
				if (data.name) {
					setCharacter(data);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 404) {
					nagivate("/Error404");
				}
			});
		return setCharacter({});
	}, [id]);

	return (
		<div className={style.container}>
			{/* {character ? (
				<div className="content-info-detail">
					{character.name && <h1 className="title-detail">{character.name}</h1>}
					{character.status && <p>Status | {character.status}</p>}
					{character.species && <p>Species | {character.species}</p>}
					{character.gender && <p>Gender | {character.gender}</p>}
					{character.origin && (
						<p style={{ marginTop: "-5px" }}>Origin | {character.origin}</p>
					)}
				</div>
			) : (
				"Sucedio un problema al cargar el personaje"
			)}
			<div className="detail-image">
				{character.image && (
					<img src={character.image} style={{ borderRadius: "50%" }} />
				)}
			</div> */}
			{character ? (
				<motion.div
					className={style.details}
					animate={{ y: 40 }}
					transition={{ ease: "easeOut", duration: 0.5 }}>
					<div className={style.backDiv}>
						<div className={style.textoDet}>
							<p
								style={{
									fontWeight: "bolder",
									fontSize: "20px",

									color: "rgb(255, 255, 255)",
								}}>
								ID:
							</p>
							<p
								style={{
									fontWeight: "400",
									fontSize: "20px",
									textAlign: "initial",

									color: "rgb(166 41 241)",
								}}>
								{character.id}
							</p>
							<p
								style={{
									fontWeight: "bolder",
									fontSize: "20px",

									color: "rgb(255, 255, 255)",
								}}>
								Status:
							</p>
							<p
								style={{
									fontWeight: "400",
									fontSize: "20px",
									textAlign: "initial",

									color: "rgb(166 41 241)",
								}}>
								{character.status}
							</p>
							<p
								style={{
									fontWeight: "bolder",
									fontSize: "20px",

									color: "rgb(255, 255, 255)",
								}}>
								Species:
							</p>
							<p
								style={{
									fontWeight: "400",
									fontSize: "20px",
									textAlign: "initial",

									color: "rgb(166 41 241)",
								}}>
								{character.species}
							</p>
							<p
								style={{
									fontWeight: "bolder",
									fontSize: "20px",

									color: "rgb(255, 255, 255)",
								}}>
								Gender:
							</p>
							<p
								style={{
									fontWeight: "400",
									fontSize: "20px",
									textAlign: "initial",

									color: "rgb(166 41 241)",
								}}>
								{character.gender}
							</p>
							<p
								style={{
									fontWeight: "bolder",
									fontSize: "20px",

									color: "rgb(255, 255, 255)",
								}}>
								Origin:
							</p>
							<p
								style={{
									fontWeight: "400",
									fontSize: "20px",
									textAlign: "initial",
									color: "rgb(166 41 241)",
								}}>
								{character.origin}
							</p>
						</div>
					</div>
					<div className={style.divImg}>
						<img
							src={character.image}
							style={{
								borderRadius: "25px",
								border: "2px solid aliceblue",
								padding: "3px",
								marginTop: "45px",
							}}
						/>
						<div className={style.divName}>
							<p className={style.divTextImg}>Nombre: </p>
							<p className={style.divTextImg2}>{character.name}</p>
						</div>
					</div>
				</motion.div>
			) : (
				"Sucedio un problema al cargar el personaje"
			)}
		</div>
	);
}

export default Detail;
