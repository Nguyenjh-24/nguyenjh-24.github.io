import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignTen(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_a861b251-0cbe-4241-959d-d58426745cf4.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_a861b251-0cbe-4241-959d-d58426745cf4'].geometry}
        material={materials['tripo_material_a861b251-0cbe-4241-959d-d58426745cf4']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_a861b251-0cbe-4241-959d-d58426745cf4.glb')
