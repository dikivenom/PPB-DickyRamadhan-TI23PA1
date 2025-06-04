import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native'

export default function CounterApp() {
    const [number, setNumber] = useState(0);

    function tambahAngka() {
        if (number >= 10) {
            Alert.alert('Nilai Maksimal Tercapai');
        } else {
            setNumber(number + 1);
        }
    }

    function kurangAngka() {
        setNumber(number - 1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{number}</Text>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.plusButton} onPress={tambahAngka}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.minusButton} onPress={kurangAngka}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    numberContainer: {
        marginBottom: 30,
    },
    number: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        gap: 20,
    },
    plusButton: {
        backgroundColor: 'pink',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 8,
    },
    minusButton: {
        backgroundColor: 'red',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
