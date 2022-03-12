import React, {FC, useState} from 'react';

import styles from "./GameCard.module.scss"
import cardFace from "../../assets/card-face.jpg"
import cardBack from "../../assets/card-images/tg1.png"

interface CardProps {
    isReversed: boolean;
    getId: (e: React.MouseEvent<HTMLElement>) =>  void;
    id: number;
    image: string,
    isScaled: boolean
}

const GameCard: FC<CardProps> = ({isReversed, isScaled, id, image, getId}) => {

    return (
        <div className={styles.card} id={id.toString()} onClick={getId}>
            <div className={isReversed ? styles.card__face_reversed : styles.card__face}>
                <img className={styles.image} src={cardFace} alt="card-face"/>
            </div>
            <div className={isReversed ? (isScaled ? styles.card__back_scaled : styles.card__back_reversed) : styles.card__back}>
                <img className={styles.image} src={image} alt="card-back"/>
            </div>
        </div>
    );
};

export default GameCard;