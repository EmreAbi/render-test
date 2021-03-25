/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import scene from "./scene.glb";

export default function Model({ ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF(scene);
    console.log(nodes);
    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[0, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]}>
                <group position={[0, 0.35, 0]}>
                    <mesh
                        material={materials["05 - Default233"]}
                        geometry={nodes.Box003.geometry}
                        position={[0.21, 0.27, 0.13]}
                        rotation={[Math.PI / 2, 0, Math.PI]}
                    />
                    <mesh
                        material={materials["05 - Default233"]}
                        geometry={nodes.Box001.geometry}
                        position={[0.29, 0.24, 0]}
                        rotation={[-Math.PI, 0, 2.71]}
                    />
                    <mesh
                        material={materials["05 - Default233"]}
                        geometry={nodes.Box002.geometry}
                        position={[-0.25, 0.18, 0.13]}
                        rotation={[Math.PI / 2, 0, Math.PI]}
                    />
                </group>
                <group position={[-0.21, 0.34, 0.14]}>
                    <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh material={materials["06 - Default23"]} geometry={nodes.mesh_24.geometry} />
                        <mesh material={materials.cark2} geometry={nodes.mesh_24_1.geometry} />
                        <mesh material={materials.carkic} geometry={nodes.mesh_24_2.geometry} />
                    </group>
                    <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh material={materials["06 - Default23"]} geometry={nodes.mesh_25.geometry} />
                        <mesh material={materials.carkic} geometry={nodes.mesh_25_1.geometry} />
                    </group>
                    <mesh
                        material={materials["06 - Default23"]}
                        geometry={nodes.Circle008.geometry}
                        position={[0, 0, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        material={materials["06 - Default23"]}
                        geometry={nodes.Circle009.geometry}
                        position={[0, 0, -0.01]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                </group>
                <group position={[-0.24, 0.49, 0.14]}>
                    <group position={[0, 0, 0.01]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh material={materials["06 - Default23"]} geometry={nodes.mesh_28.geometry} />
                        <mesh material={materials["11 - Default"]} geometry={nodes.mesh_28_1.geometry} />
                    </group>
                    <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI]}>
                        <mesh material={materials["06 - Default23"]} geometry={nodes.mesh_29.geometry} />
                        <mesh material={materials.carkic} geometry={nodes.mesh_29_1.geometry} />
                    </group>
                    <mesh
                        material={materials["06 - Default23"]}
                        geometry={nodes.Circle005.geometry}
                        position={[0, 0, 0]}
                        rotation={[Math.PI / 2, 0, Math.PI]}
                    />
                    <mesh
                        material={materials["06 - Default23"]}
                        geometry={nodes.Circle006.geometry}
                        position={[0, 0, 0]}
                        rotation={[Math.PI / 2, 0, Math.PI]}
                    />
                </group>
                <mesh
                    material={materials.mavi}
                    geometry={nodes.Shape003.geometry}
                    position={[0.01, 0.79, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.07, 1.07, 1.07]}
                />
                <group position={[-0.14, 0.29, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh material={materials["06 - Default23"]} geometry={nodes.mesh_1.geometry} />
                    <mesh material={materials.carkic} geometry={nodes.mesh_1_1.geometry} />
                </group>
                <mesh
                    material={materials["05 - Default233"]}
                    geometry={nodes.Box004.geometry}
                    position={[0.13, 0.56, 0.13]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                />
                <group position={[-0.14, 0.29, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh material={materials["06 - Default23"]} geometry={nodes.mesh_3.geometry} />
                    <mesh material={materials["11 - Default"]} geometry={nodes.mesh_3_1.geometry} />
                    <mesh material={materials.carkic} geometry={nodes.mesh_3_2.geometry} />
                </group>
                <mesh
                    material={materials["06 - Default23"]}
                    geometry={nodes.Circle013.geometry}
                    position={[-0.14, 0.29, 0.13]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    material={materials["06 - Default23"]}
                    geometry={nodes.Circle014.geometry}
                    position={[-0.14, 0.29, 0.13]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    material={materials["01 - Default"]}
                    geometry={nodes.Rectangle001.geometry}
                    position={[0, 0.29, -0.01]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    material={materials.mavi}
                    geometry={nodes.Line011.geometry}
                    position={[0.09, 0.71, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.07, 1.07, 1.07]}
                />
                <mesh
                    material={materials.beyaz}
                    geometry={nodes.Line013.geometry}
                    position={[0.03, 0.53, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.07, 1.07, 1.07]}
                />
                <mesh
                    material={materials.mavi}
                    geometry={nodes.Line031.geometry}
                    position={[0.09, 0.71, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.07, 1.07, 1.07]}
                />
                <mesh
                    material={materials.k1rm1z1}
                    geometry={nodes.Line029.geometry}
                    position={[0.03, 0.53, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.07, 1.07, 1.07]}
                />
                <mesh
                    material={materials["02 - Default"]}
                    geometry={nodes.Line030.geometry}
                    position={[-0.01, 0.45, 0]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.07, 1.07, 1.07]}
                />
                <mesh
                    material={materials.k1rm1z1}
                    geometry={nodes.Line028.geometry}
                    position={[-0.08, 0.86, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.07, 1.07, 1.07]}
                />
                <mesh
                    material={materials["05 - Default"]}
                    geometry={nodes.Line002.geometry}
                    position={[0.03, 0.32, 0.13]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                />
                <mesh
                    material={materials["05 - Default34"]}
                    geometry={nodes.Line001.geometry}
                    position={[0.03, 0.32, -0.12]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                />
                <mesh
                    material={materials.mavi}
                    geometry={nodes.Line007.geometry}
                    position={[-0.01, 0.45, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.07, 1.07, 1.07]}
                />
                <mesh
                    material={materials["06 - Default"]}
                    geometry={nodes.Shape001.geometry}
                    position={[0.01, 0.79, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.07, 1.07, 1.07]}
                />
                <mesh
                    material={materials.beyaz}
                    geometry={nodes.Shape002.geometry}
                    position={[0, 0.79, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.45, 1.07, 1.45]}
                />
                <mesh
                    material={materials.mavi}
                    geometry={nodes.Shape004.geometry}
                    position={[0.01, 0.79, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.07, 1.07, 1.07]}
                />
                <mesh
                    material={materials.k1rm1z1}
                    geometry={nodes.Shape005.geometry}
                    position={[0, 0.79, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.45, 1.07, 1.45]}
                />
                <mesh
                    material={materials.mavi}
                    geometry={nodes.Circle021.geometry}
                    position={[0, 0.79, -0.01]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.07, 1.07, 1.07]}
                />
                <mesh geometry={nodes.Box005.geometry} position={[0, -0.94, 0]}>
                    <meshPhysicalMaterial metalness={0.7} roughness={0.2} color={"#121624"} />
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload("/scene.glb");