import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Model } from "../models/Face"
import { OrbitControls } from "@react-three/drei"
import { useViewContextProvider } from "../../contexts/ViewContext"
import { Vector3 } from "three"

const Scene = () =>{
    const { isView, mousePos } = useViewContextProvider()

    return (
        <div className="canvas-wrapper">
            <Canvas frameloop="demand">
                <Suspense>
                    <Model pos={mousePos} />
                </Suspense>
                {isView ? <OrbitControls target={new Vector3(0, 0, -1.4)} /> : null}
            </Canvas>
        </div>
    )
}

export default Scene