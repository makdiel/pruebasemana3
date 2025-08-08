import { View, Text } from 'react-native'
import React from 'react'
import { contextPartida } from '../Provider/PartidasProvider';

export default function ListadoCartas() {

    const {listaPartida} = contextPartida();

  return (
    <View>
      <Text>Resultados</Text>
      {
            listaPartida.map((item)=>(
            <Text key={item.id}>Resultado: {item.resultado}</Text>
        ))
      }
        
    </View>
  )
}