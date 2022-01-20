import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Card, Button, Badge } from "react-native-elements";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PersonalInfo = () => {
  return (
    <View style={styles.avatar}>
      <Card style={styles.profileCardStyle}>
        <Card.Title style={styles.aboutText}>Joana Alves</Card.Title>
        <Avatar
          title=""
          size="xlarge"
          rounded={true}
          source={{ uri: "https://randomuser.me/api/portraits/" }}
        ></Avatar>

        <Text style={styles.aboutText}>NIF: 99999</Text>
        <Text style={styles.aboutText}>Address: Av. Rovisco Pais 1,</Text>
        <Text style={styles.aboutText}>1049-001 Lisboa</Text>
        <Text style={styles.aboutText}>Phone: +351 000 0000 000</Text>
        <Text style={styles.aboutText}>email: joana@mail.pt</Text>

        <Button title={"Edit Profile"} style={styles.profileButtons}></Button>

        <Card.Divider style={styles.dividerStyle} />
        <Text style={styles.tokenText}>Tokens</Text>
        <View style={styles.tokenView}>
          <FontAwesome5 name="coins" size={60} />
          <Text style={styles.tokenText}>= 20</Text>
        </View>
        <Button
          title={"Transaction History"}
          style={styles.profileButtons}
        ></Button>

        <Card.Divider styles={styles.dividerStyle} />
        <Text style={styles.otherText}>Want your personal DupmIt card?</Text>
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
  dividerStyle: {
    marginBottom: 10,
    marginTop: 10,
  },
  profileButtons: {
    backgroundColor: "white",
    color: "black",
    borderColor: "black",
    marginBottom: 5,
    marginTop: 5,
  },
  aboutText: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 4,
  },
  otherText: {
    fontSize: 16,
  },
  avatar: {
    justifyContent: "center",
    width: 400,
  },
  tokenIcon: {},
  tokenView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  tokenText: {
    fontSize: 30,
    marginLeft: 10,
  },
});

export default PersonalInfo;
