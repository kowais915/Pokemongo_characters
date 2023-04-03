import {useContext } from 'react';
import {ThemeToggler } from '../context/DarkContext';

export function useDark(){
    const context = useContext(ThemeToggler);
    return context;
}