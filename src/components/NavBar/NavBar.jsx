import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import style from "./NavBar.module.css";
import { ButtonsNav } from "../ButtonsNav/ButtonsNav";
import Sidebar from "../SideBar/SideBar";
import { FaBars } from "react-icons/fa";

function NavBar({
	onSearch,
	onRandomize,
	access,
	acc,
	isOpenFn,
	isOpenMenu,
	appRef,
}) {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

	const handlerLogOut = () => {
		access(false);
	};

	const onLogOut = () => {
		handlerLogOut();
		isOpenFn(!isOpenMenu);
	};
	useEffect(() => {
		// Agrega un listener de cambio de tamaño de ventana para actualizar el estado cuando cambie la resolución.
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 720);
		};

		window.addEventListener("resize", handleResize);

		// Limpia el listener cuando el componente se desmonta.
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{!isMobile ? (
				<div className={style.container}>
					<div className={style.pre_navbar}>
						<ButtonsNav onLogOut={onLogOut} acc={acc} />
						<SearchBar onSearch={onSearch} onRandomize={onRandomize} />
					</div>
				</div>
			) : (
				<>
					<div className={style.pre_navbar}>
						<button
							className={style.button_closeMenu}
							onClick={() => isOpenFn(!isOpenMenu)}>
							<FaBars className={style.menuIcon} />
						</button>
						<SearchBar onSearch={onSearch} onRandomize={onRandomize} />
					</div>
					<Sidebar
						appRef={appRef}
						onSearch={onSearch}
						onRandom={onRandomize}
						onLogOut={onLogOut}
						isOpenFn={isOpenFn}
						isOpenState={isOpenMenu}
					/>
				</>
			)}
		</>
	);
}

export default NavBar;
