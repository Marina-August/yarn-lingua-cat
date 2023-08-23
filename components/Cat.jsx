"use client";

import { useSelector, useDispatch } from 'react-redux';
import { vocabularyCatActions } from '@/redux/store';

const Cat =()=>{
    const isAwake = useSelector((state)=>state.isAwake)
    const counter = useSelector((state)=>state.counter);
    const dispatch = useDispatch();

    console.log("counter",counter);
    
    const wakeUpHandler =()=>{
        dispatch(vocabularyCatActions.trueAwakeHandler());
    }

    return (
        <>
        {isAwake && <div className="hunger">
            {counter<1 && <div className="h">H</div>}
            {counter<2 && <div className="u">U</div>}
            {counter<3 && <div className="n">N</div>}
            {counter<4 && <div className="g">G</div>}
            {counter<5 && <div className="e">E</div>}
            {counter<6 && <div className="r">R</div>}
            </div>}
        <div className="container" onClick={wakeUpHandler}>
            <div className={!isAwake ? "hadow":''}></div>

            <div className="cat">
                <div className="ear"></div>
                <div className={!isAwake? "eye":"eyeOpen"}></div>
                {counter <6 &&<div className="mouth"></div>}
                {counter >=6 && <div className="mouthNotHunger"></div>}
                <div className= "nose"></div>
                <div className={!isAwake? "tailAction":"tailUpDown"}></div>
                <div className={!isAwake? "body": "bodyAwake"}></div>
                {!isAwake && <div className="bubble"></div>}
                <div className="bubbleWithText">
                   {counter <6 && <p className="text">{!isAwake? "Wake Me Up":"Feed Me"}</p>}
                   {counter>=6 && <p className="text">Thank you!</p>}
                    </div>
            </div>
        </div>
        </>
    )

}

export default Cat;