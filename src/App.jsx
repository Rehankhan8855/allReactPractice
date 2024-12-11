import { useState } from 'react'
import './App.css'
import ConditionalRendering from './components/ConditionalRendering'
import HandlingForm from './components/HandlingForm'
import Todo from './components/Todo'
import EvenOdd from './components/EvenOdd'
import PalindromeChecker from './components/PalindromeChecker'
import CharacterCounter from './components/CharacterCounter'
import RandomNumber from './components/RandomNumber'
import AddMultiple from './components/AddMultiple'
import ColorChanger from './components/ColorChanger'
import FilterList from './components/FilterList'
import SortList from './components/SortList'
import ApiDataFetching from './components/ApiDataFetching'

function App() {
  

  return (
    <>
    <ConditionalRendering />
    <HandlingForm />
    <Todo />
    <EvenOdd />
    <PalindromeChecker />
    <CharacterCounter />
    <RandomNumber />
    <AddMultiple />
    <ColorChanger />
    <FilterList />
    <SortList />
    <ApiDataFetching />
    </>
  )
}

export default App
