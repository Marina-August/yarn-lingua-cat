"use client";

import { useState } from "react";
import Link from "next/link";

const Form = ({type})=>{
    const [word, setWord] = useState('');
    const [wordLanguage, setWordLanguage]= useState('');

    return (
        <section className='w-full max-w-full flex-col -mt-16'>
        <h1 className='head_text text-center'>
          <span className='orange_gradient'>{type} a word</span>
        </h1>
        <form
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism ml-64 '
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700 mr-6'>
            Your Word 
          </span>
          <select className='rounded-md'>
                <option value='0'>Language</option>
                <option value='1'>Finnish</option>
            </select>
          <input className='form_input'></input>
         </label>
         <label>
          <span className='font-satoshi font-semibold text-base text-gray-700 mr-4'>
            Translation 
          </span>
          <select className='rounded-md'>
                <option value='0'>Language</option>
                <option value='1'>English</option>
            </select>
          <input className='form_input'></input>
         </label>
         <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Usage Examples
          </span>
          <input className='form_textarea'></input>
         </label>
         <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/personal-page' className='text-gray-500 text-lg hover:text-gray-800'>
            Cancel
          </Link>

          <button
            type='submit'
            className='px-5 py-1.5 text-lg bg-primary-orange rounded-full text-white hover:bg-white hover:text-primary-orange'
          > Add
          </button>
        </div>

        </form>
        </section>
    )
}

export default Form;