import styles from "./CardComponent.module.css";

const CardComponent = ({ sentence, correctCharacters, incorrectCharacters, wpm, time }) => {
  return (
    <div className={styles.card}>
      <p className={styles.cardContent}>
        <b>Sentence: </b> {sentence}
      </p>
      <p className={styles.cardContent}>
        <b>Correct Characters:</b> {correctCharacters}
      </p>
      <p className={styles.cardContent}>
        <b>Incorrect Characters:</b> {incorrectCharacters}
      </p>
      <p className={styles.cardContent}>
        <b>Words Per Minute:</b> {wpm}
      </p>
      <p className={styles.cardContent}>
        <b>Time (in mins):</b> {time}
      </p>
    </div>
  );
};

export default CardComponent;


