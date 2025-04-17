import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class ProfileRCC extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://cdna.artstation.com/p/assets/images/images/040/951/926/large/maddie_creates-jj-ver2.jpg?1630351796',
            }}
            style={styles.gambar}
          />
          <Text style={styles.tulisan}>Dicky Ramadhan</Text>
          <Text style={styles.tulisan}>232310015</Text>
          <Text style={styles.tulisan}>Teknologi Informasi</Text>
          <Text style={styles.tulisan}>Login ML</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    margin: 20,
  },
  gambar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#38bdf8',
  },
  tulisan: {
    fontSize: 16,
    color: '#f1f5f9', 
    marginVertical: 4,
    fontWeight: '600',
  },
});
