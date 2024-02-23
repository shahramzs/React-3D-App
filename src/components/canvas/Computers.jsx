import React, {Suspense, useEffect, useState} from 'react';
import { Canvas  } from '@react-three/fiber';
import { OrbitControls,Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
    const { scene } = useGLTF('./cargo/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={10}
            groundColor="black"/>
            <pointLight intensity={5}/>
            <spotLight 
               position={[-20, 50,10]}
               angle={0.12}
               penumbra={1}
               intensity={1}
               castShadow
               shadow-mapSize={1024}/>
               <spotLight 
               position={[0, 0, ]}
               angle={0.14}
               penumbra={6}
               intensity={10}
               castShadow
               shadow-mapSize={1024}/>
            <primitive 
               object={scene}
               scale={isMobile ? 0.0005 : 0.001}
               position={isMobile ? [0, -3, -3.5] : [0, 0.5, -7]}
               rotation={[0, 0, 0]}
               />
        </mesh>
    )
}


const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaQuaryChange = (e) => {
            setIsMobile(e.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQuaryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQuaryChange)
        }
    },[])

    return (
        <Canvas frameloop='demand' 
                shadows='variance' 
                camera={{position:[20, 3, 5], fov:25}}
                gl={{preserveDrawingBuffer:true}}
                legacy={true}>
                <Suspense fallback={<CanvasLoader/>}>
                    <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI/2}
                    minPolarAngle={Math.PI/2}/> 
                    <Computers isMobile={isMobile}/>
                </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default ComputersCanvas;