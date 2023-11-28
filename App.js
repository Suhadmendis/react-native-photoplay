import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./src/Screens/LoginScreen";
import Register from "./src/Screens/Register";

const App = () => {
  return (
    <>
      <StatusBar hidden />
      {/* <LoginScreen /> */}
      <Register />
    </>
  );
};

export default App;
