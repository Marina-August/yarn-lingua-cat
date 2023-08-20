"use client";

import classes from '../styles/Cat.module.css';
import { useState } from 'react';

const Cat =({onFeed})=>{
    const [isAwake, setIsAwake] = useState(false);
    const [isHunger, setIsHunger] = useState(5);
    const wakeUpHandler =()=>{
        setIsAwake(true);
        onFeed(isHunger);
    }

    return (
        <>
        {isAwake && <div className={classes.hunger}>Hunger</div>}
        <div className={classes.container} onClick={wakeUpHandler}>
            <div className={!isAwake && classes.shadow}></div>
            <div className={classes.cat}>
                <div className={classes.ear}></div>
                <div className={!isAwake? classes.eye:classes.eyeOpen}></div>
                <div className={classes.mouth}></div>
                <div className={classes.nose}></div>
                <div className={!isAwake? classes.tailAction:classes.tailUpDown}></div>
                <div className={!isAwake? classes.body: classes.bodyAwake}></div>
                <div className={classes.bubble}></div>
                <div className={classes.bubbleWithText}>
                    <p className={classes.text}>{!isAwake? "Wake Me Up":"Feed Me"}</p>
                    </div>
            </div>
        </div>
        </>
    )

}

export default Cat;