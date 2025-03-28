import React from 'react'
import { Image, Text, View } from 'react-native'

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
<View>
    <Text>Gambar Random</Text>
    <Image
    source={require("../assets/pxfuel.jpg")}
    style={{ width: 200, height: 200}}
    />
</View>

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