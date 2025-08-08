import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PartidasProvider from './Provider/PartidasProvider';
import CartasComponent from './Componentes/CartasComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Prueba Makdiel, Semana #3!</Text>
      <PartidasProvider>
        <CartasComponent></CartasComponent>
      </PartidasProvider>
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
