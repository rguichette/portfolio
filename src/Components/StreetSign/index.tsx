import { Box } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import React, { forwardRef } from "react";
import { Mesh } from "three";

type StreetSignProps = MeshProps & {
  title?: string; // Make the title prop optional
};

const StreetSign: React.FC<StreetSignProps> = forwardRef<Mesh, StreetSignProps>(
  ({ title = "Default Title", ...props }, ref) => {
    return (
      <mesh {...props} ref={ref}>
        {title}
        <Box scale={[1, 0.5, 0.1]}>
          <meshStandardMaterial transparent opacity={0.8} />
        </Box>
      </mesh>
    );
  }
);

export default StreetSign;
