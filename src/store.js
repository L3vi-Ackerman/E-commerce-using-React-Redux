import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers/main";

const store = configureStore(rootReducer);

export default store;