//Setup The Data Layer Here
import React,{createContext,useContext,useReducer} from 'react'

//This is The Data Layer
export const StateContext=createContext();

//BUILD A PROVIDER
export const StateProvider=({reducer,initialState,children})=>{
    return <StateContext.Provider value={useReducer(reducer,initialState)}>
     {children}
    </StateContext.Provider>
} 

//This is How we Use Inside a Component
export const useStateValue=()=>useContext(StateContext);