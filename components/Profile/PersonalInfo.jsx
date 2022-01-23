import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card, Button } from "react-native-elements";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

import axios from "axios";

const PersonalInfo = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [showTrashcans, setShowTrashcans] = useState(true);
  return showProfile ? (
    <View style={styles.avatar}>
      <Card style={styles.profileCardStyle}>
        <Card.Title style={styles.nameText}>Joana Alves</Card.Title>
        <View style={styles.avatarView}>
          <Avatar
            title=""
            size="xlarge"
            rounded={true}
            //source={{ uri: require("../../assets/Joana.PNG") }}
            source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
          ></Avatar>
        </View>
        <View style={styles.aboutTextView}>
          <Text style={styles.aboutText}>NIF: 99999</Text>
          <Text style={styles.aboutText}>Address: Av. Rovisco Pais 1,</Text>
          <Text style={styles.aboutText}>1049-001 Lisboa</Text>
          <Text style={styles.aboutText}>Phone: +351 000 0000 000</Text>
          <Text style={styles.aboutText}>email: joana@mail.pt</Text>
        </View>

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
          onPress={() => setShowProfile(false)}
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
  ) : (
    <ScrollView style={{ width: "100%" }}>
      <Ionicons
        name="arrow-back"
        style={{ marginLeft: 8, marginTop: 5 }}
        size={35}
        onPress={() => setShowProfile(true)}
      ></Ionicons>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          title={"Trashcans"}
          buttonStyle={
            !showTrashcans
              ? { backgroundColor: "black", borderRadius: 3, height: 35 }
              : {
                  backgroundColor: "white",
                  borderRadius: 3,
                  borderColor: "black",
                  height: 35,
                }
          }
          titleStyle={
            !showTrashcans
              ? { color: "white", fontSize: 15, textAlign: "center" }
              : { color: "black", fontSize: 15, textAlign: "center" }
          }
          containerStyle={{ width: 110 }}
          onPress={() => setShowTrashcans(false)}
        ></Button>
        <Button
          title={"Transactions"}
          buttonStyle={
            showTrashcans
              ? { backgroundColor: "black", borderRadius: 3, height: 35 }
              : {
                  backgroundColor: "white",
                  borderRadius: 3,
                  borderColor: "black",
                  height: 35,
                }
          }
          containerStyle={{ width: 110 }}
          titleStyle={
            showTrashcans
              ? { color: "white", fontSize: 15, textAlign: "center" }
              : { color: "black", fontSize: 15, textAlign: "center" }
          }
          onPress={() => setShowTrashcans(true)}
        ></Button>
      </View>
      {!showTrashcans ? <Transactions_trashcans /> : <Transactions_shops />}
    </ScrollView>
  );
};

let shop_transactions = [
  {
    place: "Pingo Doce",
    date: "15/12/2021",
    tokenAmount: "-1.0",
  },
  {
    place: "100 Montaditos",
    date: "05/12/2021",
    tokenAmount: "-2.5",
  },
];

let trashcan_transactions = [
  {
    place: "Arco do Cego",
    date: "13/12/2021",
    tokenAmount: "0.3",
  },
  {
    place: "Bairro Alto",
    date: "11/12/2021",
    tokenAmount: "0.1",
  },
  {
    place: "Alameda",
    date: "05/12/2021",
    tokenAmount: "0.4",
  },
  {
    place: "Anjos",
    date: "05/12/2021",
    tokenAmount: "0.3",
  },
  {
    place: "Martim Moniz",
    date: "01/12/2021",
    tokenAmount: "0.1",
  },
];

function Transactions_shops() {
  const [transactionsShopAPI, setTransactionsShopAPI] = useState([]);
  async function getTransactionShopData() {
    axios
      .get("http://34.78.106.8:8080/api/user/1/shopTransactions/")
      .then((response) => {
        setTransactionsShopAPI(response.data);
      })
      .catch((error) => console.log("error"));
  }

  useEffect(() => {
    getTransactionShopData();
  }, []);
  return (
    <View style={styles.container}>
      {transactionsShopAPI.map((item, i) => {
        return (
          <Card key={i}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="coins" size={26}></FontAwesome5>
              <View>
                <Card.Title style={styles.title}>{item.place}</Card.Title>
                <Text>{item.date}</Text>
              </View>
              <Text style={{ marginRight: 30, fontSize: 14 }}>
                {"Tokens: " + item.tokenAmount}
              </Text>
            </View>
          </Card>
        );
      })}
    </View>
  );
}

function Transactions_trashcans() {
  const [transactionsTrashAPI, setTransactionsTrashAPI] = useState([]);
  async function getTransactionTrashData() {
    axios
      .get("http://34.78.106.8:8080/api/user/1/trashCanTransactions/")
      .then((response) => {
        setTransactionsTrashAPI(response.data);
      });
  }

  useEffect(() => {
    getTransactionTrashData();
  }, []);

  return (
    <View style={styles.container}>
      {transactionsTrashAPI.map((item, i) => {
        return (
          <Card key={i}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="coins" size={26}></FontAwesome5>
              <View>
                <Card.Title style={styles.title}>{item.place}</Card.Title>
                <Text>{item.date}</Text>
              </View>
              <Text style={{ marginRight: 30, fontSize: 14 }}>
                {"Tokens: " + item.tokenAmount}
              </Text>
            </View>
          </Card>
        );
      })}
    </View>
  );
}

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
    width: 330,
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
    marginBottom: 10,
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
  nameText: {
    fontSize: 27,
    marginBottom: 2,
  },
  title: {
    textAlign: "left",
    fontSize: 16,
  },
  container: {
    width: "100%",
  },
  card_shops: {
    flex: 1,
    flexDirection: "row",
  },
});

export default PersonalInfo;
