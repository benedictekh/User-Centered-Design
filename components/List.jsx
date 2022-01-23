import { ListItem, Icon, Card } from "react-native-elements";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";

import { getAllTrashcans, getAllShops } from "../service/allApiCalls";
import { useState, useEffect } from "react";
import axios from "axios";

const trashcans = [
  {
    adress: "R. Barão de Sabrosa 104-172",
    distance: "Distance 124m",
  },
  {
    adress: "R. Carvalho Araújo",
    distance: "Distance 258m",
  },
  {
    adress: "R. Rosa Damasceno 2-22",
    distance: "Distance 567m",
  },
  {
    adress: "R. Abade Faria 31",
    distance: "Distance 845m",
  },
  {
    adress: "R. Jorge Castilho 1613f",
    distance: "Distance 1056m",
  },
  {
    adress: "R. Barão de Sabrosa 104-172",
    distance: "Distance 124m",
  },
  {
    adress: "R. Carvalho Araújo",
    distance: "Distance 258m",
  },
  {
    adress: "R. Rosa Damasceno 2-22",
    distance: "Distance 567m",
  },
  {
    adress: "R. Abade Faria 31",
    distance: "Distance 845m",
  },
  {
    adress: "R. Jorge Castilho 1613f",
    distance: "Distance 1056m",
  },
];

const shops = [
  {
    name: "Pingo Doce",
    adress: "Av. de Paris 20-A",
  },
  {
    name: "Pingo Doce",
    adress: "R. Conde Sabugosa 25A",
  },
  {
    name: "Metro e Meio",
    adress: "Avenida 5 de Outubro 174",
  },
  {
    name: "Sessenta",
    adress: "R. Tomás Ribeiro 60",
  },
  {
    name: "Continente",
    adress: "Av. de Roma 13 15",
  },
  {
    name: "Pingo Doce",
    adress: "Av. de Paris 20-A",
  },
  {
    name: "Pingo Doce",
    adress: "R. Conde Sabugosa 25A",
  },
  {
    name: "Metro e Meio",
    adress: "Avenida 5 de Outubro 174",
  },
  {
    name: "Sessenta",
    adress: "R. Tomás Ribeiro 60",
  },
  {
    name: "Continente",
    adress: "Av. de Roma 13 15",
  },
];

export function TrashcansList() {
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
      {trashcansAPI.map((item) => {
        {
          console.log(item.address);
        }
        return (
          <Card key={item.id}>
            <View>
              <Card.Title style={styles.title}>{item.address}</Card.Title>
              <Text>Distance: {item.distance}</Text>
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
}

export function ShopsList() {
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
      {shopsAPI.map((item) => {
        return (
          <Card key={item.id}>
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
