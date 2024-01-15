import React from 'react';
import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import HomePage from "./view/Body/HomePage";
import { Route, Routes} from 'react-router-dom';
import Dashboard from "./view/auth/dashboard/DashBoard";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import client from './oldApi/Service'
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
      <Provider store={store}>
          <NextUIProvider>
              <ApolloProvider client={client}>
                  <Routes>
                      <Route path="/" element={<HomePage/>} />
                      <Route path="/dashboard" element={<Dashboard/>}/>
                  </Routes>
              </ApolloProvider>
          </NextUIProvider>
      </Provider>
  );
}

export default App;
