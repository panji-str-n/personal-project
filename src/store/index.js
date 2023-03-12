import { legacy_createStore as createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import formReducer from "../reducer/formReducer";

const store = createStore(formReducer, applyMiddleware(thunk));

export default store;