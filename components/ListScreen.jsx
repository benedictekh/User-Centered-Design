import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import {TrashcansList, ShopsList} from './List';
import Searchbar from './Searchbar';

export default function ListScreen() {
    return (
        <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row',  alignItems: 'center' }}> 
        <Searchbar />
        <ShopsList />
      </View>
      </ScrollView>
    );
  }
  