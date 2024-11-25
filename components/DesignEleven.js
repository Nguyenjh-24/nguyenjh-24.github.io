import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignEleven(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_a2221265-5992-46e5-8912-ad5038c4914c.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_a2221265-5992-46e5-8912-ad5038c4914c'].geometry}
        material={materials['tripo_material_a2221265-5992-46e5-8912-ad5038c4914c']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_a2221265-5992-46e5-8912-ad5038c4914c.glb')
