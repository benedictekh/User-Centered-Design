import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';


export default function Searchbar(props){
    let image_path = require('../assets/search.png');
  return (
     <View style={styles.searchfield}>
     <Image source={image_path} style={{width:20, height:20, marginTop: -3}}/>
      <TextInput
        placeholder='Search'
        style={styles.formField}
        placeholderTextColor={'#888888'}
        value={props.search}
        onChangeText={(text) => props.setSearch(text)}
      > 
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    searchfield: {
        flex: 2,
        flexDirection: 'row',
        alignContent: "center",
        margin: 5,
        borderWidth: 1,
        padding: 12,
        borderColor: '#888888',
        height: 40,
        width: "90%"
    },
    formField: {
        width: "70%",
        fontSize: 18,
        paddingLeft: 15

    }
});