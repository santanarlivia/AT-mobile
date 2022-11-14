import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/pic_resized.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 145, height: 145}}  />
      <Text style={{color:'#9400D3', top: 24}}> Livia Rodrigues :) </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
