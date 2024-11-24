import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesignEight(props) {
  const { nodes, materials } = useGLTF('/tripo_pbr_model_281b0dd9-76c3-457f-83c2-cc0c8158c622.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_281b0dd9-76c3-457f-83c2-cc0c8158c622'].geometry}
        material={materials['tripo_material_281b0dd9-76c3-457f-83c2-cc0c8158c622']}
      />
    </group>
  )
}

useGLTF.preload('/tripo_pbr_model_281b0dd9-76c3-457f-83c2-cc0c8158c622.glb')
