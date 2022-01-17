import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Avatar, Image } from "react-native-elements";

const PersonalInfo = () => {
  return (
    <View>
      <View>
        <Avatar
          title=""
          size="xlarge"
          rounded={true}
          source={{ uri: "https://randomuser.me/api/portraits/" }}
        ></Avatar>
        <Text>Joana</Text>
        <Text>NIF: 99999</Text>
        <Text>Address: Av. Rovisco Pais 1, 1049-001 Lisboa</Text>
        <Text>Phone: +351 000 0000 000</Text>
        <Text>email: joana@mail.pt</Text>
      </View>
    </View>
  );
};

export default PersonalInfo;
