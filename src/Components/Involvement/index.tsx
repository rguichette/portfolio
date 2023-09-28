import { Box, Text3D, useGLTF } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";
import { Mesh } from "three";
import Portal from "../portal";

import * as THREE from "three";

// import entrance from "../../3Dassets/entrance.glb";

type MProps = MeshProps & { Mcolor?: string };

let Involvement: React.FC<MProps> = forwardRef((props, ref) => {
  // let fl = new FontLoader()
  let speechRef = useRef<Mesh>(null!);

  //src/3Dassets/entrance2.glb

  let ent = useGLTF("../../3Dassets/entrance2.glb");
  let { scene: lang } = useGLTF("../../3Dassets/translate.glb");

  useFrame(({ clock }) => {
    if (speechRef) {
      speechRef.current.position.y =
        (Math.sin(clock.elapsedTime * 1.2) + 5.5) * 0.3;
    }
  });

  return (
    <>
      <mesh {...props}>
        <mesh scale={4.3} position={[0, -0.5, 0]}>
          <primitive object={ent.scene} />
        </mesh>
        {/* <Portal lightColor={new THREE.Color("white")} /> */}

        <mesh
          scale={0.02125}
          position={[8, 1.25, 2]}
          rotation={[Math.PI / 2, 0, Math.PI / 2 - 1]}
          name="speech"
          ref={speechRef}
        >
          <primitive object={lang} />
        </mesh>
        <Box>
          <meshBasicMaterial color={props.Mcolor} />
        </Box>
      </mesh>
    </>
  );
});

export default Involvement;
