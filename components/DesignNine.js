import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignNine(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_5706b317-0841-4581-bfdf-958fe70875d7.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_5706b317-0841-4581-bfdf-958fe70875d7'].geometry}
        material={materials['tripo_material_5706b317-0841-4581-bfdf-958fe70875d7']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_5706b317-0841-4581-bfdf-958fe70875d7.glb')
