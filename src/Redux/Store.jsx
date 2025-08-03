import { applyMiddleware, combineReducers, createStore } from "redux";
import sitereducer from "./Reducer/Reducer";
import { thunk } from "redux-thunk";

const Store = createStore(

    combineReducers({

        coachellareducer: sitereducer 

    }), applyMiddleware(thunk)
)

export default Store