import React from "react";
//import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { reducer } from "./reducer";
import Cover from "./pages/Cover";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);
