import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const Questions = () => {
  return (
    <View>
      <Card>
        <Text style={styles.questionStyle}>Where can I spend my token?</Text>

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
        <Text style={styles.questionStyle}>Is there a trashcan nearby?</Text>

        <Text style={styles.answerStyle}>
          You can search for this by opening the 'list' menu and changing to the
          map version of the available trashcans. Check your current location
          and where the nearest available trashcan is!
        </Text>

        <Card.Divider style={styles.dividerStyle}></Card.Divider>
      </Card>
    </View>
  );
};

//styling
const styles = StyleSheet.create({
  questionStyle: {
    fontWeight: "bold",
    fontFamily: "Open Sans",
    fontSize: 20,
    backgroundColor: "red",
  },
  answerStyle: {
    marginBottom: 10,
    marginTop: 10,
    color: "#3c3c43",
  },
  dividerStyle: {
    marginBottom: 20,
    marginTop: 20,
  },
});

export default Questions;
