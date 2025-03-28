import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import KotakTeks from './KotakTeks';
import ProfilGambar from './ProfilGambar';

class ParentTeksGambar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <KotakTeks />
                <ProfilGambar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 150
    }
});

export default ParentTeksGambar;
