import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const Questions = () => {
  return (
    <View>
      <Card>
        <Text>Where can I spend my token?s</Text>
        <Text>
          In the list or map page, there's an option called 'shops' where you
          can see nearby adherent shops where you can spend your tokens.
        </Text>
        <Card.Divider></Card.Divider>
        <Text>How can I spend my tokens?</Text>
        <Text>
          By clicking on the main page (the QR code) and scanning it at the
          store after registering your items at the cash register.
        </Text>
        <Card.Divider></Card.Divider>
        <Text>How can I get tokens when throwing out the garbage?</Text>
        <Text>
          Click on the main page (the QR code) and scan it on the trashcans'
          available scanners. Throw away the trash as usual, and you're done!
        </Text>
        <Card.Divider></Card.Divider>
        <Text>Is there a trashcan nearby?</Text>
        <Text>
          You can search for this by opening the 'list' menu and changing to the
          map version of the available trashcans. Check your current location
          and where the nearest available trashcan is!
        </Text>
        <Card.Divider></Card.Divider>
      </Card>
    </View>
  );
};

export default Questions;
