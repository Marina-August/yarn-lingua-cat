
import mongoose, { Schema, model, models } from "mongoose";

const LanguageSchema = new Schema({
    name: {
      type: String,
      required: [true],
    
    },
    code: {
      type: String,
      required: [false],
    },
    flag:{
        type: String,
        required: [false],
    },
  });
  console.log('Models', models);
  const Language = models.Language || model("Language", LanguageSchema);
  
  export default Language;