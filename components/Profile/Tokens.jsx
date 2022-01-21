import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { PricingCard, colors } from "react-native-elements";

const Tokens = () => {
  return (
    <View>
      <PricingCard
        color={colors.primary}
        title="Tokens"
        price="20"
        button={{ title: "Transaction History", icon: "history" }}
      />
    </View>
  );
};

export default Tokens;
