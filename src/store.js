import { configureStore } from "redux";
import rootred from "./redux/reducers/main";

const storeConfig = {
  reducer:rootred
}
const store = configureStore()


export default store;