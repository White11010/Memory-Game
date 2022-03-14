import React, {useEffect, useState} from 'react';

import styles from "./GameField.module.scss"
import GameCard from "../GameCard/GameCard";
import cardImage1 from "../../assets/card-images/tg1.png"
import cardImage2 from "../../assets/card-images/tg2.png"
import cardImage3 from "../../assets/card-images/tg3.png"
import cardImage4 from "../../assets/card-images/tg4.png"
import cardImage5 from "../../assets/card-images/tg5.png"
import cardImage6 from "../../assets/card-images/tg7.png"
import {Cell} from "../../types/types";

const cells: Cell[] = [
    {
        id: 1,
        image: cardImage1,
        isReversed: false
    },
    {
        id: 2,
        image: cardImage1,
        isReversed: false
    },
    {
        id: 3,
        image: cardImage2,
        isReversed: false
    },
    {
        id: 4,
        image: cardImage2,
        isReversed: false
    },
    {
        id: 5,
        image: cardImage3,
        isReversed: false
    },
    {
        id: 6,
        image: cardImage3,
        isReversed: false
    },
    {
        id: 7,
        image: cardImage4,
        isReversed: false
    },
    {
        id: 8,
        image: cardImage4,
        isReversed: false
    },
    {
        id: 9,
        image: cardImage5,
        isReversed: false
    },
    {
        id: 10,
        image: cardImage5,
        isReversed: false
    },
    {
        id: 11,
        image: cardImage6,
        isReversed: false
    },
    {
        id: 12,
        image: cardImage6,
        isReversed: false
    }
]

const shuffle = (array: any[]) => {
    //Fisher–Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const GameField = () => {

    const [cards, setCards] = useState<Cell[]>(shuffle(cells))
    const [reversedCards, setReversedCards] = useState<Cell[]>([])
    const [openedCards, setOpenedCards] = useState<Cell[]>([])
    // const [isTwoCards, setIsTwoCards] = useState<Boolean>(false)

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        const card: boolean = openedCards.some(card => card.id.toString() === e.currentTarget.id)
        if (reversedCards.length !== 2 && !card && (reversedCards.length === 0 || reversedCards[0].id.toString() !== e.currentTarget.id)) {
            const index = cards.findIndex(card => card.id.toString() === e.currentTarget.id)
            const newState = [...cards]
            newState[index].isReversed = true;
            setCards(newState)
            const reversedCard: Cell = newState[index];
            setReversedCards([...reversedCards, reversedCard])
        }
    }

    useEffect(() => {
        if (reversedCards.length === 2) {
            if (reversedCards[0].image !== reversedCards[1].image) {
                setTimeout(() => {
                    if (reversedCards[0].image !== reversedCards[1].image) {
                        const newState = cards.map(card => {
                            if (card.id === reversedCards[0].id || card.id === reversedCards[1].id) {
                                card.isReversed = false;
                            }
                            return card;
                        })
                        setCards(newState)
                    }
                    setReversedCards([])
                }, 1000)
            } else {
                const matchedCards: Cell[] = cards.filter(card => card.id === reversedCards[0].id || card.id === reversedCards[1].id);
                setOpenedCards([...openedCards, ...matchedCards])
                // setIsTwoCards(true)
                setTimeout(() => {
                    setReversedCards([])
                }, 800)
            }
        }
    }, [reversedCards])

    return (
        <div className={styles.field}>
            {
                cards.map((cell) => {
                    return <GameCard
                        isReversed={cell.isReversed}
                        isScaled={openedCards.some((card) => card.id === cell.id)}
                        key={cell.id}
                        id={cell.id}
                        image={cell.image}
                        getId={handleClick}
                    />
                })
            }
        </div>
    );
};

export default GameField;