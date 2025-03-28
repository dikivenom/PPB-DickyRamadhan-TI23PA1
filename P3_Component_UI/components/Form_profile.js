import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function Form_profile() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image 
          source={{ uri: "https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-wih-brown-hair-and-mustache-wearing-png-image_7516870.png" }}
          style={styles.profileImage}
        />

        <View>
          <Text>NPM</Text>
          <TextInput style={styles.inputText} placeholder='Masukkan NPM' keyboardType='numeric'/>
          
          <Text>Fullname</Text>
          <TextInput style={styles.inputText} placeholder='Masukkan Nama Lengkap' />

          <Text>Address</Text>
          <TextInput style={styles.inputText} placeholder='Masukkan Alamat' multiline maxLength={100} numberOfLines={5} />
        </View>

        <TouchableOpacity style={styles.tombolIni} onPress={() => alert("Tombol Button ditekan!")}>
          <Text style={styles.textButton}>Button</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} onPress={() => alert("INI TOUCHABLE!")}>
          {aksiTombol("Touchable")}
        </TouchableOpacity>
     
        <TouchableHighlight activeOpacity={0.6} underlayColor={"brown"} onPress={() => alert("INI HIGHLIGHT!")}>
          {aksiTombol("Highlight")}
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

const aksiTombol = (teks) => {
  return (
    <View style={styles.tombolIni}>
      <Text style={styles.textButton}>{teks}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  inputText: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "lightgrey",
    marginTop: 10,
    marginBottom: 10
  },
  tombolIni: {
    width: 200,
    height: 50,
    backgroundColor: "pink",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  }
});
