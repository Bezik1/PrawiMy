import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import Boxes from "../Boxes"
import './index.css'

const SocialsCanvas = () =>{
    const [isPointer, setPointer] = useState(false)

    return (
        <div className={`social-canvas-container ${isPointer ? 'active' : ''}`}>
            <Canvas frameloop="demand">
                <ambientLight intensity={1.2}/>
                <Suspense>
                    <Boxes setPointer={setPointer}/>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default SocialsCanvas