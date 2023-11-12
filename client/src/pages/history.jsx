import CardComponent from "@/components/game-history-component/CardComponent";
import styles from '../styles/History.module.css'

export default function History() {
  return (
    <div className={styles.container}>
      <h1>Previous Games</h1>

      {/* Container for Top Three Games */}
      <div className={styles.top_three}>
        <h4 className={styles.header}>Top Three Games</h4>
        <div className={styles.top_three_cards}>
          <CardComponent sentence={"A sentence."}/>
          <CardComponent sentence={"My second sentence."}/>
          <CardComponent sentence={"My third sentence."}/>
        </div>
      </div>

      {/* Container for All Games */}
      <div className={styles.all_games}>
        <h4 className={styles.header}> All Games</h4>
        <div className={styles.all_cards}>
          <CardComponent
            sentence={"Hello there!"}
            correctCharacters={20}
            incorrectCharacters={34}
            wpm={42}
            time={1}/>
          <CardComponent sentence={"Bye for now!"}/>
          <CardComponent sentence={"Yet another sentence."}/>
          <CardComponent sentence={"I'm tired now."}/>
        </div>
      </div>
    </div>
  );
}