import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Car from './components/Car';
import Motorcycle from './components/Motorcycle';
import Bicycle from './components/Bicycle';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pertemuan 2</Text>
      <Car/>
      <Motorcycle/>
      <Bicycle/>
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
