import styles from "../../styles/SmallCard.module.scss";
import RatingCircle from "./ratingcircle";

const SmallCard = ({ content }) => {
  return (
    <div className={styles.card}>
      {/* TODO: Conditionally render the colors of the card https://stackoverflow.com/questions/35762351/correct-way-to-handle-conditional-styling-in-react */}
      <div className={styles.card__header} style={{background: content.cardColors.header}}>
        <label htmlFor="header">{content.name}</label>
        {/* <RatingCircle rating={content.rating} /> */}
      </div>
      <div className={styles.card__body} style={{background: content.cardColors.body}}>
        <img src={content.img} alt="Image" className={styles.card__image} />
        {content.genres && <label className={styles.card__genres} htmlFor="genres">
          {content.genres.slice(0,2).join(", ")}
        </label>}
      </div>
    </div>
  );
};

export default SmallCard;
