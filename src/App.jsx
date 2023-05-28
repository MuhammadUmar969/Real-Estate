import React from 'react'
import Header from './Component/Header/Header'
import Hero from './Component/Hero'
import './App.css'
import Companies from './Component/Companies'
import Residencies from './Component/Residencies'
import Value from './Component/Value'

const App = () => {
  return (  
       <div className="App">
         <div>
           <div className="white-gradient" />
             <Header />
             <Hero />
         </div>
         <Companies />
         <Residencies />
         <Value />
       </div>
  )
}

export default App
