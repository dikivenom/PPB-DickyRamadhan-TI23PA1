import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import SearchBar from './widgets/SearchBar'

export default function MyFriends() {
  return (
  <SafeAreaView style={awal.container}>
    <View style={awal.header}></View>
    <SearchBar />
    <View style={awal.body}></View>
  </SafeAreaView>
  )
}

const awal  = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "black",
    },
    header : {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal : 10,
        backgroundColor : "cyan"
    },
    body : {
        flex : 10,
        backgroundColor: "grey"
    }
})