import * as React from "react";
import { Text, View } from "react-native";
import PersonalInfo from "./../components/Profile/PersonalInfo";
import { Button } from "react-native-elements";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <PersonalInfo></PersonalInfo>
      <Button title="Transaction History"></Button>
      <Button title="Order Card"></Button>
    </View>
  );
}
