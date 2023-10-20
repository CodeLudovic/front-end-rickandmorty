/* eslint-disable */
import { NavLink } from "react-router-dom";
import { ABOUT, FAVORITES, HOME } from "../../helpers/routing";
import style from "./ButtonsNav.module.css";
export const ButtonsNav = ({ onLogOut, isOpenFn, isOpenState }) => {
	return (
		<>
			<div className={style.gridButtons}>
				<div className={style.buttons___grid}>
					<button className={style.button_logout} onClick={onLogOut}>
						Log Out
					</button>
					<NavLink to={FAVORITES}>
						<button
							// onClick={() => isOpenFn(!isOpenState)}
							className={style.button_favorite}>
							Favorites
						</button>
					</NavLink>
					<NavLink to={ABOUT}>
						<button
							// onClick={() => isOpenFn(!isOpenState)}
							className={style.button_about}>
							About
						</button>
					</NavLink>
					<NavLink to={HOME}>
						<button
							// onClick={() => isOpenFn(!isOpenState)}
							className={style.button_home}>
							Home
						</button>
					</NavLink>
				</div>
			</div>
		</>
	);
};
