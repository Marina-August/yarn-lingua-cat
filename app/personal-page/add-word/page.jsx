"use client";

import Form from "@/components/Form";
import { useDispatch, useSelector} from 'react-redux';
import { vocabularyCatActions } from "@/redux/store";
import { useEffect } from "react";

const AddWord =()=>{
  const counter = useSelector((state)=> state.counter);
  const wordIsAdded = useSelector((state)=>state.wordIsAdded);
  const isAwake = useSelector((state)=>state.isAwake)

  const dispatch = useDispatch();

  useEffect(()=>{
    const count = localStorage.getItem('counter');
    if(count){
       dispatch(vocabularyCatActions.setCounter(count))
    }else{

    }
   },[])

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
              if(isAwake){
                 dispatch(vocabularyCatActions.increment());
                 localStorage.setItem('counter', counter+1); // set localstorage to remember after reloading how much hunger is
              } else{

              }
                
               dispatch(vocabularyCatActions.trueWordHandler());        
            }
          } catch (error) {
            console.log(error);
          } 
    }

    return (
        <>
        <Form type="Add" onWordHandler={addWord} />
         </>
    )
}

export default AddWord;