import styles from "../../styles/SmallCard.module.scss";
import RatingCircle from "./ratingcircle";
import { useRecoilState } from "recoil";
import { artistIdState } from "@/atoms/artistAtom";
import Link from "next/link";

const SmallCard = ({ content }) => {
  const [artistId, setArtistId] = useRecoilState(artistIdState);
  return (
    <Link key={content.id} href={'/artist'} className={styles.card} onClick={() => {
      setArtistId(content.id)
    }}>
      <div
        className={styles.card__header}
        style={{ background: content.cardColors.header }}
      >
        <label htmlFor="header">{content.name}</label>
        {/* <RatingCircle rating={content.rating} /> */}
      </div>
      <div
        className={styles.card__body}
        style={{ background: content.cardColors.body }}
      >
        <img src={content.img} alt="Image" className={styles.card__image} />
        {content.genres && (
          <label className={styles.card__genres} htmlFor="genres">
            {content.genres.slice(0, 2).join(", ")}
          </label>
        )}
      </div>
    </Link>
  );
};

export default SmallCard;
