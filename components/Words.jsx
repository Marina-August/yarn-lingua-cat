"use client"

import "primereact/resources/themes/lara-light-indigo/theme.css";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {useState, useEffect } from "react";

const Words =({onCheckWords})=>{
   const [allWords, setAllWords] = useState([]);

   const fetchWords = async () => {
    const response = await fetch("/api/word");
    const data = await response.json();

    setAllWords(data);
    onCheckWords(data);
  };

  useEffect(() => {
    fetchWords();
  }, []);

    return (
        <>
        {allWords.length>0 && <DataTable 
        // header = {header}
        value={allWords}
        // filters={filters}
        rowHover
        stripedRows 
        paginator rows={10}
        // globalFilterFields={['name.common']}
        //tableStyle={{ minWidth: '50rem' }}
      >
        <Column field="word" sortable header="Original"
         style={{ width: '500px' }}></Column>
        <Column field="translation" sortable header="Translation" style={{ width: '33%' }}></Column>
        <Column field="example" sortable header="Example" 
        style={{ width: '33%' }}
        >

        </Column>
        
      </DataTable>}
         {/* {allWords.map(el=>(
            <div key={el._id}>
            <p>{el.word}</p>
            <p>{el.translation}</p>
            <p>{el.example}</p>
            </div>
         ))} */}
        </>
    )
}

export default Words;