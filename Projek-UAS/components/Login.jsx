import React, { useState } from 'react'
import { TextInput, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

export default function Login() {
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(true);

    return (
        <SafeAreaView>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Masukin PW"
                    secureTextEntry={hidden}
                    underlineColorAndroid="transparent"
                    selectionColor="black"
                />
                <TouchableOpacity onPress={() => setHidden(!hidden)}>
                    <Icon name={hidden ? 'eye' : 'eye-slash'} size={20} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerInput: {
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 8,
        margin: 20
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderWidth: 0, 
        outlineStyle: 'none'
    },
});
