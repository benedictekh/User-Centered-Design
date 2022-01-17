import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';

export default function Searchbar() {
    let image_path = require('../assets/search.png');
  return (
    <View>
     <View style={styles.searchfield}>
     <Image source={image_path} style={{width:20, height:20, marginTop: -3}}/>
      <TextInput
        placeholder='Search'
        style={styles.formField}
        placeholderTextColor={'#888888'}
        // onChangeText={(text) => changeText(text)}
      > 
      </TextInput>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    searchfield: {
        flex: 2,
        flexDirection: 'row',
        alignContent: "center",
        margin: 5,
        marginLeft: 10,
        borderWidth: 1,
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        borderColor: '#888888',
        height: 40,
    },
    formField: {
        width: "70%",
        fontSize: 18,
        paddingLeft: 15

    }
});