import styles from "../../styles/SmallCardCarousel.module.scss";
import SmallCard from "./SmallCard";

const SmallCardCarousel = ({ header, content }) => {
	return (
		<div className={styles.carousel}>
			<h3 className={styles.carousel__header}>{header}</h3>
			<div className={styles.carousel__body}>
				{/* <SmallCard content={content}/> */}
			</div>
		</div>
	);
};

export default SmallCardCarousel;
