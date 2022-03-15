import React from 'react';
import {useSelector} from "react-redux";

import {selectTimer} from "../../features/counter/counterSlice";
import {selectMoves} from "../../features/counter/counterSlice";
import CounterTimer from "./CounterTimer";
import CounterMoves from "./CounterMoves";
import styles from "./Counter.module.scss"

const Counter = () => {

    const timerValue: number = useSelector(selectTimer)
    const actionsAmount: number = useSelector(selectMoves)

    return (
        <div className={styles.counter}>
            <CounterTimer timerValue={timerValue} />
            <CounterMoves actionsAmount={actionsAmount}/>
        </div>
    );
};

export default Counter;