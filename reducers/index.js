import { combineReducers } from "redux";

import title from "./title";
import words from "./word"

export default combineReducers({
    title,
    words,
});