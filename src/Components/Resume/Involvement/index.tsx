import { Sphere, useGLTF, useTexture } from "@react-three/drei";
import { forwardRef, useRef } from "react";
import Library from "../../Library";
import { Mesh } from "three";
import { GroupProps, useFrame } from "@react-three/fiber";

let Involvement: React.FC<GroupProps> = forwardRef((props, ref) => {
  let earthRef = useRef(null);

  let texture = useTexture("/assets/involvement/earthTexture.jpeg");

  let { scene: resume } = useGLTF("/resumeSheet.glb");

  useFrame(({ clock }) => {
    if (earthRef.current) {
      (earthRef.current as unknown as Mesh).rotation.y =
        clock.elapsedTime * 0.4;
    }
  });

  return (
    <>
      {/* <Text>Involvement</Text> */}
      <group {...props}>
        <Library />
        {/* <pointLight color={"green"} intensity={2} position={[2.8, 0.5, 0]} /> */}

        <Sphere position={[-7, 1, -6]} ref={earthRef} scale={1.5}>
          <meshBasicMaterial map={texture} transparent opacity={0.7} />
        </Sphere>

        <mesh scale={0.2} position={[2, 0.06, 1]} rotation={[0.1, Math.PI, 0]}>
          <primitive object={resume} />
        </mesh>
      </group>
    </>
  );
});

export default Involvement;
