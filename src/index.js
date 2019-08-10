import React from "react";
import { StatusBar, YellowBox } from "react-native";
import "~config/ReactotronConfig";

import Routes from "~routes";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

const App = () => (
  <>
    <StatusBar barStyle="light-content" />
    <Routes />
  </>
);

export default App;
