import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileRFC() {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/029/364/941/non_2x/3d-carton-of-boy-going-to-school-ai-photo.jpg',
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
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
  },
  tulisan: {
    fontSize: 16,
    color: '#333',
    marginVertical: 4,
    fontWeight: '500',
  },
});
