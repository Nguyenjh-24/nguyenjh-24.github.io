import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignFourteen(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_de7bc8dd-0dc1-44f3-b8d7-eac12f47ac56.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_de7bc8dd-0dc1-44f3-b8d7-eac12f47ac56'].geometry}
        material={materials['tripo_material_de7bc8dd-0dc1-44f3-b8d7-eac12f47ac56']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_de7bc8dd-0dc1-44f3-b8d7-eac12f47ac56.glb')
