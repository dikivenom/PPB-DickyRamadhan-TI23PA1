import React from 'react';
import { View, SafeAreaView, ScrollView, Image, Text, StyleSheet } from 'react-native';

const LoadingIBIK = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "purple" }}> 
            <ScrollView contentContainerStyle={{ 
                flexGrow: 1, 
                justifyContent: "center", 
                alignItems: "center", 
                backgroundColor: "purple" 
            }}>
                <View style={{ 
                    flex: 1, 
                    justifyContent: "center", 
                    alignItems: "center" 
                }}>
                    <Image 
                        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/LOGO_IBIK.png/1200px-LOGO_IBIK.png" }} 
                        style={{ width: 60, height: 150, resizeMode: "contain" }}
                    />
                </View>
                <View>
                    <Text style={[styles.text, { marginTop: 50 }]}>Loading..</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: "white",
  
        textAlign: "center",
    }
});

export default LoadingIBIK;
