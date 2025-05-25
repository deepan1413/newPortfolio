import React from 'react';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

const Label3D = ({ position = [0, 0, 0], text = "Hello" }) => {
  const ref = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const div = document.createElement('div');
    div.textContent = text;
    div.className = 'label3d';
    div.style.padding = '6px 10px';
    div.style.background = 'rgba(0, 0, 0, 0.7)';
    div.style.color = 'white';
    div.style.borderRadius = '4px';

    const labelObject = new CSS3DObject(div);
    labelObject.position.set(...position);
    ref.current = labelObject;

    scene.add(labelObject);

    return () => {
      scene.remove(labelObject);
    };
  }, [position, text, scene]);

  return null;
};

export default Label3D;
