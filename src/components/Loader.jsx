import {Html, useProgress} from '@react-three/drei'

const Loaders = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <span className='canvas-load'></span>
                <p style={{fontSize:20, color:'#f1f1f1', fontWeight: 800, marginTop:50}}>
                    {progress.toFixed(2)}%
                </p>
        </Html>
    )
}

export default Loaders;