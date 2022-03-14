import React from 'react';

import styles from "./Timer.module.scss"

const Timer = () => {
    return (
        <div>
            <p className={styles.timer}>Time: 0s</p>
        </div>
    );
};

export default Timer;