"use client";

import Form from "@/components/Form";

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
        <Form type="Add" onWordHandler={addWord} />
         </>
    )
}

export default AddWord;