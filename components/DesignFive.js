import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignFive(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_5a28c8be-8aa9-45f9-8b57-ac848a0a6e00.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_5a28c8be-8aa9-45f9-8b57-ac848a0a6e00'].geometry}
        material={materials['tripo_material_5a28c8be-8aa9-45f9-8b57-ac848a0a6e00']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_5a28c8be-8aa9-45f9-8b57-ac848a0a6e00.glb')
