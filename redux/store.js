import { createSlice,configureStore } from '@reduxjs/toolkit';

const initialVocabularyState = {counter: 0};

const vocabularySlice = createSlice({
    name: "vocabulary",
    initialState: initialVocabularyState,
    reducers:{
        increment(state){
            state.counter++;
        }
    }
})

const store = configureStore({
    reducer: vocabularySlice.reducer
})

export const vocabularyActions = vocabularySlice.actions;

export default store;