import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignFour(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_3a605723-ff05-4ef8-acbc-7ec298d8af95.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_3a605723-ff05-4ef8-acbc-7ec298d8af95'].geometry}
        material={materials['tripo_material_3a605723-ff05-4ef8-acbc-7ec298d8af95']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_3a605723-ff05-4ef8-acbc-7ec298d8af95.glb')
