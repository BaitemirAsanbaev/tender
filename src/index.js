import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Store from "./store/store";

const store = new Store ()
export const Context = createContext({store});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  
    <Context.Provider value={{store}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
