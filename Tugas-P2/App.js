import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Latihan1 from './components/Latihan1';

import LoadingIBIK from './components/LoadingIBIK';
import ParentTeksGambar from './components/ParentTeksGambar';
import BioRCC from './components/BioRCC';
import BioRFC from './components/BioRFC';

export default function App() {
  return (
    <View style={styles.container}>
   {/* <Latihan1 /> INII SOAL NO 1*/}  
   
    
 {/* <ParentTeksGambar /> INI SOALL NO 2 */}
 
 {/* <LoadingIBIK /> INII SOALL NO 3 */}
 <BioRCC />
 <BioRFC />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});
