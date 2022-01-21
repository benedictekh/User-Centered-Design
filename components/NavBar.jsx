import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../pages/ProfileScreen";
import HomeScreen from "../pages/HomeScreen";
import HelpScreen from "../pages/HelpScreen";

// icons: https://oblador.github.io/react-native-vector-icons/
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="QR"
        component={HomeScreen}
        options={{
          tabBarLabel: "QR",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="List"
        component={HomeScreen}
        options={{
          tabBarLabel: "List",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="location-pin" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Frequently Asked Questions"
        component={HelpScreen}
        options={{
          tabBarLabel: "Help",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="help" color={color} size={size} />
          ),
        }}
      />
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
