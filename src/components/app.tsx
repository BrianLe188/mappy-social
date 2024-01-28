import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../main";
import Login from "../main/login";
import Register from "../main/register";
import UserContextProvider from "../contexts/user-context";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <UserContextProvider>
            <ZMPRouter>
              <AnimationRoutes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
              </AnimationRoutes>
            </ZMPRouter>
          </UserContextProvider>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
