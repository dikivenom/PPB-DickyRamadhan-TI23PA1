import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FormRCC from './components/FormRCC';
import FormRFC from './components/FormRFC';
import FormLogin from './components/FormLogin';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <FormRCC/> */}
     {/* <FormRFC/> */}
     <FormLogin/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center"
  },
});
