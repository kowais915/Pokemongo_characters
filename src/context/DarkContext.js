import {createContext } from 'react';


import { useReducer } from 'react';

export const ThemeToggler = createContext();


// this function is called via dispatched.
function darkReducer(state, action){
    switch(action.type){
        case 'CHANGE_COLOR':
            return {...state, color: action.payload}
        case 'CHANGE_BG':
            return {...state, background: action.payload}
        default:
            return state;
    }

}

export function DarkContext({children}){
const [state, dispatch] = useReducer(darkReducer, {
    color: 'red', 
    background: 'white'
})   

const changeColor = (color)=>{
    dispatch({type: 'CHANGE_COLOR', payload: color})
}

const changeBg = (bg)=>{
    dispatch({type: 'CHANGE_BG', payload: bg})
}

    return(
        <ThemeToggler.Provider value={{...state, changeColor, changeBg}}>

            {children}

        </ThemeToggler.Provider>
    )
}