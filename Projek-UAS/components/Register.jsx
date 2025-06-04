import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, TouchableOpacity,Image,Text, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default function Register() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
  return (
   <SafeAreaView>
    <View>
        <Text>Sign Up</Text>
    </View>

     <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Full name"
        
                        underlineColorAndroid="transparent"
                        selectionColor="black"
                    />
                    <TouchableOpacity onPress={() => setHidden(!hidden)}>
                        <Icon name={'people'} size={20} />
                    </TouchableOpacity>
                </View>

    <View style={styles.containerInput}>
                   <TextInput
                       style={styles.input}
                       value={password}
                       onChangeText={setPassword}
                       placeholder="Password"
                       secureTextEntry={hidden}
                       underlineColorAndroid="transparent"
                       selectionColor="black"
                   />
                   <TouchableOpacity onPress={() => setHidden(!hidden)}>
                       <Icon name={hidden ? 'eye' : 'eye-slash'} size={20} />
                   </TouchableOpacity>
               </View>
   </SafeAreaView>
  )
}
