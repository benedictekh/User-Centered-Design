import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Avatar, Image, Card, Button } from "react-native-elements";

const PersonalInfo = () => {
  return (
    <View>
      <View>
        <Card>
          <Card.Title>Joana Alves</Card.Title>
          <Avatar
            title=""
            size="xlarge"
            rounded={true}
            source={{ uri: "https://randomuser.me/api/portraits/" }}
          ></Avatar>

          <Text>NIF: 99999</Text>
          <Text>Address: Av. Rovisco Pais 1, 1049-001 Lisboa</Text>
          <Text>Phone: +351 000 0000 000</Text>
          <Text>email: joana@mail.pt</Text>

          <Card.Divider />
          <Text>Tokens</Text>
          <Button title={"Transaction History"}></Button>

          <Card.Divider />
          <Text>Want your personal DupmIt card?</Text>
          <Button title={"Order Card"}></Button>
        </Card>
      </View>
    </View>
  );
};

export default PersonalInfo;
