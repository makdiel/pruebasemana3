import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PartidasProvider from './Provider/PartidasProvider';
import CartasComponent from './Componentes/CartasComponent';
import ListadoCartas from './Componentes/ListadoCartas';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Prueba Makdiel, Semana #3!</Text>
      <PartidasProvider>
        <ListadoCartas></ListadoCartas>
        <CartasComponent></CartasComponent>
        
      </PartidasProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});