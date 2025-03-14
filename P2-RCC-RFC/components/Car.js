import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merk: 'Toyota',
      types: {
        type: 'Malik',
        model: 'Calya ADS',
      },
    };
  }

  Come2Go(value) {
    return (
      <View>
        <Text>Running away</Text>
        <Text>with {value}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text>Hi, I'm a car</Text>
        <Text>Merk: {this.state.merk}</Text>
        <Text>Type: {this.state.types.type}</Text>
        <Text>Model: {this.state.types.model}</Text>
        {this.Come2Go(21000)}
      </View>
    );
  }
}
