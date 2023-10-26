import Image from 'next/image';
import styles from '../styles/Home.module.css';
import acmLogo from '../assets/acmlogo.png';


function Home() {
  return (
    <div className={styles.main}>
        <div className={styles.welcome}>
          <h2>Welcome to HackRacer!</h2>
          <p>You can navigate to <i>Add Sentence</i> button at the top to add a new sentence. 
              Then you can go over to <i>Play Game</i> to start playing the game. 
          </p>
      </div>
      <div className={styles.image}><Image src={acmLogo} width={200} height={200} alt="acmlogo"/>
      </div>
    </div>
  );
}

export default Home;
