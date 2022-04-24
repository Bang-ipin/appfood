import React from "react";
import { enableScreens } from "react-native-screens";
import Navigation from "./src/navigations/Navigation";

enableScreens();

export default function App() {
  return (
    <Navigation/>
  )
}


