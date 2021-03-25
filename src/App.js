import { Environment, OrbitControls, softShadows, useCubeTexture, useGLTF, useHelper } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, Noise, SSAO, ToneMapping, Vignette } from "@react-three/postprocessing";
import { Suspense } from "react";
import { Canvas, Renderer, useLoader } from "react-three-fiber";
import Model from "./models/Scene";
import FlightHelmet from "./models/glTF/FlightHelmet";
import { PCFSoftShadowMap } from "three";

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas
                style={{ width: "100%", height: "100%" }}
                gl={{ antialias: true, powerPreference: "high-performance" }}
                shadowMap={PCFSoftShadowMap}
                colorManagement
                camera={{ castShadow: true }}
            >
                <ambientLight intensity={0.2} />
                <directionalLight castShadow position={[5, 5, -5]} intensity={0.8} />
                <directionalLight castShadow position={[-5, -5, 5]} intensity={0.3} />
                <OrbitControls />
                <Suspense fallback={null}>
                    <Model scale={[2, 2, 2]} />
                    {/* <FlightHelmet scale={[8, 8, 8]} position={[0, -3, 0]} /> */}
                </Suspense>
                <EffectComposer>
                    <Noise opacity={0.02} />
                    <Vignette eskil={false} offset={0.2} darkness={1.1} />
                    <SSAO />
                    <ToneMapping />
                </EffectComposer>
            </Canvas>
        </div>
    );
}

export default App;
