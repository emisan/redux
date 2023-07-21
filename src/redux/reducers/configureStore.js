import { legacy_createStore} from "redux";
import reducers from "./index.js";

export default function configureStore() {
    return legacy_createStore(reducers);
}