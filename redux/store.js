import { createSlice,configureStore } from '@reduxjs/toolkit';

const initialVocabularyCatState = {counter: 0, wordIsAdded: false, isAwake: false};

const vocabularyCatSlice = createSlice({
    name: "vocabulary",
    initialState: initialVocabularyCatState,
    reducers:{
        increment(state){
            state.counter++;
        },
        reset(state){
            state.counter = 0;
        },
        setCounter(state, action){
            state.counter = action.payload
        },
        trueWordHandler(state){
            state.wordIsAdded = true;
        },
        falseWordHandler(state){
            state.wordIsAdded = false;
        },
        trueAwakeHandler(state){
            state.isAwake = true;
        },
        falseAwakeHandler(state){
            state.isAwake = false;
        }
        
    }
})

const store = configureStore({
    reducer: vocabularyCatSlice.reducer
})

export const vocabularyCatActions = vocabularyCatSlice.actions;

export default store;