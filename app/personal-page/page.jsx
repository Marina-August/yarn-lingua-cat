"use client";

import React from "react";
import { useState } from "react";
import Words from "@/components/Words";


const PersonalPage =()=>{
    const [empty, setEmpty] = useState(true);

    const checkWordsLength=(words)=>{
         if (words.length!==0){
            setEmpty(false);
         }
    }

    return(
        <div>
            {empty && <p>You don't have any words yet!</p>}
             <Words onCheckWords ={checkWordsLength}/>
        </div>
        
        
    )
}

export default PersonalPage;