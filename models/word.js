import mongoose, { Schema, model, models } from "mongoose";

const WordSchema = new Schema({
    // user_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    // },
    // word_language: {
    //   type: String,
    //   required: [true, 'Word language is required!'],
    
    // },
    source:{
       type: Schema.Types.ObjectId,
       ref: 'Language',
    },
    word: {
      type: String,
      required: [true, 'Word is required!'],
    },

    // translation_language: {
    //     type: String,
    //     required: [true, 'Translation language is required!'],
      
    //   },
    target:{
        type: Schema.Types.ObjectId,
        ref: 'Language',
    },

    translation: {
        type: String,
        required: [true, 'Translation is required!'],
      },
    example: {
        type: String,
        required: [false]
    }

  });
  
  const Word = models.Word || model("Word", WordSchema);
  
  export default Word;