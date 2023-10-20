import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions/actions";
import { MAXLENGTH } from "../helpers/data";
import style from "./Card.Module.css";
import { motion } from "framer-motion";

export function Card({ onClose, item }) {
	const [inputValue, setInputValue] = useState("");
	const [isFav, setIsFav] = useState(false);
	const dispatch = useDispatch();
	const myFavorites = useSelector((state) => state.myFavorites);
	console.log(myFavorites);
	const [closeBtn, setCloseBtn] = useState(true);

	/* eslint-disable */

	useEffect(() => {
		if (!onClose) {
			setCloseBtn(false);
		}
	}, []);

	useEffect(() => {
		for (let i = 0; i < myFavorites.length; i++) {
			if (myFavorites[i].id === item.id) {
				setIsFav(true);
			}
		}
	}, [myFavorites]);

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);
	};

	function handleFavorite(data) {
		if (!isFav) {
			dispatch(addFav(data));
		} else {
			dispatch(removeFav(data));
		}
		setIsFav(!isFav);
	}

	return (
		<motion.div
			animate={{ x: 20 }}
			transition={{ type: "spring", bounce: 0.3 }}
			className={style.component}>
			<div className={style.buttons}>
				{isFav ? (
					<button
						className={style.fav_button}
						onClick={() => handleFavorite(item.id)}>
						❤️
					</button>
				) : (
					<button
						className={style.fav_button}
						onClick={() => handleFavorite(item)}>
						🤍
					</button>
				)}
				<div className={style.id}>ID: {item.id}</div>
				{closeBtn && (
					<button
						className={style.close_button}
						onClick={() => {
							onClose(item.id);
						}}>
						❌
					</button>
				)}
			</div>
			<div className={style.image}>
				<img src={item.image} alt="" />
			</div>
			<div className={style.name}>
				<div
					className={`${style.image_text} ${
						item.name.length > MAXLENGTH ? "expanded" : ""
					}`}
					onChange={handleInputChange}
					value={inputValue}>
					<NavLink to={`/detail/${item.id}`} className="link-cards">
						{item.name}
					</NavLink>
				</div>
			</div>
			<div className={style.footer}>
				<div className={style.text_separator}>{item.status}</div>
				<div className={style.separator}></div>
				<div>{item.gender}</div>
			</div>
		</motion.div>
	);
}

export default Card;
