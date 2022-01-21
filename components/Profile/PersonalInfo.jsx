import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Card, Button } from "react-native-elements";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PersonalInfo = () => {
  return (
    <View style={styles.avatar}>
      <Card style={styles.profileCardStyle}>
        <Card.Title style={styles.aboutText}>Joana Alves</Card.Title>
        <View style={styles.avatarView}>
          <Avatar
            title=""
            size="xlarge"
            rounded={true}
            source={{ uri: "https://randomuser.me/api/portraits/" }}
          ></Avatar>
        </View>

        <Text style={styles.aboutText}>NIF: 99999</Text>
        <Text style={styles.aboutText}>Address: Av. Rovisco Pais 1,</Text>
        <Text style={styles.aboutText}>1049-001 Lisboa</Text>
        <Text style={styles.aboutText}>Phone: +351 000 0000 000</Text>
        <Text style={styles.aboutText}>email: joana@mail.pt</Text>

        <Button
          title={"Edit Profile"}
          buttonStyle={styles.profileButtons}
          titleStyle={styles.buttonTitle}
        ></Button>

        <Card.Divider style={styles.dividerStyle} />
        <Text style={styles.tokenText}>Your Tokens</Text>
        <View style={styles.tokenView}>
          <FontAwesome5 name="coins" size={60} />
          <Text style={styles.tokenText}>= 20</Text>
        </View>
        <Button
          title={"Transaction History"}
          buttonStyle={styles.profileButtons}
          titleStyle={styles.buttonTitle}
        ></Button>

        <Card.Divider styles={styles.dividerStyle} />
        <Text style={styles.otherText}>Want your personal DupmIt card?</Text>
        <Button
          title={"Order Card"}
          buttonStyle={styles.profileButtons}
          titleStyle={styles.buttonTitle}
        ></Button>
      </Card>
    </View>
  );
};

//styling
const styles = StyleSheet.create({
  profileCardStyle: {},
  dividerStyle: {
    marginBottom: 15,
    marginTop: 10,
  },
  profileButtons: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 10,
    marginTop: 5,
    borderColor: "black",
    borderWidth: 1,
    width: 320,
  },
  buttonTitle: {
    color: "black",
  },
  aboutText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 4,
  },
  otherText: {
    fontSize: 16,
  },
  avatarView: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tokenIcon: {},
  tokenView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  tokenText: {
    fontSize: 25,
    marginLeft: 10,
    marginBottom: 15,
    textAlign: "center",
  },
});

export default PersonalInfo;
