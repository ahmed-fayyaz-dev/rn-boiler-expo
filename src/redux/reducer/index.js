import { combineReducers } from "redux";
import commonReducers from "src/redux/common/reducers";
import dashboardReducers from "src/screens/dashboard/reducers";
import loginReducers from "src/screens/login/reducers";

const rootReducer = (state, action) => {
    if (action.type === "RESET_ACTION") {
        return appReducer(undefined, action); // Reseting Redux Store ( LogOut )
    }

    return appReducer(state, action);
};

const appReducer = combineReducers({
    ...loginReducers,
    ...commonReducers,
    ...dashboardReducers,
});

export default rootReducer;
