//libs
import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import atlasModel from './models/earth.glb';
import { OrbitControls } from '@react-three/drei';
//components
const Scene = () => {
  const gltf = useLoader(GLTFLoader, atlasModel);
  return <primitive object={gltf.scene} scale={[0.7, 0.7, 0.7]} />;

  //test model
  // return (
  //   <mesh>
  //     <boxGeometry />
  //     <meshStandardMaterial color='#fff' />
  //   </mesh>
  // );
};

const Atlas = () => {
  return (
    <div className='atlas-container'>
      <Canvas camera={[10, 0, 5]}>
        <Scene />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Atlas;
