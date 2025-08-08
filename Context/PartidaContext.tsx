import { createContext } from "react";
import { Partida } from "../Modelos/Partidas";


export const partidaContext = createContext({
    listaPartida: [] as Partida[],
    agregarPartidas: (partida:Partida)=>{}
})