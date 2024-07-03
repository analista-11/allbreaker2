import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelPremio(props) {
    const { nodes, materials } = useGLTF('/modelPremio.gltf')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
                <mesh geometry={nodes.defaultMaterial.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} />
            </group>
        </group>
    )
}

useGLTF.preload('/modelPremio.gltf')
export default ModelPremio;
