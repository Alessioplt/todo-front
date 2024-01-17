import React from 'react';
import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import HomePage from "./view/Body/HomePage";
import { Route, Routes} from 'react-router-dom';
import Dashboard from "./view/auth/dashboard/DashBoard";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
      <Provider store={store}>
          <NextUIProvider>
                  <Routes>
                      <Route path="/" element={<HomePage/>} />
                      <Route path="/dashboard" element={<Dashboard/>}/>
                  </Routes>
          </NextUIProvider>
      </Provider>
  );
}

export default App;
