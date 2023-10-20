import Login from "../../components/Login/Login";
import style from "./LadingPage.module.css";

export const LadingPage = ({ login }) => {
	return (
		<>
			<div>
				<div className={style.container}>
					<Login login={login}></Login>
				</div>
			</div>
		</>
	);
};
