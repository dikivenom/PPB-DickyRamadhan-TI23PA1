import React from 'react'
import { View, TouchableOpacity,Text, Alert, FlatList,StyleSheet, TextInput,Image } from 'react-native'

export default function ProfileScreen() {
  return (
<View>
      <Text>Dicky Ramadhan</Text>
      <Text>dikiramadhan@gmail.com</Text>
     <Image style={{width: 100, height: 100}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18pBhn3czaXKbe4dQ_weIEIezlunJVaK9YQ&s'}}/>
</View>
  )
}
