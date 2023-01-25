import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './App.style';

export default function App() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Which of these is "the glass"?</Text>
    </View>
  );
};
