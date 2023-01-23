import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import styles from "../../styles/Header.module.scss";

const Header = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<Navbar />
			<SearchBar />
		</div>
	);
};

export default Header;
