import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignTwo(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_1eda3c27-d568-4e77-b7fe-d8cb7f3390bb.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_1eda3c27-d568-4e77-b7fe-d8cb7f3390bb'].geometry}
        material={materials['tripo_material_1eda3c27-d568-4e77-b7fe-d8cb7f3390bb']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_1eda3c27-d568-4e77-b7fe-d8cb7f3390bb.glb')