import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../pages/ProfileScreen";
import HomeScreen from "../pages/HomeScreen";
import HelpScreen from "../pages/HelpScreen";

//import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
//import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
//import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Help" component={HelpScreen} />
    </Tab.Navigator>
  );
}

export default function NavBar() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
