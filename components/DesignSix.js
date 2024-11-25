import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignSix(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_9a9ddefc-8385-41d7-861c-784b28320e50.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_9a9ddefc-8385-41d7-861c-784b28320e50'].geometry}
        material={materials['tripo_material_9a9ddefc-8385-41d7-861c-784b28320e50']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_9a9ddefc-8385-41d7-861c-784b28320e50.glb')
