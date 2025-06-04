import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Home({ navigation }) {
  return (
  <SafeAreaView style={{flex: 1, backgroundColor: 'black', paddingVertical: 20}}>
    {/* Ini headernya logo ig & icon lope + kamera */}
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginHorizontal: 13}}>
       <View>
         <Text style={{fontWeight: "bold", color: "white"}}>Instagram</Text>
       </View>

       <View style={{flexDirection: 'row', gap: 8}}>
       <Ionicons name="heart-outline" size={24} color="white" />
       <Ionicons name="paper-plane-outline" size={24} color="white" />
       </View>
    </View>

{/* Inii bagian sg profil */}
    <View style={styles.containerProfile}>
        <Image style={styles.profile} source={{uri: "https://img.freepik.com/free-vector/smiling-redhaired-cartoon-boy_1308-174709.jpg?semt=ais_hybrid&w=740" }} />
        <Image style={styles.profile} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/017/293/217/small_2x/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-png.png" }} />
        <Image style={styles.profile} source={{uri: "https://img.freepik.com/free-vector/smiling-redhaired-cartoon-boy_1308-174709.jpg?semt=ais_hybrid&w=740" }} />
        <Image style={styles.profile} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/017/293/217/small_2x/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-png.png" }} />
        <Image style={styles.profile} source={{uri: "https://img.freepik.com/free-vector/smiling-redhaired-cartoon-boy_1308-174709.jpg?semt=ais_hybrid&w=740" }} />
        <Image style={styles.profile} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/017/293/217/small_2x/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-png.png" }} />
        <Image style={styles.profile} source={{uri: "https://img.freepik.com/free-vector/smiling-redhaired-cartoon-boy_1308-174709.jpg?semt=ais_hybrid&w=740" }} />
        <Image style={styles.profile} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/017/293/217/small_2x/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-png.png" }} />
    </View>

{/* Ini Header Postingannya */}
    <View style={{flexDirection: 'row', gap:5, marginTop: 20, marginLeft: 13, alignItems: 'center'}}>
   <Image style={styles.profilePost} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/017/293/217/small_2x/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-png.png" }} />
   <Text style={{color: 'white'}}>Yasrah</Text>
    </View>

    {/* Ini Gambar Postingannya */}
    <View>
      <Image style={styles.gambarFeed} source={{ uri: "https://i.pinimg.com/736x/5e/29/a5/5e29a566f312a1aefc5eea37bfd7fe9d.jpg"}} />
    </View>

    {/* Bottom Navbarnya */}
  <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, paddingBottom: 20, alignItems: 'center'}}>

    <View>
      <TouchableOpacity>
    <Ionicons name="home-outline" style={{alignSelf: 'center'}} size={24} color="white" />
    <Text style={{color: 'white', alignSelf: 'center'}}>Home</Text>
    </TouchableOpacity>
    </View>

    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
    <Ionicons name="search-circle-outline" style={{alignSelf: 'center'}} size={24} color="white" />
    <Text style={{color: 'white', alignSelf: 'center'}}>Search</Text>
    </TouchableOpacity>
    </View>

  </View>


  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerProfile: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 7,
    borderBottomColor: 'white', 
    borderWidth: 1,
    paddingBottom: 22
  },
  profile: {
    width: 50,
    height: 47,
    borderRadius: 100,
    borderColor: 'magenta',
    borderWidth: 2
  },
  profilePost: {
    width: 30,
    height: 27,
    borderRadius: 100
  },
  gambarFeed: {
    width: 370,
    height: 350,
    alignSelf: 'center',
    marginTop: 21
  }
})
