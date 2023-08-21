"use client";

import { useState } from 'react';

const Cat =({onFeed})=>{
    const classes = {};
    const [isAwake, setIsAwake] = useState(false);
    const [isHunger, setIsHunger] = useState(5);
    const wakeUpHandler =()=>{
        setIsAwake(true);
        onFeed(isHunger);
    }


    return (
        <>
        {isAwake && <div className="hunger">
            <div className="h">H</div>
            <div className="u">U</div>
            <div className="n">N</div>
            <div className="g">G</div>
            <div className="e">E</div>
            <div className="r">R</div>
            </div>}
        <div className="container" onClick={wakeUpHandler}>
            <div className={!isAwake ? "hadow":''}></div>

            <div className="cat">
                <div className="ear"></div>
                <div className={!isAwake? "eye":"eyeOpen"}></div>
                <div className="mouth"></div>
                <div className= "nose"></div>
                <div className={!isAwake? "tailAction":"tailUpDown"}></div>
                <div className={!isAwake? "body": "bodyAwake"}></div>
                <div className="bubble"></div>
                <div className="bubbleWithText">
                    <p className="text">{!isAwake? "Wake Me Up":"Feed Me"}</p>
                    </div>
            </div>
        </div>
        </>
    )

}

export default Cat;