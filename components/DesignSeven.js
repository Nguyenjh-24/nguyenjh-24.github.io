
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignSeven(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_9b8e9af9-03cd-47fb-9d4a-1beb0bfeccc7.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_9b8e9af9-03cd-47fb-9d4a-1beb0bfeccc7'].geometry}
        material={materials['tripo_material_9b8e9af9-03cd-47fb-9d4a-1beb0bfeccc7']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_9b8e9af9-03cd-47fb-9d4a-1beb0bfeccc7.glb')
