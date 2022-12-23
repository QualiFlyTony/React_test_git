import React from 'react'

/*import Article from './components/article/Article'
import Brand from './components/brand/Brand'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'
import Navbar from './components/navbar/Navbar'*/

//import { Article, Brand, Cta } from './components'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import { Cta, Brand, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />

        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
            
    </div>
  )
}

export default App