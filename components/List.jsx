import { ListItem, Icon, Card } from "react-native-elements";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";

import { getAllTrashcans, getAllShops } from "../service/allApiCalls";
import { useState, useEffect } from "react";
import axios from "axios";

export function TrashcansList(props) {
  const [trashcansAPI, setTrashcanAPI] = useState([]);
  async function getTrashData() {
    axios.get("http://34.78.106.8:8080/api/trashcan/").then((response) => {
      setTrashcanAPI(response.data);
    });
  }

  useEffect(() => {
    getTrashData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {trashcansAPI.map((item, i) => {
        if (
          item.address.toUpperCase().includes(props.search.toUpperCase()) ||
          props.search === ""
        ) {
          return (
            <Card key={i}>
              <View>
                <Card.Title style={styles.title}>{item.address}</Card.Title>
                <Text>Distance: {item.distance}m</Text>
              </View>
            </Card>
          );
        }
      })}
    </ScrollView>
  );
}

export function ShopsList(props) {
  let image_path = require("../assets/groceries.png");
  const [shopsAPI, setShopAPI] = useState([]);
  async function getShopData() {
    axios.get("http://34.78.106.8:8080/api/shop/").then((response) => {
      setShopAPI(response.data);
    });
  }

  useEffect(() => {
    getShopData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {shopsAPI.map((item, i) => {
        if (
          item.name.toUpperCase().includes(props.search.toUpperCase()) ||
          props.search === ""
        ) {
          return (
            <Card key={i}>
              <View style={styles.card_shops}>
                <Image
                  source={image_path}
                  style={{ width: 40, height: 40, marginRight: 20 }}
                ></Image>
                <View>
                  <Card.Title style={styles.title}>{item.name}</Card.Title>
                  <Text>{item.address}</Text>
                </View>
              </View>
            </Card>
          );
        }
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "left",
  },
  container: {
    width: "100%",
  },
  card_shops: {
    flex: 1,
    flexDirection: "row",
  },
});
