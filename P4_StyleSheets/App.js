import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ItemTyphograph from './components/ItemTyphograph';
import ItemImage from './components/ItemImage';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ItemTyphograph />
      <ItemImage />
  
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
