import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default function FormLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [valid, setValid] = useState('');

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handlerFormat = (username) => {
    setUsername(username);
    if (regex.test(username)) {
      setValid('');
    } else {
      setValid('Format email tidak valid');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/pixel-art.avif")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            placeholder="Masukkan Email"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={username}
            onChangeText={(text) => handlerFormat(text)}
          
          />
    <Text style={{ color: 'white', alignSelf: 'flex-start' }}>{valid}</Text>

          <View style={{ position: 'relative', width: '100%' }}>
            <TextInput
              placeholder="Masukkan Password"
              placeholderTextColor="#ccc"
              secureTextEntry={!showPw}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPw(!showPw)} style={{ position: 'absolute', right: 10, top: 22 }}>
              <Icon size={24} color="white" name={showPw ? 'eye' : 'eye-slash'} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 10,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  button: {
    backgroundColor: 'navy',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
