import styles from "./AdvertisingBlock.module.css";

const AdvertisingBlock = () => {
  return (
    <ul className={styles["advertising-list"]}>
      <li className={styles["advertising-list__item"]}>
        <img
          className={styles["advertising-list__img"]}
          src="./assets/lightning.svg"
          alt="Подписка"
        />
        <span>30 дней подписки за 1 ₽</span>
      </li>
      <li className={styles["advertising-list__item"]}>
        <img
          className={styles["advertising-list__img"]}
          src="./assets/gift.svg"
          alt="Подарок"
        />
        <span>30 дней подписки за 1 ₽</span>
      </li>
    </ul>
  );
};

export default AdvertisingBlock;
