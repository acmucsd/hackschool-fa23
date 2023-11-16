/**
 * useEffect : (i) lets you synchronize a component with an external system
 *             (ii) we will be using it to check game completion conditions
 */
import React, { useEffect, useState } from "react";
import useTypingGame, { PhaseType } from "react-typing-game-hook"; // for playing the game
import CardComponent from "../game-history-component/CardComponent";
import styles from "./TypingGameComponent.module.css";
import axios from "axios";

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
  const [gameStarted, setGameStarted] = useState(false); // checks if the game has begun
  const [statsObject, setStatsObject] = useState(null); // ensures object is not undefined
  const [selectedSentence, setSelectedSentence] = useState(sentenceData[0]); // sentence for typing game

  // useTypingGame to keep track of, and modify chars being typed and other stuff
  const {
    states: { chars, charsState, phase, correctChar, errorChar },
    actions: { insertTyping, resetTyping, deleteTyping, getDuration },
  } = useTypingGame(selectedSentence, {
    skipCurrentWordOnSpace: true,
    pauseOnError: false,
    countErrors: "everytime",
  });

  // Axios for communicating with the backend (i.e. sending game stats)
  // Endpoint: 'http://localhost:5000/home/game'
  const sendGameStats = async (stats) => {
    try {
      // Make a POST request to create/update the game stats document
      const response = await axios.post("http://localhost:4000/api/game", stats);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to create/update game stats:", error);
    }
  };

  // triggered when start button is clicked
  // updates setGameStart
  const handleGameStart = () => {
    console.log("handleGameStart triggered");
    if (phase === PhaseType.NotStarted) {
      console.log(phase);
      resetTyping();
      setGameStarted(true); // game started == true 
    }
  };


  const calculateWPM = () => {
    let numWords = selectedSentence.split(" ").length;
    let time = getDuration() / 1000 / 60;
    console.log("number of words: " + numWords);
    console.log("duration in mins: " + time)
    return numWords / time; 
  };

  // if the game has ended, we send the game stats to the DB 
  const handleGameEnd = () => {
      let stats = { 
        sentence: chars, 
        correctCharacters: correctChar, // number of correct words 
        incorrectCharacters: errorChar,
        wpm: calculateWPM().toFixed(2),
        time: (getDuration()/ 1000/60).toFixed(2), // miliseconds --> mins 
      }
      setStatsObject(stats); // this will be used to print the object on the screen
      sendGameStats(stats);
  };

  /**
   * Checking for game completion conditions:
   * Complete if:
   *        - Currently, gameStarted  === true
   *        - on the n+1th character
   */
  useEffect(() => {
    if (phase === PhaseType.Started && charsState.length === chars.length + 1) {
      handleGameEnd();
    }
  }, [phase, charsState.length]);

  // here, we render the game
  return (
    <div className={styles.typing_game}>
      {!gameStarted ? (
        <div className={styles.start_game}>
          <div className={styles.sentence_dropdown}>
            <h3 className={styles.sentence_label}>Select a sentence</h3>
            <select
              name="sentence-select"
              id={styles.sentence_selector}
              onChange={(e) => setSelectedSentence(e.target.value)}
            >
              {sentenceData.map((sentence, index) => (
                <option key={index}>{sentence}</option>
              ))}
            </select>
          </div>
          <button className={styles.start_button} onClick={handleGameStart}>
            Start
          </button>
        </div>
      ) : (
        <div className={styles.typing_component}>
          <p>Click on the sentence below and start typing!</p>
        <h2 
          onKeyDown={(e) => {
            // call different functions based on the key clicked
            const key = e.key;
            if (key === "Escape") {
              // we can potentially change it from escape char to a button lmk tho
              resetTyping();
            } else if (key === "Backspace") {
              deleteTyping(false);
            } else if (key.length === 1) {
              insertTyping(key);
            }
            // preventDefault makes sure that the keys dont do what they normally do, and instead
            // execute the functions that we have specified above
            e.preventDefault();
          }}
          tabIndex={0}
          onBlur={handleGameEnd} // when the user clicks away from the component (which is in <h1> rn)
        >
          {chars.split("").map((char, index) => {
            let state = charsState[index]; // check state at curr pos
            // if not done -> black
            // if correct -> green
            // else red
            let color = state === 0 ? "#292F36" : state === 1 ? "#417B5A" : "#FF6B6B";
            return (
              <span key={char + index} style={{ color }}>
                {char}
              </span>
            );
          })}
        </h2>
        </div>
      )}
      {statsObject && ( // Check if statsObject is not null before displaying it
        <CardComponent {...statsObject}/>
      )}
    </div>
  );
};

// exporting the typing game component here
export default TypingGameComponent;

// wooooo
