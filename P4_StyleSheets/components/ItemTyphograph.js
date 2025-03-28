import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ItemTyphograph = () => {
    return (
       <View style={{
        paddingHorizontal: 20
       }}>
        <Text style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "pink",
          color: "white",
          textAlign: "center",
          textDecorationLine: "underline",
          padding: 10,
          marginBottom: 10,
        }}>
            History of Bicycle
        </Text>

      <Text>A bicycle, also called a <Text style={{ ...StyleSheet.paragraf, color: "red"}}>pedal cycle </Text>
     <Text style={{ ...StyleSheet.paragraf, fontWeight: "bold"}}>bike</Text> 
     <Text style={{ ...StyleSheet.paragraf, fontStyle: "italic"}}> push-bike or cycle</Text> , is a human-powered or motor-powered assisted, pedal-driven,
        single-track vehicle, having two wheels attached to a frame, one behind
        the other. A bicycle rider is called a cyclist, or bicyclist</Text>
    
       </View>
    );
}

const styles = StyleSheet.create({
    paragraf: {
        fontSize: 16,
        textAlign: "justify",
        justifyContent: "center"
        
    }
})

export default ItemTyphograph;
