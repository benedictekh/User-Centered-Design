import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import {TrashcansList, ShopsList} from './List';
import Searchbar from './Searchbar';

export default function ListScreen() {
    return (
        // <View>
        <ScrollView>
        <View style={{ flex: 1, flexDirection: 'column',  alignItems: 'center' }}> 
        <Searchbar />
        <ShopsList />
        </View>
      </ScrollView>
    );
  }
  