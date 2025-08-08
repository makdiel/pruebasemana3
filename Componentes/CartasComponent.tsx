import { View, Text, TextInput, Button, FlatList ,TouchableOpacity, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { contextPartida } from '../Provider/PartidasProvider';
import { Partida } from '../Modelos/Partidas';

export default function CartasComponent() {
const {listaPartida,agregarPartidas} = contextPartida(); 
const [resultado,setResultado] = useState<string>('')
const [juegoIniciado,SetJuegoIniciado] = useState(false)
const [contador, SetContador] = useState(0)
const [comparar, SetComparar] = useState(false)

const [A1,SetJA1] = useState(false)
const [A2,SetJA2] = useState(false)
const [B1,SetJB1] = useState(false)
const [B2,SetJB2] = useState(false)

const [C1,SetJC1] = useState(false)
const [C2,SetJC2] = useState(false)
const [D1,SetJD1] = useState(false)
const [D2,SetJD2] = useState(false)

function Iniciar(){
    SetJuegoIniciado(true)
    SetComparar(false) 
}

function volver(){
    SetJuegoIniciado(false)
     SetComparar(false) 
     SetContador(0)
     SetJA1(false)
     SetJA2(false)
     SetJB1(false)
     SetJB2(false)
     SetJC1(false)
     SetJC2(false)
     SetJD1(false)
     SetJD2(false)
     setResultado('')
}

function PresionaA1(){   
    if (contador <=1 ){
         SetContador(contador + 1) 
         SetJA1(true)
    } else 
        SetComparar(true) 
}

function PresionaA2(){    
    if (contador <=1 ){
         SetContador(contador + 1) 
         SetJA2(true)
    } else 
        SetComparar(true) 
}

function PresionaB1(){  
   if (contador <=1 ){
         SetContador(contador + 1) 
         SetJB1(true)
    } else 
        SetComparar(true) 
}

function PresionaB2(){
    if (contador <=1 ){
         SetContador(contador + 1) 
         SetJB2(true)
    } else 
        SetComparar(true) 
}
function PresionaC1(){
    if (contador <=1 ){
         SetContador(contador + 1) 
         SetJC1(true)
    } else 
        SetComparar(true) 
}

function PresionaC2(){
    if (contador <=1 ){
         SetContador(contador + 1) 
         SetJC2(true)
    } else 
        SetComparar(true) 
}

function PresionaD1(){
    if (contador <=1 ){
         SetContador(contador + 1) 
         SetJD1(true)
    } else 
        SetComparar(true) 
}

function PresionaD2(){
    if (contador <=1 ){
         SetContador(contador + 1) 
         SetJD2(true)
    } else 
        SetComparar(true) 
}

function Comparar(){
    if (A1 == A2 && A1 == true) 
        setResultado("Partida Ganada") 
    else if (B1 == B2 && B1 == true) 
        setResultado("Partida Ganada") 
    else if (C1 == C2 && C1 == true) 
        setResultado("Partida Ganada") 
    else if (D1 == D2 && D1 == true) 
        setResultado("Partida Ganada") 
    else setResultado("Partida Perdida")  

    agregarPartidasInvidual()
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
    <View style={styles.container}>
     
      <Text>Juego de Cartas</Text>
     
      { !juegoIniciado? (
         <Button title='INICIAR' onPress={(Iniciar)}></Button>
      ) : (
        <View style={styles.container}> 
            <View style={styles.row}>
                 { !A1? ( <Button title=' A1 ' onPress={(PresionaA1)}></Button>) :( <Text >   A  </Text>)} 
                        <Text >     </Text>
                 { !A2? (<Button title=' A2 ' onPress={(PresionaA2)}></Button>
                        ):(<Text >   A  </Text>)}                
            </View>
             <View style={styles.row}>
                    { !B1? ( <Button title=' B1 ' onPress={(PresionaB1)}></Button>) :( <Text >   B  </Text>)} 
                        <Text >     </Text>
                    { !B2? (<Button title=' B2 ' onPress={(PresionaB2)}></Button>
                        ):(<Text >   B  </Text>)}
                        
            </View>
             <View style={styles.row}>
                    { !C1? ( <Button title=' C1 ' onPress={(PresionaC1)}></Button>) :( <Text >   C  </Text>)} 
                        <Text >     </Text>
                    { !C2? (<Button title=' C2 ' onPress={(PresionaC2)}></Button>
                        ):(<Text >   C  </Text>)}
                        
            </View>
             <View style={styles.row}>
                    { !D1? ( <Button title=' D1 ' onPress={(PresionaD1)}></Button>) :( <Text >   D  </Text>)} 
                        <Text >     </Text>
                    { !D2? (<Button title=' D2 ' onPress={(PresionaD2)}></Button>
                        ):(<Text >   D  </Text>)}
                        
            </View>
        </View>                       
      )}

    { !comparar? (
        <Text >    </Text>      
     ) : (  <><Button title='COMPARAR' onPress={(Comparar)}></Button>
            <Button title='VOLVER' onPress={(volver)}></Button></>

     )}
    </View>
    
  )
}

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
