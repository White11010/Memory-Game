import React, {useState} from 'react';

import styles from "./Game.module.scss"
import background from "../../assets/background.png";
import GameField from "../../components/GameField/GameField";
import Counter from "../../components/Counter/Counter";

const Game = () => {
    return (
        <div
            className={styles.game}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className={styles.wrapper}>
                <Counter />
                <GameField />
            </div>
        </div>
    );
};

export default Game;