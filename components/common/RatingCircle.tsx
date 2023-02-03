import styles from "@/styles/RatingCircle.module.scss";

const RatingCircle = ({ rating }) => {
  return (
    <div className={styles.circle}>{rating}</div>
  )
};

export default RatingCircle;
