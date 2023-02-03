import styles from "../../styles/SmallCardCarousel.module.scss";
import SmallCard from "./SmallCard";

const SmallCardCarousel = ({ header, content }) => {
  return (
    <div className={styles.carousel}>
      <h3 className={styles.carousel__header}>{header}</h3>
      <div className={styles.carousel__body}>
        {content.map((item) => {
          return <SmallCard content={item} />;
        })}
      </div>
    </div>
  );
};

export default SmallCardCarousel;
