import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Link href="/" className={styles.navbar__navlink}>
				Home
			</Link>
			<Link href="/Discover" className={styles.navbar__navlink}>
				Discover
			</Link>
			<Link href="/Profile" className={styles.navbar__navlink}>
				Profile
			</Link>
		</nav>
	);
};

export default Navbar;
