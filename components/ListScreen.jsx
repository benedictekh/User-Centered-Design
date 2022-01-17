import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Image } from 'react-native-elements';
import {TrashcansList, ShopsList} from './List';
import Searchbar from './Searchbar';

export default function ListScreen() {
    let image_path_filter = require('../assets/filter.png')
    let image_path_map = require('../assets/map.png')

    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-around'}}>
                <Image 
                    source={image_path_filter} 
                    style={{width:40, height:40}}
                    onPress={() => console.log('pressed filter')}
                ></Image>
                <Button
                    title={'Boolean switch'}
                    buttonStyle={{backgroundColor: 'rgba(78, 116, 289, 1)',borderRadius: 3}}
                    containerStyle={{width: 150,marginVertical: 10}}
                ></Button>
                <Image 
                    source={image_path_map} 
                    style={{width:40, height:40}}
                    onPress={() => console.log('pressed map')}
                ></Image>
            </View>
            <View style={{ flex: 1, flexDirection: 'column',  alignItems: 'center' }}> 
                <Searchbar />
                <ShopsList />
            </View>
        </ScrollView>
    );
  }
  