import style from "./About.module.css";
import myBio from "../../assets/myProfile.gif";
import igIcon from "../../assets/icons/igpng.png";
import inIcon from "../../assets/icons/linpng.png";
import gitIcon from "../../assets/icons/gitpng.png";
import { motion } from "framer-motion";

function About() {
	/*eslint-disable */
	return (
		<div className={style.container}>
			<motion.div
				className={style.myBio}
				animate={{ y: 40 }}
				transition={{ ease: "easeOut", duration: 0.5 }}>
				<motion.img
					className={style.imageBio}
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 10, opacity: 1 }}
					transition={{ ease: "easeOut", duration: 0.6 }}
					src={myBio}
				/>
				<motion.p
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 10, opacity: 1 }}
					transition={{ ease: "easeOut", duration: 0.7 }}>
					Hola!, Soy Daniel, programador junior con tres años de experiencia en
					desarrollo de WEB App`s. Mi pasión por la programación creció con cada
					línea de código que escribí, y he encontrado en JavaScript mi lenguaje
					favorito debido a su versatilidad y capacidad para crear aplicaciones
					web dinámicas y significativas. Te invito a que explores esta App!
				</motion.p>
				<motion.p
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 10, opacity: 1 }}
					transition={{ ease: "easeOut", duration: 0.8 }}>
					Si tienes algun feedback, estos son todos mis caneles de redes para
					que me sigas :D
				</motion.p>
				<motion.div
					className={style.buttons}
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 10, opacity: 1 }}
					transition={{ ease: "easeOut", duration: 0.9 }}>
					<a
						href="https://www.linkedin.com/in/daniel-ospina-ramirez-3b1bbb20a/"
						target="_blank">
						<img src={inIcon} className={style.in} />
					</a>
					<a href="https://www.instagram.com/daniel_osp92/" target="_blank">
						<img src={igIcon} className={style.ig} />
					</a>
					<a href="https://github.com/danielor92" target="_blank">
						<img src={gitIcon} className={style.git} />
					</a>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default About;
