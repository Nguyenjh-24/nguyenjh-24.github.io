import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignThirteen(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_cea02e26-7790-4536-946e-db96653a9d30.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_cea02e26-7790-4536-946e-db96653a9d30'].geometry}
        material={materials['tripo_material_cea02e26-7790-4536-946e-db96653a9d30']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_cea02e26-7790-4536-946e-db96653a9d30.glb')
