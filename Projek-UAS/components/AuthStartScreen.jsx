import React from 'react'
import { SafeAreaView, StyleSheet, View, TouchableOpacity,Image,Text } from 'react-native'
export default function AuthStartScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.containerGambar}>
            <Image style={styles.gambarForm} source={require('../assets/customer_service.jpg')} />
        </View>

        <View style={styles.containerTentang}>
            <Text style={styles.tentang}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, excepturi.</Text>
        </View>

        <View style={styles.containerTombol}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btnLogin}>
                <Text style={{color:'#222378', fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister}>
                <Text style={{color:'#EEF1FF', fontWeight: 'bold'}}>Register</Text>
            </TouchableOpacity>
        </View>



    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D2DAFF'
},
containerTentang: {
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center'
},
tentang: {
    textAlign: 'center'
},
containerGambar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
},
gambarForm: {
    width: 140,
    height: 136,
    borderRadius: 10
},
containerTombol: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    gap: 20,
},
btnLogin: {
    backgroundColor: '#FFFFFF',
    width: '75%',
    paddingVertical: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
},
btnRegister: {
    backgroundColor: '#222378',
    width: '75%',
    paddingVertical: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
}
})