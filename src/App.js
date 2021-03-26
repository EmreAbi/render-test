import { OrbitControls, useHelper, Plane, softShadows } from "@react-three/drei";
import { Bloom, Noise, SSAO, ToneMapping, Vignette, EffectComposer as Ef } from "@react-three/postprocessing";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, extend, useFrame, useLoader, useResource, useThree } from "react-three-fiber";
import FlightHelmet from "./models/glTF/FlightHelmet";
import {
    ACESFilmicToneMapping,
    Color,
    DirectionalLightHelper,
    DoubleSide,
    PCFSoftShadowMap,
    SpotLightHelper,
    Vector2,
    Vector3,
} from "three";
import EserGLTF from "./models/newEser/eser.glb";
import LightBulbsGLTF from "./models/lightBulbs/lightbulbs.glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
extend({ EffectComposer, RenderPass, UnrealBloomPass });

function LightBulbs({ ...props }) {
    const gltf = useLoader(GLTFLoader, LightBulbsGLTF);
    const materials = gltf.materials;
    Object.values(materials).forEach((mat) => {
        if (mat.name.startsWith("1_1k")) {
            mat.color = new Color(1, 1, 1);
            mat.emissive = new Color(1, 1, 1);
            mat.emissiveIntensity = 10;
            mat.roughness = 1;
            mat.metalness = 1;
        }
    });
    return <primitive {...props} object={gltf.scene} dispose={null} />;
}

function EserPrimitive({ ...props }) {
    const gltf = useLoader(GLTFLoader, EserGLTF);
    const scene = gltf.scene;
    const materials = gltf.materials;
    const nodes = gltf.nodes;
    Object.values(nodes).forEach((node) => {
        node.castShadow = true;
        node.receiveShadow = true;
    });
    Object.values(materials).forEach((mat) => {
        console.log(mat.name);
        if (mat.name.startsWith("cam")) {
            mat.opacity = 0.3;
        }

        if (mat.name.startsWith("k")) {
            mat.color = new Color("#c70000");
        }

        if (mat.name.startsWith("1_1k")) {
            mat.color = new Color(1, 1, 1);
            mat.emissive = new Color(1, 1, 1);
            mat.emissiveIntensity = 10;
            mat.roughness = 1;
            mat.metalness = 1;
        }

        if (mat.name.startsWith("totem")) {
            mat.color = new Color("#1f1a1b");
            mat.roughness = 1;
            mat.metalness = 1;
        }
    });

    if (scene) {
        Object.values(scene.children).forEach((k) => {});
    }
    return <primitive {...props} object={scene} dispose={null} />;
}

function Lights() {
    const spot = useRef();
    const directional1 = useRef();
    const directional2 = useRef();
    const lightGroup = useRef();
    useHelper(spot, SpotLightHelper, "cyan");
    useHelper(directional1, DirectionalLightHelper);
    useHelper(directional2, DirectionalLightHelper);
    return (
        <group ref={lightGroup} rotation-y={Math.PI}>
            <ambientLight color={"#e8cf9b"} intensity={0.9} />
            <directionalLight ref={directional1} position={[4, 4, -1]} intensity={1.6} />
            <directionalLight ref={directional2} castShadow position={[-6, 2, 1]} intensity={3} />
        </group>
    );
}

function Lights2() {
    const spot = useRef();
    const directional1 = useRef();
    const directional2 = useRef();
    const lightGroup = useRef();
    useHelper(spot, SpotLightHelper, "cyan");
    useHelper(directional1, DirectionalLightHelper);
    useHelper(directional2, DirectionalLightHelper);
    return (
        <group ref={lightGroup} rotation-y={Math.PI / 4}>
            <ambientLight color={"#e8cf9b"} intensity={10} />
            <directionalLight ref={directional1} position={[4, 4, -1]} intensity={5} />
            <directionalLight ref={directional2} castShadow position={[-6, 2, 1]} intensity={6} />
        </group>
    );
}

function BloomScene({ children }) {
    const { gl, camera, size } = useThree();
    const ref = useResource();
    const composer = useRef();
    const aspect = useMemo(() => new Vector2(size.width, size.height), [size]);
    useEffect(() => void ref.current && composer.current.setSize(size.width, size.height), [size]);
    useFrame(() => ref.current && composer.current.render(), 1);

    console.log("rend");
    return (
        <>
            <scene ref={ref}>{children}</scene>
            <effectComposer ref={composer} args={[gl]}>
                <renderPass attachArray="passes" scene={ref.current} camera={camera} />
                <unrealBloomPass attachArray="passes" args={[aspect, 1.5, 1, 0]} />
            </effectComposer>
        </>
    );
}

function Ground() {
    return (
        <>
            <mesh receiveShadow position={[0, -3, 0]} scale={[10, 10, 1]} rotation={[Math.PI / 2, 0, 0]}>
                <planeGeometry args={[4, 4, 64]} />
                <meshStandardMaterial side={DoubleSide} color={"#475859"} metalness={0.7} roughness={1} />
            </mesh>
        </>
    );
}

function Effects({ children }) {
    const { gl, camera, size } = useThree();
    const ref = useResource();
    const composer = useRef();
    const aspect = useMemo(() => new Vector2(size.width, size.height), [size]);
    useEffect(() => void ref.current && composer.current.setSize(size.width, size.height), [size]);
    useFrame(() => ref.current && composer.current.render(), 1);
    return (
        <>
            <scene ref={ref}>{children}</scene>
            <effectComposer ref={composer} args={[gl]}>
                <renderPass attachArray="passes" scene={ref.current} camera={camera} />
                <unrealBloomPass attachArray="passes" args={[aspect, 11, 1, 0.1]} />
            </effectComposer>
        </>
    );
}

function Main({ children }) {
    const scene = useRef();
    const { gl, camera } = useThree();
    useFrame(() => void ((gl.autoClear = false), gl.clearDepth(), gl.render(scene.current, camera)), 2);
    return (
        <>
            <scene ref={scene}>{children}</scene>
        </>
    );
}

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Canvas
                style={{ width: "100%", height: "100%" }}
                gl={{ antialias: true, powerPreference: "high-performance" }}
                shadowMap={PCFSoftShadowMap}
                colorManagement
                camera={{ castShadow: true }}
                onCreated={({ gl, scene }) => {
                    gl.toneMapping = ACESFilmicToneMapping;
                    scene.background = new Color("#373737");
                }}
            >
                <OrbitControls />

                <Suspense fallback={null}>
                    <Effects>
                        <Lights2 />
                        <LightBulbs scale={[2, 2, 2]} position={[1.01, -1.125, -0.36]} rotation={[0, Math.PI, 0]} />
                        <LightBulbs scale={[2, 2, 2]} position={[1.01, -1.125, -0.36]} rotation={[0, Math.PI, 0]} />
                        <LightBulbs scale={[2, 2, 2]} position={[1.01, -1.125, -0.36]} rotation={[0, Math.PI, 0]} />
                        <LightBulbs scale={[2, 2, 2]} position={[1.01, -1.125, -0.36]} rotation={[0, Math.PI, 0]} />
                    </Effects>
                    <Main>
                        <Lights />
                        <FlightHelmet scale={[6, 6, 6]} position={[-3, -3, 0]} />
                        <EserPrimitive rotation={[0, Math.PI, 0]} scale={[2, 2, 2]} position={[1, -3, 9]} />
                    </Main>
                </Suspense>
            </Canvas>
        </div>
    );
}

export default App;
