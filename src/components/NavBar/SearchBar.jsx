import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch, onRandomize }) {
	let [id, setID] = useState("");

	function handleChange(event) {
		setID(event.target.value);
	}
	return (
		<div className={style.search_bar}>
			<div>
				<input
					placeholder="Search ID..."
					className={style.input_nav}
					type="search"
					id="inp"
					onChange={handleChange}
				/>
			</div>
			<div>
				<button className={style.button_random} onClick={() => onRandomize()}>
					👀
				</button>
			</div>
			<div>
				<button className={style.button_search} onClick={() => onSearch(id)}>
					Agregar
				</button>
			</div>
		</div>
	);
}
