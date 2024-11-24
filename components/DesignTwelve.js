import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignTwelve(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_b507051a-c775-48e7-a3bf-8ca4478533e3.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_b507051a-c775-48e7-a3bf-8ca4478533e3'].geometry}
        material={materials['tripo_material_b507051a-c775-48e7-a3bf-8ca4478533e3']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_b507051a-c775-48e7-a3bf-8ca4478533e3.glb')
