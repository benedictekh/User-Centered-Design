import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { PricingCard, colors } from "react-native-elements";

const OrderCard = () => {
  return (
    <View>
      <PricingCard
        color={colors.primary}
        info={["Want your personal DupIt-card?"]}
        button={{ title: "Order Card" }}
      />
    </View>
  );
};

export default OrderCard;
