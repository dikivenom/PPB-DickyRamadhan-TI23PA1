import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function TugasSatu() {
  return (
    <View style={styles.container}>
      <Text style={styles.nama}>Dicky Ramadhan</Text>
      <Text style={styles.profil}>232310015</Text>
      <Text style={styles.profil}>TI-23-PA1</Text>
      <Text style={styles.kampus}>MAHASISWA IBIK</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nama: {
    backgroundColor: 'black',
    color: 'white',
    padding: 5,
    fontWeight: 'bold',
  },
  profil: {
    color: 'white',
    marginTop: 10,
  },
  kampus: {
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 10,
    padding: 10,
    fontStyle: 'italic',
    backgroundColor: 'white',
  },
});
