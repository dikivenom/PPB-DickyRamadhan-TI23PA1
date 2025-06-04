import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Alert, TextInput, StyleSheet } from 'react-native'

export default function FormPendaftaran() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [nomor, setNomor] = useState('');

    function peringatan() {
        if (nama === '' && email === '' && nomor === '') {
            Alert.alert('Data tidak boleh kosong')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Nama Lengkap'
                value={nama}
                onChangeText={setNama}
            />

            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder='Nomor HP'
                value={nomor}
                onChangeText={setNomor}
                keyboardType='phone-pad'
            />

            <TouchableOpacity style={styles.button} onPress={peringatan}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: 'gray',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
