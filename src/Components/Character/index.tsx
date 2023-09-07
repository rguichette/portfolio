import { MeshProps } from "@react-three/fiber";
import { forwardRef } from "react";
import { Mesh } from "three";

let Character: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>(
  (props, ref) => {
    return (
      <>
        <mesh ref={ref} {...props}>
          <boxGeometry attach={"geometry"} />
        </mesh>
      </>
    );
  }
);

export default Character;
