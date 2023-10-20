import { useDispatch } from "react-redux";
import {
	filterCards,
	orderCards,
	resetCards,
} from "../../redux/actions/actions";
import { optFilter, optOrder } from "../../helpers/data";
import style from "./OrderBar.module.css";

export const OrderBar = () => {
	const dispatch = useDispatch();

	function handlerOrder(e) {
		dispatch(orderCards(e.target.value));
	}

	function handlerFilter(e) {
		dispatch(filterCards(e.target.value));
	}

	function handlerReset() {
		dispatch(resetCards());
	}

	// console.log(myFavorites);
	// console.log(characters);
	return (
		<>
			<div className={style.orderBar}>
				<div>
					<select
						defaultValue="order"
						placeholder="Order by.."
						onChange={handlerOrder}>
						<option value="order">Order by...</option>
						{optOrder.map((order, index) => (
							<option key={index} value={order}>
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
							<option key={index} value={filter}>
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
			</div>
			{/* <div className="card-list">
				{myFavorites?.map((character, index) => (
					<Card key={index} item={character} />
				))}
			</div> */}
		</>
	);
};
