import { useSelector } from "react-redux";
import Card from "./Card";
import style from "./Cards.module.css";
/* eslint-disable */
function Cards({ characters, onClose }) {
	if (characters !== null && characters !== undefined) {
		console.log(characters);
		const myFavorites = useSelector((state) => state.myFavorites);
		return (
			<div className={style.container}>
				{characters?.map((character) => (
					<Card key={character.id} item={character} onClose={onClose} />
				))}
			</div>
		);
	}
}
export default Cards;
