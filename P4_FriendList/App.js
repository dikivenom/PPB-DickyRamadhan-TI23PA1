import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyFriends from './src/components/friends/MyFriend';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyFriends />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
