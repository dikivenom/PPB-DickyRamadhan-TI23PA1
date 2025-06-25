import React, { useState } from 'react'
import { ScrollView, View, TextInput, TouchableOpacity, StyleSheet, Alert, StatusBar, Text } from 'react-native'


export default function Login({navigation}) {
    const [email,setEmail] = useState('232310041');
    const [password,setPassword] = useState('232310041');

    function handleSubmit(){
        if(!email && !password){
            alert('Email & Password tidak boleh kosong!')
        } else if(email === '232310041' && password === '232310041') {
             alert('Login berhasil! Alvio, Selamat Berbelanja!!')
            navigation.navigate('Home')
        } else {
            alert('Login harus menggunakan NPM!')
        }
    }

  return (
    <View>
   <ScrollView style={styles.container}>
  
  <View>
    <Text style={{fontSize: 50, textAlign: 'center'}}>SELAMAT DATANG DI KANTIN IBIK</Text>
  </View>
 <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail}/>
        <TextInput style={styles.input} secureTextEntry placeholder='Password' value={password} onChangeText={setPassword}  />

               <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: 'blue', paddingHorizontal: 30, paddingVertical: 10}}>
                <Text style={{color: 'white'}}>LOGIN</Text>
            </TouchableOpacity>
  
    </View>
   </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        alignSelf: 'center'
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,
        width: 200
    },
    containerInput: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    }

})
