import { useTexture } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useState } from "react"
import { SOCIALS_LINKS } from "../../constans"
import { Group, Texture, Vector3 } from "three"
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing"
import { useResize } from "../../hooks/useResize"

const { FACEBOOK_LINK, TIKTOK_LINK, INSTAGRAM_LINK } = SOCIALS_LINKS

const Boxes = ({ setPointer} : { setPointer: React.Dispatch<React.SetStateAction<boolean>> }) =>{
    const ifWidth = useResize()
    const groupRef = useRef<Group>(null!)

    const fbMap = useTexture('images/fb-logo.png')
    const igMap = useTexture('images/ig-logo.webp')
    const tiktokMap = useTexture('images/tiktok-logo.png')

    const { camera } = useThree()
    camera.position.z = 8.4
    camera.position.y = 1.5
    
    useFrame(() =>{
        ifWidth && (groupRef.current.rotation.y += 0.01)
    })

    return (
        <EffectComposer>
            <group ref={groupRef} position={[-0.25, -0.5, 0]}>
                <Bloom
                    luminanceThreshold={0.3}
                    luminanceSmoothing={0.7}
                    height={400}
                opacity={0.5}
                />
                <SocialsBox 
                    textureMap={fbMap} 
                    pos={new Vector3(0, -1, 0)}
                    setPointer={setPointer}
                    link={FACEBOOK_LINK}
                />
                <SocialsBox 
                    textureMap={igMap} 
                    pos={new Vector3(0, 2.2, 0)} 
                    setPointer={setPointer}
                    link={INSTAGRAM_LINK}
                />
                <SocialsBox 
                    textureMap={tiktokMap} 
                    pos={new Vector3(0, 5.5, 0)} 
                    setPointer={setPointer}
                    link={TIKTOK_LINK}
                />
            </group>
            <Noise opacity={0.01} />
        </EffectComposer>
    )
}

const SocialsBox = ({ 
    textureMap, 
    pos, 
    link,
    setPointer 
    } : { 
        textureMap: Texture, 
        pos: Vector3, link?: string, 
        setPointer: React.Dispatch<React.SetStateAction<boolean>>
    }) =>{
    const [hover, setHover] = useState(false)

    const handleClick = () =>{
        window.open(link, '_blank')
    }

    const handlePointerOver = () =>{
        setHover(true)
        setPointer(true)
    }

    const handlePointerOut = () =>{
        setHover(false)
        setPointer(false)
    }

    const calculatePosition = () =>{
        if(hover) {
            switch(link) {
                case INSTAGRAM_LINK:
                    return new Vector3(pos.x, pos.y+0.1, pos.z)
                case FACEBOOK_LINK:
                    return new Vector3(pos.x, pos.y-0.2, pos.z)
                case TIKTOK_LINK:
                    return  new Vector3(pos.x, pos.y+0.2, pos.z)
                default:
                    return pos
            }
        } else {
            return pos
        }
    }

    return (
        <mesh 
            position={calculatePosition()} 
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={handleClick}
        >
            <boxGeometry args={[3, 3, 3, 40, 40, 40]}/>
            <meshStandardMaterial map={textureMap} /* wireframe={!hover} */ />
        </mesh>
    )
}

export default Boxes