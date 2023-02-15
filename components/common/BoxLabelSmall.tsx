import styles from "@/styles/BoxLabelSmall.module.scss";

export default function BoxLabelSmall({ label, value }) {
  function formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    } 
    // else {
    //   return num.toString();
    // }
  }
  return (
    <div className={styles.box}>
      <label className={styles.value} htmlFor="value">{label === "Followers" ? formatNumber(value) : value}</label>
      <label className={styles.label} htmlFor="label">{label}</label>
    </div>
  );
}
