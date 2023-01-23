import Image from "next/image";
import React from "react";
import discoball from "../../public/img/discoball.png";
import styles from "../../styles/Logo.module.scss";

function Logo() {
	return (
		<div className={styles.logo}>
			<Image src={discoball} alt={"Groovehub"} className={styles.logo__image} />
			<label className={styles.logo__text}>Groovehub</label>
		</div>
	);
}

export default Logo;
