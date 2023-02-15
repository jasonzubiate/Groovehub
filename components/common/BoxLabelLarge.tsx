import styles from "@/styles/BoxLabelLarge.module.scss";
import mixer from "@/public/img/mixer.png";
import Image from "next/image";

export default function BoxLabelLarge({ header, content }) {
  console.log(content);
  return (
    <div className={styles.box}>
      <label className={styles.header} htmlFor="header">
        {header}
      </label>
      <div className={styles.box__container}>
        <div className={styles.container__left}>
          <label className={styles.content} htmlFor="value">
            {content?.map((value: any) => {
              return <div>{value}</div>;
            })}
          </label>
        </div>
        <div className={styles.container__right}>
          <Image src={mixer} alt={mixer} width={200} quality={100} />
        </div>
      </div>
    </div>
  );
}
