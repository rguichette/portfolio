import { Box, Html, Plane, Text3D } from "@react-three/drei";
import { MeshProps, Vector3, useThree } from "@react-three/fiber";
import { forwardRef, useEffect } from "react";
import * as THREE from "three";
type MProps = MeshProps & { Mcolor?: string };

let Projects: React.FC<MProps> = forwardRef((props, ref) => {
  let th = useThree();
  let character: THREE.Mesh | null = null;
  useEffect(() => {
    character = th.scene.getObjectByName("character") as THREE.Mesh;

    // console.log(th.scene.getObjectByName("character"));
  });

  // let fl = new FontLoader()
  return (
    <>
      <mesh {...props}>
        {/* <Plane args={[2, 2, 2, 2]} position={[1, 1, 1]} /> */}
        {/* <Box>
          <meshBasicMaterial side={THREE.DoubleSide} />
        </Box> */}
        <Html
          scale={0.1}
          as="div"
          center
          occlude="blending"
          transform
          rotation={[0, -Math.PI / 2 + 0.7, 0]}
          position={[-4, 2.4, -4]}
        >
          {/* <div style={{ backgroundColor: "red" }}>hello</div> */}

          <img src="/webAssets/Listings.png" />
        </Html>
        <Html
          scale={0.1}
          as="div"
          center
          occlude="blending"
          transform
          rotation={[0, -Math.PI / 2 + 0.7, 0]}
          position={[-4, 2.4, -6.5]}
        >
          {/* <div style={{ backgroundColor: "red" }}>hello</div> */}

          <img src="/webAssets/RidAccount.png" />
        </Html>

        <Html
          scale={0.1}
          as="div"
          center
          occlude="blending"
          transform
          rotation={[0, -Math.PI / 2 + 0.7, 0]}
          position={[2, 2.4, -6.5]}
        >
          {/* <div style={{ backgroundColor: "red" }}>hello</div> */}

          <img src="/webAssets/RidPhotos.png" />
        </Html>

        <Html
          scale={0.1}
          as="div"
          center
          occlude="blending"
          transform
          rotation={[0, -Math.PI / 2 + 0.7, 0]}
          position={[-0.5, 2.4, -9.5]}
        >
          {/* <div style={{ backgroundColor: "red" }}>hello</div> */}

          <img src="/webAssets/RidPost.png" />
        </Html>

        <Html
          scale={0.5}
          as="div"
          center
          occlude="blending"
          transform
          rotation={[0, -Math.PI / 2, 0]}
          position={[0, 3, 3]}
        >
          {/* <div style={{ backgroundColor: "red" }}>hello</div> */}

          <img src="/webAssets/dashboard.png" />
        </Html>
        <Html
          scale={0.5}
          as="div"
          center
          occlude="blending"
          transform
          rotation={[0, -Math.PI / 2 - 0.9, 0]}
          position={[-5, 3, 20]}
        >
          {/* <div style={{ backgroundColor: "red" }}>hello</div> */}

          <img src="/webAssets/breath.png" />
        </Html>
        <Html
          scale={0.5}
          as="div"
          center
          occlude="blending"
          transform
          rotation={[0, -Math.PI / 2 - 0.9, 0]}
          position={[5, 3, 20]}
        >
          <img src="/webAssets/Kel.png" />
        </Html>

        {/* <meshBasicMaterial side={THREE.DoubleSide} /> */}
      </mesh>
    </>
  );
});

export default Projects;
