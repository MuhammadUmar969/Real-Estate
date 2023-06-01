import React from 'react'
import Header from './Component/Header/Header'
import Hero from './Component/Hero'
import './App.css'
import Companies from './Component/Companies'
import Residencies from './Component/Residencies'
import Value from './Component/Value'
import Contact from './Component/Contact'
import GetStarted from './Component/GetStarted'
import Footer from './Component/Footer'

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
         <Contact />
         <GetStarted />
         <Footer />
       </div>
  )
}

export default App
