import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native-web';

export default function FormSederhana() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [no, setNo] = useState(0);
    const [hasil, setHasil] = useState('');

    function handleSubmit(){
        setHasil({ nama,email,no })
    }



  return (
    <View>
      <View>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          placeholder="Masukkan Nama Lengkap"
          style={styles.input} value={nama} onChangeText={setNama}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Masukkan Email"
          style={styles.input}
        value={email} onChangeText={setEmail}
        />

        <Text style={styles.label}>No Telp</Text>
        <TextInput
          placeholder="Masukkan No Telp"
          style={styles.input}
          keyboardType="phone-pad"
          value={no} onChangeText={setNo}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />

      {hasil && (
            <View>
                <Text>{hasil.nama}</Text>
                <Text>{hasil.email}</Text>
                <Text>{hasil.no}</Text>
            </View>
        )}

    </View>
  )
        
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
});
