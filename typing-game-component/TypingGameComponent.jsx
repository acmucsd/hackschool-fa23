import React, {useState } from "react";
import useTypingGame, {PhaseType} from "react-typing-game-hook"; // for playing the game
// Make sure to run `npm install react-typing-game-hook` to install the typing game hook
import styles from "./TypingGameComponent.module.css";

//Currently using a hard coded sentence bank
const sentenceData = [
  "The sun rose over the horizon, casting a warm golden glow.",
  "She sipped her coffee and watched the raindrops dance on the windowpane.",
  "The old oak tree stood tall and majestic in the middle of the field.",
  "The cat curled up on the windowsill, purring contentedly.",
  "In the quiet of the night, the stars twinkled like diamonds in the sky.",
  "The aroma of freshly baked bread wafted through the air.",
  "He gazed at the old photo, lost in memories of days gone by.",
  "The waves crashed against the rocky shore, creating a soothing melody.",
  "The laughter of children echoed through the park as they played.",
  "The detective examined the clues carefully, searching for answers.",
  "She opened the dusty book and was transported to a different world.",
  "The cityscape glittered with lights as night fell.",
  "The chef carefully seasoned the dish with a pinch of salt.",
  "The hiker reached the summit and marveled at the breathtaking view.",
  "The clock ticked relentlessly, marking the passage of time.",
];

const TypingGameComponent = () => {
  //TODO Create a useState called gameStarted with the function setGameStarted and intialize it to false
  //TODO Create a useState called selectedSentence with the funciton setSelectedSentence and initialize it to the first sentence in sentenceData


  // useTypingGame to keep track of, and modify chars being typed and other stuff
  const {
    states: { chars, charsState, phase, correctChar, errorChar},
    actions: { insertTyping, resetTyping, deleteTyping, getDuration },
  } = useTypingGame(selectedSentence, {
    skipCurrentWordOnSpace: true,
    pauseOnError: false,
    countErrors: "everytime",
  });

  // triggered when start button is clicked
  // updates setGameStart
  const handleGameStart = () => {
    console.log("handleGameStart triggered");
    if (phase === PhaseType.NotStarted) {
      console.log(phase);
      resetTyping();
      //TODO Set the gameStarted state to true
    }
  };

  // here, we render the game
  return (
    <div className={styles.typing_game}>
      { !gameStarted ?  (
        <div className={styles.start_game}>
          <div className={styles.sentence_dropdown}>
            {/* TODO Create a h3 that says "Select a Sentence" */}
            
            
            {/* TODO Create a select HTML tag with the options as the sentenceData */}
            {/* Iterate through the sentenceData array to dynamically and create an option for each sentence*/}
            {/* Hint use .map */}
            {/* Set the selectedSentence state to be selected sentence from the dropdown using the onChange attribute*/}

        </div>
          {/* TODO Create a button that calls handleGameStart when clicked */}
        </div>
      ) : (
        <div className={styles.typing_component}>
          {/* TODO Create a h2 to show the selectedSentence state */}
        </div>
      )}
    </div>
  );
};

// exporting the typing game component here
export default TypingGameComponent;

// wooooo
