import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Image } from 'react-native-elements';
// import FilterComponent from '../assets/FilterComponent';
import {TrashcansList, ShopsList} from './List';
import Searchbar from './Searchbar';

export default function ListScreen() {
    let image_path_filter = require('../assets/filter.png');
    let image_path_map = require('../assets/map.png');
    let image_path_map_trashcans = require('../assets/map_trashcans.png');
    let image_path_map_shops = require('../assets/map_shops.png');

    const [trashcanStatus, setTrashcanStatus] = useState(false);
    const [showList, setShowList] = useState(true);

    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-around', marginTop: 10, marginBottom: 10}}>
                {/* <FilterComponent></FilterComponent> */}
                <Image 
                    source={image_path_filter} 
                    style={{width:40, height:40, marginLeft: 15}}
                ></Image>
                <View style={{ flex: 1, flexDirection: 'row',  alignItems: 'center', justifyContent: 'center'}}>
                    <Button
                        title={'Trashcans'}
                        buttonStyle={
                            !trashcanStatus ? 
                            {backgroundColor: 'black', borderRadius: 3}
                            : 
                            {backgroundColor: 'white', borderRadius: 3, borderColor: 'black'}
                        }
                        titleStyle={
                            !trashcanStatus ? 
                            {color: "white"}
                            : 
                            {color: "black"}
                        }
                        containerStyle={{width: 100}}
                        onPress={() => setTrashcanStatus(false)}
                    ></Button>
                    <Button
                        title={'Shops'}
                        buttonStyle={
                            trashcanStatus ? 
                            {backgroundColor: 'black', borderRadius: 3}
                            : 
                            {backgroundColor: 'white', borderRadius: 3, borderColor: "black"}
                        }                        
                        containerStyle={{width: 100}}
                        titleStyle={
                            trashcanStatus ? 
                            {color: "white"}
                            : 
                            {color: "black"}
                        }                      
                        onPress={() => setTrashcanStatus(true)}
                    ></Button>
                </View>
                <Image 
                    source={image_path_map} 
                    style={{width:40, height:40, marginRight: 20}}
                    onPress={() => setShowList(!showList)}
                ></Image>
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
  