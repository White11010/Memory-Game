import React, {FC} from 'react';

interface CounterTimerProps {
    timerValue: number;
}

const CounterTimer: FC<CounterTimerProps> = ({timerValue}) => {
    return (
        <div>
            <p>Time: {timerValue}s</p>
        </div>
    );
};

export default CounterTimer;