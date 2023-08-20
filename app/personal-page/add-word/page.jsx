"use client";

import Form from "@/components/Form";
import classes from './cat.module.css'

const AddWord =()=>{
    
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

    return (
        <>
         <div className={classes.container}>
            <div className={classes.shadow}></div>
            <div className={classes.cat}>
                <div className={classes.ear}></div>
                <div className={classes.eye}></div>
                <div className={classes.mouth}></div>
                <div className={classes.nose}></div>
                <div className={classes.tail}></div>
                <div className={classes.body}></div>
                <div className={classes.bubble}></div>
            </div>
        </div>
        <Form type="Add" onWordHandler={addWord}/>
         </>
    )
}

export default AddWord;