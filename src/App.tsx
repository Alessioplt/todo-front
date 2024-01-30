import React from 'react';
import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import HomePage from "./view/Body/HomePage";
import { Route, Routes} from 'react-router-dom';
import Dashboard from "./view/auth/dashboard/DashBoard";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import PrivateRoutes from "./components/core/PrivateRoute";

function App() {
  return (
      <Provider store={store}>
          <NextUIProvider>
                  <Routes>
                      <Route element={<PrivateRoutes />}>
                          <Route path="/dashboard" element={<Dashboard/>}/>
                      </Route>
                      <Route path="/" element={<HomePage/>} />
                  </Routes>
          </NextUIProvider>
      </Provider>
  );
}

export default App;
