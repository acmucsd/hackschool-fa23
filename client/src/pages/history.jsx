import React, { useState, useEffect } from "react";
import CardComponent from "@/components/game-history-component/CardComponent";
import styles from '../styles/History.module.css';
import axios from "axios";

export default function History() {
  const [gameStats, setGameStats] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/game");
      setGameStats(response.data);
    }
    catch(error) {
        console.error("Failed to fetch game stats:", error);
    };
  }
  useEffect(() => {
    fetchData();
  }, []); 
  return (
    <div className={styles.container}>
      <h1>Previous Games</h1>

      {/* Container for All Games */}
      <div className={styles.all_games}>
        <h4 className={styles.header}> All Games</h4>
        <div className={styles.all_cards}>
          {gameStats.map((game, index) => (
              <CardComponent
                key={index} {...game}
              />
            ))}
        </div>
      </div>
    </div>
  );
}