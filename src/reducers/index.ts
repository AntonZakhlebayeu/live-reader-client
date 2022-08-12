import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authorReducer from "./authorReducer";
import bookReducer from "./bookReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  book: bookReducer,
  author: authorReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
