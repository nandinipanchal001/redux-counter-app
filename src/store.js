// import rootReducer from "./reducers";
// import { createStore } from "redux";

// const store = createStore(rootReducer)

// export default store

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})

export default store
