import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';

const Label = ({ position = [0, 0, 0], text = "Hello" }) => {
  const ref = useRef();

  useEffect(() => {
    const div = document.createElement('div');
    div.className = 'label';
    div.textContent = text;
    div.style.marginTop = '-1em';
    const label = new CSS2DObject(div);
    label.position.set(...position);
    ref.current.add(label);

    return () => {
      ref.current.remove(label);
    };
  }, [position, text]);

  return <primitive object={new THREE.Object3D()} ref={ref} />;
};

export default Label;
