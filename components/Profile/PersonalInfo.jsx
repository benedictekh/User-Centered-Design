import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Card, Button, Badge } from "react-native-elements";

const PersonalInfo = () => {
  return (
    <View>
      <Card style={styles.profileCardStyle}>
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
        <Button
          title={"Transaction History"}
          style={styles.profileButtons}
        ></Button>

        <Card.Divider styles={styles.cardDivider} />
        <Text>Want your personal DupmIt card?</Text>
        <Button title={"Order Card"} style={styles.profileButtons}></Button>
      </Card>
    </View>
  );
};

//styling
const styles = StyleSheet.create({
  profileCardStyle: {
    backgroundColor: "red",
  },
  cardDivider: {
    marginBottom: 10,
    marginTop: 10,
  },
  profileButtons: {
    color: "white",
  },
});

export default PersonalInfo;
