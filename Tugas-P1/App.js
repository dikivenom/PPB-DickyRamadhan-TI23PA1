import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TugasSatu from './components/Tugas1';

export default function App() {
  return (
    <View style={styles.container}>
    <Text>Hello!</Text>
    <TugasSatu/>
      <StatusBar styleq="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
