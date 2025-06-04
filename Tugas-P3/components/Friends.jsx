import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Friends() {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}> 
  <View style={styles.search_box}>
 <Ionicons name="search-circle-outline" size={24} color="black" />
    <TextInput placeholder="search.."></TextInput>
  </View>

<Text>Recommended Friends</Text>

<View style={styles.containerList}>
    <View>
        <Image style={styles.profile} source={{uri: "https://img.freepik.com/free-vector/smiling-redhaired-cartoon-boy_1308-174709.jpg?semt=ais_hybrid&w=740"}}/>
    </View>
    <View>
        <Text style={{color:'white', fontWeight: 'bold'}}>Dicky</Text>
        <Text style={{color:'white'}}>Dicky Ramadhan</Text>
    </View>

    <View>
        <TouchableOpacity>
            <Text style={{color:'white', backgroundColor: 'magenta', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 5}}>Follow</Text>
        </TouchableOpacity>
    </View>
</View>


<View style={styles.containerList}>
    <View>
        <Image style={styles.profile} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/017/293/217/small_2x/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-png.png"}}/>
    </View>
    <View>
        <Text style={{color:'white', fontWeight: 'bold'}}>Yasrah</Text>
        <Text style={{color:'white'}}>Yasmeennnnn</Text>
    </View>

    <View>
        <TouchableOpacity>
            <Text style={{color:'white', backgroundColor: 'magenta', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 5}}>Follow</Text>
        </TouchableOpacity>
    </View>
</View>

<View style={styles.containerList}>
    <View>
        <Image style={styles.profile} source={{uri: "https://img.freepik.com/free-vector/smiling-redhaired-cartoon-boy_1308-174709.jpg?semt=ais_hybrid&w=740"}}/>
    </View>
    <View>
        <Text style={{color:'white', fontWeight: 'bold'}}>Dicky</Text>
        <Text style={{color:'white'}}>Dicky Ramadhan</Text>
    </View>

    <View>
        <TouchableOpacity>
            <Text style={{color:'white', backgroundColor: 'magenta', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 5}}>Follow</Text>
        </TouchableOpacity>
    </View>
</View>


<View style={styles.containerList}>
    <View>
        <Image style={styles.profile} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/017/293/217/small_2x/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-png.png"}}/>
    </View>
    <View>
        <Text style={{color:'white', fontWeight: 'bold'}}>Yasrah</Text>
        <Text style={{color:'white'}}>Yasmeennnnn</Text>
    </View>

    <View>
        <TouchableOpacity>
            <Text style={{color:'white', backgroundColor: 'magenta', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 5}}>Follow</Text>
        </TouchableOpacity>
    </View>
</View>

<View style={styles.containerList}>
    <View>
        <Image style={styles.profile} source={{uri: "https://img.freepik.com/free-vector/smiling-redhaired-cartoon-boy_1308-174709.jpg?semt=ais_hybrid&w=740"}}/>
    </View>
    <View>
        <Text style={{color:'white', fontWeight: 'bold'}}>Dicky</Text>
        <Text style={{color:'white'}}>Dicky Ramadhan</Text>
    </View>

    <View>
        <TouchableOpacity>
            <Text style={{color:'white', backgroundColor: 'magenta', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 5}}>Follow</Text>
        </TouchableOpacity>
    </View>
</View>


<View style={styles.containerList}>
    <View>
        <Image style={styles.profile} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/017/293/217/small_2x/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-png.png"}}/>
    </View>
    <View>
        <Text style={{color:'white', fontWeight: 'bold'}}>Yasrah</Text>
        <Text style={{color:'white'}}>Yasmeennnnn</Text>
    </View>

    <View>
        <TouchableOpacity>
            <Text style={{color:'white', backgroundColor: 'magenta', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 5}}>Follow</Text>
        </TouchableOpacity>
    </View>
</View>



    {/* Bottom Navbarnya */}
  <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 40, paddingBottom: 20, alignItems: 'center'}}>

<TouchableOpacity onPress={() => navigation.navigate('Home')}>
  <Ionicons name="home-outline" style={{alignSelf: 'center'}} size={24} color="white" />
  <Text style={{color: 'white', alignSelf: 'center'}}>Home</Text>
</TouchableOpacity>


    <View>
    <Ionicons name="search-circle-outline" style={{alignSelf: 'center'}} size={24} color="white" />
    <Text style={{color: 'white', alignSelf: 'center'}}>Search</Text>
    </View>

  </View>

  </SafeAreaView>
      
  )
}

const styles = StyleSheet.create({
    search_box : {
        padding: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection : "row",
        marginTop: 20,
        alignItems: 'center'
    },
    containerList: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 8

    },
    profile: {
    width: 30,
    height: 27,
    borderRadius: 100
    }
})