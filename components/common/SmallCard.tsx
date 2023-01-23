import styles from "../../styles/SmallCard.module.scss";

const SmallCard = ({ img, content }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__header}>Header Info</div>
			<div className={styles.card__body}>
				<div src={img} alt="Image" className={styles.card__image}>{content}</div>
				<label className={styles.card__genres} htmlFor="genres"></label>
			</div>
		</div>
	);
};

export default SmallCard;
