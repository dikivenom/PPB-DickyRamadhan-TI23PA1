import React from 'react'
import { Text, View } from 'react-native'

function Bicycle() {
    const city = "Bogor";
    const orang = {
        nama: 'Dicky',
        npm: 232310015
    }
  return (
   
   <View>
    <Text>---------------</Text>
    <TakeRide/>
    {PlaceGo(city)};
   </View>
  )
}

export default Bicycle
const TakeRide = () => {
    return <Text>Let's go Rideee</Text>;
};

function PlaceGo (value){
return <Text>Were going to {value} noww</Text>;
}