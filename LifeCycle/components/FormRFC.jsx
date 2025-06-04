import React, { useState } from 'react'
import { SafeAreaView, Text } from 'react-native';
import { TextInput, View } from 'react-native-web'

export default function FormRFC() {
    const [title, setTitle] = useState('IBIK');
    const [subtitle, setSubtitle] = useState('');

  return (
    <SafeAreaView>
  <View>
<Text>{title}</Text>
<Text>{subtitle}</Text>
  </View>

  <View>
    <TextInput placeholder='masukin judul' defaultValue={title} onChangeText={(text) => setTitle(text)} />
  </View>
  </SafeAreaView>
  )
}
