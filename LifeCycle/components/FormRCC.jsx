import React, { Component } from 'react';
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";

export default class FormRCC extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "IBI Kesatuan",
            subTitle: "Bogor Indonesia"
        };
    }

    render() {
        return (
            <SafeAreaView>
                <View style={{flex: 1, flexDirection: "row", marginTop: 20, justifyContent: "center", alignItems: "center"}}>
                    <Image source={require("../assets/Logo-IBIK-2022.png")} style={{width: 50, height: 50, marginRight: 10}} />
                    <View>
                        <Text style={{fontSize: 25, color: "purple", fontWeight: "bold"}}>{this.state.title}</Text>
                        <Text style={{fontSize: 25, color: "purple", fontWeight: "bold"}}>{this.state.subTitle}</Text>
                    </View>
                </View>

                <View style={{marginHorizontal: 40, marginTop: 20}}>
                    <Text style={{fontSize: 16, color: "black", fontWeight: "200"}}>Change Title</Text>

                    <View style={{marginTop: 10}}>
                        <Text>Title</Text>
                        <TextInput
                            placeholder='Input Title disini'
                            defaultValue={this.state.title}
                            onChangeText={(text) => this.setState({title : text})}
                            style={{ borderBottomColor:"black", borderBottomWidth: 2 }}
                        />
                    </View>

                    <View style={{marginTop: 10}}>
                        <Text>SubTitle</Text>
                        <TextInput
                            placeholder='Input subtitle disini' 
                            defaultValue={this.state.subTitle}
                            onChangeText={(text) => this.setState({subTitle : text})}
                            style={{ borderBottomColor:"black", borderBottomWidth: 2 }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
