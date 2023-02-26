import './App.css'
import { useState } from "react"
import About from './components/About'
import Scene from './components/Scene'
import { ViewContextProvider } from './contexts/ViewContext'
import Info from './components/Info'

const App = () =>{
  const [mousePos, setMousePos] = useState<[number, number]>([0, 0])
  const [isView, setView] = useState<boolean>(false)

  return (
      <div className="App" onMouseMove={e => setMousePos([e.clientX, e.clientY])}>
          <ViewContextProvider isView={isView} setView={setView} mousePos={mousePos}>
            <div className='about-scene'>
              <Scene />
              <About />
            </div> 
         </ViewContextProvider>
        <Info />
        <div style={{ marginTop: 100 }} />
      </div>
  )
}

export default App
