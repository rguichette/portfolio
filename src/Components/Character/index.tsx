import { MeshProps } from "@react-three/fiber";
import { forwardRef, useEffect, useRef } from "react";
import { Group, Mesh } from "three";
import CharacterController, { co } from "../CharacterController";
import { KeyboardControls } from "@react-three/drei";

let Character: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>(
  (props, ref) => {
    let charRef = useRef<Group>(null!);

    useEffect(() => {
      // console.log("CHARREF", charRef.current?.position);
    });
    return (
      <>
        <group ref={charRef}>
          <mesh ref={ref} {...props}>
            <boxGeometry attach={"geometry"} />
            <meshBasicMaterial color={"yellow"} />
          </mesh>
        </group>
        <KeyboardControls map={co}>
          <CharacterController obj={charRef} />
        </KeyboardControls>
      </>
    );
  }
);

export default Character;
