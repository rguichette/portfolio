import { Box, Text3D } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { forwardRef } from "react";

type MProps = MeshProps & { Mcolor?: string };

let Experience: React.FC<MProps> = forwardRef((props, ref) => {
  // let fl = new FontLoader()
  return (
    <>
      <mesh {...props}>
        <Box>
          <meshBasicMaterial color={props.Mcolor} />
        </Box>
      </mesh>
    </>
  );
});

export default Experience;
