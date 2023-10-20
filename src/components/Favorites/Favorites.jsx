// import {
// 	filterCards,
// 	orderCards,
// 	resetCards,
// } from "../../redux/actions/actions";
// import { optFilter, optOrder } from "../../helpers/data";
// import Card from "../Card";
// import style from "./Favorites.module.css";
import { useSelector } from "react-redux";
import Cards from "../Cards";

/* eslint-disable */
export function Favorites({}) {
	const myFavorites = useSelector((state) => state.myFavorites);
	// const dispatch = useDispatch();

	// function handlerOrder(e) {
	// 	dispatch(orderCards(e.target.value));
	// }

	// function handlerFilter(e) {
	// 	dispatch(filterCards(e.target.value));
	// }

	// function handlerReset() {
	// 	dispatch(resetCards());
	// }

	// console.log(myFavorites);
	// console.log(characters);

	return (
		<>
			<Cards characters={myFavorites} />
			{/* <div className={style.orderBar}>
				<div>
					<select
						defaultValue="order"
						placeholder="Order by.."
						onChange={handlerOrder}>
						<option value="order">Order by...</option>
						{optOrder.map((order, index) => (
							<option className={style.options} key={index} value={order}>
								{order === "A" ? "Ascendente" : "Descendente"}
							</option>
						))}
					</select>
				</div>
				<div>
					<select
						defaultValue="gender"
						placeholder="Filter by..."
						onChange={handlerFilter}>
						<option value="gender" selected>
							Gender
						</option>
						{optFilter.map((filter, index) => (
							<option className={style.options} key={index} value={filter}>
								{filter === "unknown" ? "Unknown" : filter}
							</option>
						))}
					</select>
				</div>
				<div>
					<button className={style.reset} onClick={handlerReset}>
						Reset
					</button>
				</div>
			</div> */}
			{/* <div className="card-list">
				{myFavorites?.map((character, index) => (
					<Card key={index} item={character} />
				))}
			</div> */}
		</>
	);
}

export default Favorites;
