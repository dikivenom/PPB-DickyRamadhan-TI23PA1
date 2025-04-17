import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileRFC from './components/ProfileRFC';
import ProfileRCC from './components/ProfileRCC';
import FormSederhana from './components/FormSederhana';
import UbahWarna from './components/UbahWarna';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <ProfileRFC /> //Quiz Soal No 1
      <ProfileRCC /> */}

      {/* <FormSederhana /> Quiz Soal No 2 */} 
      <UbahWarna/>
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
