import React from 'react'
import Header from './Component/Header/Header'
import Hero from './Component/Hero'
import './App.css'
import Companies from './Component/Companies'

const App = () => {
  return (  
       <div className="App">
         <div>
           <div className="white-gradient" />
             <Header />
             <Hero />
         </div>
         <Companies />
       </div>
  )
}

export default App
