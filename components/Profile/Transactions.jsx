import { Card, Button } from 'react-native-elements'
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';


let shop_transactions = [
    {
        "place": "Pingo Doce",
        "date": "15/12/2021",
        "tokenAmount": "-1.0"
    },
    {
        "place": "100 Montaditos",
        "date": "05/12/2021",
        "tokenAmount": "-2.5"
    }
]

let trashcan_transactions = [
    {
        "place": "Arco do Cego",
        "date": "13/12/2021",
        "tokenAmount": "0.3"
    },
    {
        "place": "Bairro Alto",
        "date": "11/12/2021",
        "tokenAmount": "0.1"
    },
    {
        "place": "Alameda",
        "date": "05/12/2021",
        "tokenAmount": "0.4"
    },
    {
        "place": "Anjos",
        "date": "05/12/2021",
        "tokenAmount": "0.3"
    },
    {
        "place": "Martim Moniz",
        "date": "01/12/2021",
        "tokenAmount": "0.1"
    }
]

function Transactions_shops() {
    return (
        <View style={styles.container}>
        {shop_transactions.map((item, i) => {
            return(
                <Card key={i}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <FontAwesome5 name="coins" size={26}></FontAwesome5>
                        <View >
                        <Card.Title style={styles.title}>{item.place}</Card.Title>
                        <Text>{item.date}</Text>
                        </View>
                        <Text style={{marginRight: 30, fontSize: 14}}>{'Tokens: ' + item.tokenAmount}</Text>
                    </View>
                </Card>
            )
        })}
        </View>
    );
  }

  function Transactions_trashcans() {
    return (
        <View style={styles.container}>
        {trashcan_transactions.map((item, i) => {
            return(
                <Card key={i}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <FontAwesome5 name="coins" size={26}></FontAwesome5>
                        <View >
                        <Card.Title style={styles.title}>{item.place}</Card.Title>
                        <Text>{item.date}</Text>
                        </View>
                        <Text style={{marginRight: 30, fontSize: 14}}>{'Tokens: ' + item.tokenAmount}</Text>
                    </View>
                </Card>
            )
        })}
        </View>
    );
  }

  
  export default function Transactions() {
    const [showTrashcans, setShowTrashcans] = useState(true);
    return(
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row',  alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
            <Button
                title={'Trashcans'}
                buttonStyle={
                    !showTrashcans ? 
                    {backgroundColor: 'black', borderRadius: 3, height: 35}
                    : 
                    {backgroundColor: 'white', borderRadius: 3, borderColor: 'black', height: 35}
                }
                titleStyle={
                    !showTrashcans ? 
                    {color: "white", fontSize: 15, textAlign: 'center'}
                    : 
                    {color: "black", fontSize: 15, textAlign: 'center'}
                }
                containerStyle={{width: 110}}
                onPress={() => setShowTrashcans(false)}
            ></Button>
            <Button
                title={'Transactions'}
                buttonStyle={
                    showTrashcans ? 
                    {backgroundColor: 'black', borderRadius: 3, height: 35}
                    : 
                    {backgroundColor: 'white', borderRadius: 3, borderColor: "black", height: 35}
                }                        
                containerStyle={{width: 110}}
                titleStyle={
                    showTrashcans ? 
                    {color: "white", fontSize: 15, textAlign: 'center'}
                    : 
                    {color: "black", fontSize: 15, textAlign: 'center'}
                }                      
                onPress={() => setShowTrashcans(true)}
            ></Button>
        </View>
        {!showTrashcans ? 
        <Transactions_trashcans />
        :
        <Transactions_shops />
        }
    </ScrollView>
    )
}
  

  const styles = StyleSheet.create({
    title: {
      textAlign: 'left',
      fontSize: 16
    },
    container: {
        width: "100%"
    },
    card_shops: {
        flex: 1,
        flexDirection: "row",
    }

  });
  