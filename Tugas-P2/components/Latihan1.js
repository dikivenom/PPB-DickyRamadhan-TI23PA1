import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Latihan1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.parentP}>
                <Text style={styles.judul}>History of Bicycle</Text>

                <Text>
                    A bicycle, also called a 
                    <Text style={[styles.paragraf, { color: "red"}]}> pedal cycle </Text>
                    <Text style={[styles.paragraf, { fontWeight: "bold"}]}> bike </Text> 
                    <Text style={[styles.paragraf, { fontStyle: "italic"}]}> push-bike or cycle</Text>, 
                    is a human-powered or motor-powered assisted, pedal-driven,
                    single-track vehicle, having two wheels attached to a frame, one behind
                    the other. A bicycle rider is called a cyclist, or bicyclist.
                </Text>
            </View>

           
            <View>
                <Image 
                    source={{ uri: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg" }}
                    style={styles.fotoProfil}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center", 
    },
    parentP: {
        width: "50%",
        borderStyle: 'solid',
        borderColor: "black",
        borderWidth: 1,
        padding: 10, 
    },
    judul: {
        textDecorationLine: "underline",
        color: "white",
        backgroundColor: "red",
        paddingVertical: 10,
        paddingHorizontal: 'auto',
        textAlign: "center", 
    },
    fotoProfil: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        marginTop: 10,
        backgroundColor: 'lightblue'
    },
    
    paragraf: {
        fontSize: 16, 
        color: "black"
    }
});

export default Latihan1;
