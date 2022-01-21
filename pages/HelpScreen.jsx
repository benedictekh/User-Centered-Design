import * as React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import Questions from "../components/HelpPage/Questions";

export default function HelpScreen() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Questions></Questions>
      </View>
    </ScrollView>
  );
}
