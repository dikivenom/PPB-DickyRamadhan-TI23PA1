import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function SearchBar() {
  return (
  <View style={styles.search_box}>
    <FontAwesome5 name={"search"} size={20} color={'grey'} />
    <TextInput placeholder="search.."></TextInput>
  </View>
      
  )
}

const styles = StyleSheet.create({
    search_box : {
        padding: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection : "row"
    },
})