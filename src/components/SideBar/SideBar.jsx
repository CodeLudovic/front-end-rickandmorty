import style from "./SideBar.module.css";
import { ButtonsNav } from "../ButtonsNav/ButtonsNav";
import { useEffect, useRef, useState } from "react";

function Sidebar({ acc, onLogOut, isOpenState, isOpenFn }) {
	const [menuOpen, setMenuOpen] = useState(false);
	let menuRef = useRef(null);

	useEffect(() => {
		const closeMenuOnClickOutside = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				// Hacer clic fuera del menú, cierra el menú
				setMenuOpen(false);
			}
		};

		if (menuOpen) {
			document.addEventListener("click", closeMenuOnClickOutside);
		} else {
			document.removeEventListener("click", closeMenuOnClickOutside);
		}
		return () => {
			document.removeEventListener("click", closeMenuOnClickOutside);
		};
	}, [menuOpen]);

	return (
		<>
			<div
				ref={menuRef}
				className={!isOpenState ? style.sidebar : style.sidebar_open}>
				<ButtonsNav
					onLogOut={onLogOut}
					acc={acc}
					isOpenState={isOpenState}
					isOpenFn={isOpenFn}
					setMenuOpen={setMenuOpen}
				/>
			</div>
		</>
	);
}

export default Sidebar;
