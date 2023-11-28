import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./src/Screens/LoginScreen";
import Register from "./src/Screens/Register";
import ForgotPassword from "./src/Screens/ForgotPassword";

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <ForgotPassword />
      {/* <LoginScreen /> */}
      {/* <Register /> */}
    </>
  );
};

export default App;
