import { View, Text } from 'react-native'
import React, { Children, useContext, useState } from 'react'
import { Plantilla } from '../Modelos/Plantilla'
import { partidaContext } from '../Context/PartidaContext'
import { Partida } from '../Modelos/Partidas'

export default function PartidasProvider({children}:Plantilla) {
const [listaPartida,setListaPartida]= useState<Partida[]>([]);

function agregarPartidas(partidaObjeto:Partida){
    setListaPartida([...listaPartida,partidaObjeto])
}

  return (
    <partidaContext.Provider value={{listaPartida,agregarPartidas}}>
        {children}
    </partidaContext.Provider>
  )
}

export function contextPartida(){
    return useContext(partidaContext)
}