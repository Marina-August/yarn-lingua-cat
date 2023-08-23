"use client";

import Form from "@/components/Form";
import { useDispatch, useSelector} from 'react-redux';
import { vocabularyCatActions } from "@/redux/store";

const AddWord =()=>{
  const counter = useSelector((state)=> state.counter);
  const wordIsAdded = useSelector((state)=>state.wordIsAdded);
  const isAwake = useSelector((state)=>state.isAwake)

  const dispatch = useDispatch();

  console.log("boolean ", wordIsAdded);

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