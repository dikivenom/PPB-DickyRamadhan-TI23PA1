import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const KotakTeks = () => {
    return (
        <View style={styles.parentP}>
            <Text style={styles.judul}>History of Bicycle</Text>
            <Text style={styles.paragraf}>
                A bicycle, also called a 
                <Text style={{ color: "red" }}> pedal cycle </Text>
                <Text style={{ fontWeight: "bold" }}> bike </Text> 
                <Text style={{ fontStyle: "italic" }}> push-bike or cycle</Text>, 
                is a human-powered or motor-powered assisted, pedal-driven,
                single-track vehicle, having two wheels attached to a frame, one behind
                the other. A bicycle rider is called a cyclist, or bicyclist.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parentP: {
        width: "50%",
        borderStyle: 'solid',
        borderColor: "black",
        borderWidth: 1,
        padding: 10, 
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    judul: {
        textDecorationLine: "underline",
        color: "white",
        backgroundColor: "red",
        paddingVertical: 10,
        textAlign: "center",
        paddingHorizontal: 15
    },
    paragraf: {
        fontSize: 16, 
        color: "black"
    }
});

export default KotakTeks;
