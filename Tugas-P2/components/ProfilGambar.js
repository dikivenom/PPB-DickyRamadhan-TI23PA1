import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ProfilGambar = () => {
    return (
        <View style={styles.imageContainer}>
            <Image 
                source={{ uri: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg" }}
                style={styles.fotoProfil}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 20, 
        alignItems: "center"
    },
    fotoProfil: {
        width: 100,
        height: 100,
        resizeMode: "cover"
    }
});

export default ProfilGambar;
