import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

const App = () => {
    return (
        <Canvas
            style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <OrbitControls enableZoom enablePan enableRotate/>

            <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
        </Canvas>
    );
}

export default App;