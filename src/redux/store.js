import AsyncStorage from "@react-native-async-storage/async-storage";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import { saveOnLogin } from "./middleware/otherMiddleWare";
import { ServiceMiddleware } from "./middleware/serviceMiddleWare.js";
import rootReducers from "./reducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["loginUserReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const middleware = [thunk, ServiceMiddleware, saveOnLogin];
const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
let persistor = persistStore(store);

export { store, persistor };
