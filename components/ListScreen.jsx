import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Image } from 'react-native-elements';
import {TrashcansList, ShopsList} from './List';
import Searchbar from './Searchbar';
import Feather from 'react-native-vector-icons/Feather';


export default function ListScreen() {
    let image_path_map_trashcans = require('../assets/map_trashcans.png');
    let image_path_map_shops = require('../assets/map_shops.png');

    const [trashcanStatus, setTrashcanStatus] = useState(false);
    const [showList, setShowList] = useState(true);

    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-around', marginTop: 10, marginBottom: 10}}>
                <Feather 
                    name="filter" 
                    style={{width:40, height:40, marginLeft: 20, paddingTop: 4}} 
                    size={32}
                ></Feather>
                <View style={{ flex: 1, flexDirection: 'row',  alignItems: 'center', justifyContent: 'center'}}>
                    <Button
                        title={'Trashcans'}
                        buttonStyle={
                            !trashcanStatus ? 
                            {backgroundColor: 'black', borderRadius: 3, height: 35}
                            : 
                            {backgroundColor: 'white', borderRadius: 3, borderColor: 'black', height: 35}
                        }
                        titleStyle={
                            !trashcanStatus ? 
                            {color: "white", fontSize: 15, textAlign: 'center'}
                            : 
                            {color: "black", fontSize: 15, textAlign: 'center'}
                        }
                        containerStyle={{width: 100}}
                        onPress={() => setTrashcanStatus(false)}
                    ></Button>
                    <Button
                        title={'Shops'}
                        buttonStyle={
                            trashcanStatus ? 
                            {backgroundColor: 'black', borderRadius: 3, height: 35}
                            : 
                            {backgroundColor: 'white', borderRadius: 3, borderColor: "black", height: 35}
                        }                        
                        containerStyle={{width: 100}}
                        titleStyle={
                            trashcanStatus ? 
                            {color: "white", fontSize: 15, textAlign: 'center'}
                            : 
                            {color: "black", fontSize: 15, textAlign: 'center'}
                        }                      
                        onPress={() => setTrashcanStatus(true)}
                    ></Button>
                </View>
            {showList ?    
            <Feather 
                name="map" 
                style={{width:40, height:40, marginRight: 20, paddingTop: 3}} 
                size={32} 
                onPress={() => setShowList(!showList)}
            ></Feather>
            :
            <Feather 
                name="list"
                style={{width:40, height:40, marginRight: 20, paddingTop: 3}} 
                size={36} 
                onPress={() => setShowList(!showList)}
            ></Feather>
            }
         
            </View>
            <View style={{ flex: 1, flexDirection: 'column',  alignItems: 'center' }}> 
                <Searchbar />
                {showList?
                    !trashcanStatus ? <TrashcansList /> : <ShopsList />
                    :
                    !trashcanStatus ? 
                    <Image 
                    source={image_path_map_trashcans} 
                    style={{width:300, height:300, marginRight: 20}}
                    onPress={() => console.log('pressed map')}
                    ></Image> 
                    : 
                    <Image 
                    source={image_path_map_shops} 
                    style={{width:300, height:300, marginRight: 20}}
                    onPress={() => console.log('pressed map')}
                    ></Image>
                }
            </View>
        </ScrollView>
    );
  }
  