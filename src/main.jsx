import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { Provider } from "react-redux";
import { logger, orderPokemon } from "./middlewares/index.js";
import dataReducer from "./slices/dataSlice.js";

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, orderPokemon)
);

const store = createStore(dataReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
