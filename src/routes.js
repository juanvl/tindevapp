import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "~screens/Main";
import Login from "~screens/Login";

const Routes = createAppContainer(createSwitchNavigator({ Login, Main }));

export default Routes;
