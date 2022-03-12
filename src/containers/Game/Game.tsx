import React from 'react';

import styles from "./Game.module.scss"
import background from "../../assets/background.png";
import GameField from "../../components/GameField/GameField";

const Game = () => {
    return (
        <div
            className={styles.game}
            style={{ backgroundImage: `url(${background})` }}
        >
            <GameField />
        </div>
    );
};

export default Game;