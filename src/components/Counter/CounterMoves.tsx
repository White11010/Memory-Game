import React, {FC} from 'react';

interface CounterMovesProps {
    actionsAmount: number;
}

const CounterMoves: FC<CounterMovesProps> = ({actionsAmount}) => {
    return (
        <div>
            <p>Actions: {actionsAmount}</p>
        </div>
    );
};

export default CounterMoves;