import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native-web';

export default function UbahWarna() {
    const [warna,setWarna] = useState('blue');

   function ubahWarna(){
    if(warna === 'blue'){
        setWarna('red');
    } else {
        setWarna('blue');
    }
   }

  return (
    <View>
      <View style={[styles.kotak, { backgroundColor: warna }]} />
      <Button title="Ubah Warna" onPress={ubahWarna} />
    </View>
  );
}

const styles = StyleSheet.create({
  kotak: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
