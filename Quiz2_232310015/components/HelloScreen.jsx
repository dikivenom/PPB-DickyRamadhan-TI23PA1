import React from 'react'
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Image, Alert } from 'react-native'

export default function HelloScreen() {
    function tampilAlert() {
        Alert.alert('Anda akan mulai kuis');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Halo Selamat Datang di Kuis React Native!</Text>

                <Image
                    style={styles.logo}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/LOGO_IBIK.png/1200px-LOGO_IBIK.png' }}
                />

                <TouchableOpacity style={styles.button} onPress={tampilAlert}>
                    <Text style={styles.buttonText}>Klik Mulai</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 30,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
})
