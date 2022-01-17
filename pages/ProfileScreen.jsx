import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import PersonalInfo from "./../components/Profile/PersonalInfo";
import Tokens from "./../components/Profile/Tokens";
import OrderCard from "../components/Profile/OrderCard";

export default function ProfileScreen() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <PersonalInfo></PersonalInfo>
      </View>
    </ScrollView>
  );
}
