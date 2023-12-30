import { Sphere, Text, useTexture } from "@react-three/drei";
import { forwardRef, useRef } from "react";
import Library from "../../BuildingComponents/Library";
import { texture } from "three/examples/jsm/nodes/Nodes.js";
import { Mesh } from "three";
import { GroupProps, useFrame } from "@react-three/fiber";

let Involvement: React.FC<GroupProps> = forwardRef((props, ref) => {
  let earthRef = useRef(null);

  //   useEffect(()=>{
  // if (earthRef.current){
  // (earthRef.current as Mesh).rotation.y =
  // }
  //   },[])
  let texture = useTexture("/assets/involvement/earthTexture.jpeg");

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

        <Sphere position={[-7, 1, -6]} ref={earthRef} scale={1.5}>
          <meshBasicMaterial map={texture} transparent opacity={0.7} />
        </Sphere>
      </group>
    </>
  );
});

export default Involvement;
