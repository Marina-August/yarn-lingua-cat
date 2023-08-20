"use client";

import Form from "@/components/Form";
import Cat from "@/components/Cat";
import { useState } from "react";

const AddWord =()=>{
    const [catHunger, setCatHunger] =useState(0);
    
    const addWord = async (word)=>{
        console.log("page", word)
        try {
            const response = await fetch("../api/word/new", {
              method: "POST",
              body: JSON.stringify({
                source: word.source,
                word:word.enteredWord ,
                target: word.target,
                translation: word.targetWord ,
                example: word.usage
              }),
            });
      
            if (response.ok) {
            //   router.push("/personal-page");
              console.log("ok");
            }
          } catch (error) {
            console.log(error);
          } 
    }

    const feedCat =(hunger)=>{
        setCatHunger(hunger);
    }

    return (
        <>
        {/* <Cat onFeed ={feedCat}/> */}
        <Form type="Add" onWordHandler={addWord} catHunger ={catHunger} />
         </>
    )
}

export default AddWord;