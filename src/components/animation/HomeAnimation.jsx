import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const HomeAnimation = (props) => {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.place_holder} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')

export default HomeAnimation;
