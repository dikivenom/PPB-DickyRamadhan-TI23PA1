import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
var name = "Honda";
const types = {
    type:'Matic',
    model: 'Vario',
    harga: '9999'
}

const Motorcycle = () => {
    return (
        <View>
           <Text>MOTORRRRRRRRR</Text> 
           <Text>Merek: {name}</Text>
           <Text>Type: {types.type}</Text>
           <Text>Model: {types.model}</Text>
           <Text>Harga: {types.harga}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Motorcycle;
