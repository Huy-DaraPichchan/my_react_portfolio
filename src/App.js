import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home.js'
import Project from './pages/Project.js'
// import About from './pages/About.js'

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Project />}/>
                {/* <Route path="/about" element={<About />}/> */}
            </Routes>
        </BrowserRouter>
    </div>
  )
}
