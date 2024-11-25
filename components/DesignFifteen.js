import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignFifteen(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_ea9a6238-d603-47a0-a212-d785f623209d.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_ea9a6238-d603-47a0-a212-d785f623209d'].geometry}
        material={materials['tripo_material_ea9a6238-d603-47a0-a212-d785f623209d']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_ea9a6238-d603-47a0-a212-d785f623209d.glb')
