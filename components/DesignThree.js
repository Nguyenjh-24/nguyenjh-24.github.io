
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignThree(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_2bda23d9-3888-43fe-a3f6-be0b611a3ba9.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_2bda23d9-3888-43fe-a3f6-be0b611a3ba9'].geometry}
        material={materials['tripo_material_2bda23d9-3888-43fe-a3f6-be0b611a3ba9']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_2bda23d9-3888-43fe-a3f6-be0b611a3ba9.glb')