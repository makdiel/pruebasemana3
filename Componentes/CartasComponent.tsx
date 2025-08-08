import { View, Text, TextInput, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { contextPartida } from '../Provider/PartidasProvider';
import { Partida } from '../Modelos/Partidas';

export default function CartasComponent() {
const {listaPartida,agregarPartidas} = contextPartida(); 
const [resultado,setResultado] = useState<string>('')
const [juegoIniciado,SetJuegoIniciado] = useState(false)

function Iniciar(){
    SetJuegoIniciado(true)
}

function PresionaA1(){

}
function PresionaA2(){
    
}
function PresionaA3(){
    
}
function PresionaA4(){
    
}
function PresionaB1(){
    
}

function PresionaB2(){
    
}

function PresionaB3(){
    
}

function PresionaB4(){
    
}

function agregarPartidasInvidual(){
    let partida: Partida={
        id:Date.now(),
        resultado:resultado
    }
    agregarPartidas(partida);
}

useEffect(()=>{
    console.log(listaPartida)},[listaPartida]
)

  return (
    <View>
      <Text>Juego de Cartas</Text>
     
      { !juegoIniciado? (
         <Button title='INICIAR' onPress={(Iniciar)}></Button>
      ) : (
        
        <><Button title=' A1 ' onPress={(PresionaA1)}></Button>
          <Button title=' A2 ' onPress={(PresionaA2)}></Button>
          <Button title=' A3 ' onPress={(PresionaA3)}></Button>
          <Button title=' A4 ' onPress={(PresionaA4)}></Button>
         
        <Button title=' B1 ' onPress={(PresionaB1)}></Button>
          <Button title=' B2 ' onPress={(PresionaB2)}></Button>
          <Button title=' B3 ' onPress={(PresionaB3)}></Button>
          <Button title=' B4 ' onPress={(PresionaB4)}></Button>
         
         </>
      )}
    </View>
  )
}