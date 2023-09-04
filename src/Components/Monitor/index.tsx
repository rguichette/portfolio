import { Box, Plane, useVideoTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { forwardRef, useEffect, useRef } from "react";
import * as THREE from "three";
import { DoubleSide, Mesh, MeshBasicMaterial } from "three";

type VideoTextureProps = {
  unsuspend?: "canplay" | "canplaythrough" | "loadedmetadata";
  muted?: boolean;
  loop?: boolean;
  start?: boolean;
  crossOrigin?: string;
};

export type MonitorProps = MeshProps & {
  vidSrc?: string;
  vidOptions?: VideoTextureProps;
};

let Monitor: React.FC<MonitorProps> = forwardRef<Mesh, MonitorProps>(
  (props, ref) => {
    let tvTexture: THREE.VideoTexture;
    let tvRef = useRef<Mesh>(null!);

    if (props.vidSrc) {
      console.log("Monitor: Reloading...", props.vidOptions);

      tvTexture = useVideoTexture(props.vidSrc, props.vidOptions);
    }

    useEffect(() => {
      if (props.vidSrc && tvRef.current) {
        console.log("Monitor: Running effects again");
        (tvRef.current.material as MeshBasicMaterial).transparent = true;
        (tvRef.current.material as MeshBasicMaterial).map = tvTexture;
      }
    }, [props.vidOptions]);

    return (
      <mesh {...props} ref={ref}>
        <Plane
          name="monitorScreen"
          scale={[16, 9, 1]}
          position={[0, 0, 0.22]}
          ref={tvRef}
        ></Plane>

        <Box
          name="MonitorBack"
          scale={[16.4, 9.4, 0.15]}
          rotation={[0, -Math.PI, 0]}
          position={[0, 0, 0.138]}
        >
          <meshStandardMaterial side={DoubleSide} color={"silver"} />
        </Box>
      </mesh>
    );
  }
);

export default Monitor;
