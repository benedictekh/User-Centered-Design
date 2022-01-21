import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const Questions = () => {
  return (
    <View>
      <Card>
        <Text style={styles.questionStyle}>How do I earn tokens?</Text>

        <Text style={styles.answerStyle}>
          You earn tokens by throwing yours or other peoples trash in our smart
          trashcans. Remember use the qr-scanner at the smart trashcan to
          register the tokens to your account!
        </Text>

        <Card.Divider style={styles.dividerStyle}></Card.Divider>

        <Text style={styles.questionStyle}>Where can I spend my tokens?</Text>

        <Text style={styles.answerStyle}>
          In the list or map page, there's an option called 'shops' where you
          can see nearby adherent shops where you can spend your tokens.
        </Text>

        <Card.Divider style={styles.dividerStyle}></Card.Divider>
        <Text style={styles.questionStyle}>How can I spend my tokens?</Text>

        <Text style={styles.answerStyle}>
          By clicking on the main page (the QR code) and scanning it at the
          store after registering your items at the cash register.
        </Text>

        <Card.Divider style={styles.dividerStyle}></Card.Divider>

        <Text style={styles.questionStyle}>
          How can I get tokens when throwing out the garbage?
        </Text>

        <Text style={styles.answerStyle}>
          Click on the main page (the QR code) and scan it on the trashcans'
          available scanners. Throw away the trash as usual, and you're done!
        </Text>

        <Card.Divider style={styles.dividerStyle}></Card.Divider>
        <Text style={styles.questionStyle}>
          Do I have to spend all my tokens at once?
        </Text>

        <Text style={styles.answerStyle}>
          No! You can talk to the cashier in the store, and tell him/her exactly
          how many of your tokens you want to spend.
        </Text>

        <Card.Divider style={styles.dividerStyle}></Card.Divider>
        <Text style={styles.questionStyle}>Is there a trashcan nearby?</Text>

        <Text style={styles.answerStyle}>
          You can search for this by opening the 'list' menu and changing to the
          map version of the available trashcans. Check your current location
          and where the nearest available trashcan is!
        </Text>
      </Card>
    </View>
  );
};

//styling
const styles = StyleSheet.create({
  questionStyle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  answerStyle: {
    color: "#3c3c43",
    fontSize: 16,
  },
  dividerStyle: {
    marginBottom: 20,
    marginTop: 20,
  },
  cardStyle: {
    width: 400,
  },
});

export default Questions;
