import styles from "@/styles/Login.module.scss";
// import logo from "../public/img/discoball.png";
// import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";

type LoginProps = {
	providers: any;
};
const Login = ({ providers }: LoginProps) => {
	const spotifyProvider = providers.spotify;

	return (
		<div className={styles.container}>
			<div className={styles.container__header}>
				<h1 className={styles.h1}>Groovehub</h1>
				<h3 className={styles.h3}>Dance Music Discovery</h3>
			</div>
			<button
				className={styles.btn}
				onClick={() => signIn(spotifyProvider.id, { callbackUrl: "/" })}
			>
				Login
			</button>
	
		</div>
	);
};

export default Login;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
