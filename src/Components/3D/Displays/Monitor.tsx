import { Box, Plane } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import THREE from "three";

function Monitor(props: MeshProps, src?: String) {
  let tvBack = useRef();
  let screenRef = useRef();
  let url =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4";

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  //create video el to use as texture

  //   const texture = new THREE.VideoTexture(video);
  useEffect(() => {
    if (tvBack.current && screenRef.current) {
      let tb = tvBack.current as THREE.Mesh;
      let s = screenRef.current as THREE.Mesh;
      //making sure there's alignment
      s.position.x = tb.position.x;
      s.position.y = tb.position.y;
      s.position.z = tb.position.z - 0.0258;
    }
  });

  return (
    <mesh {...props}>
      <Box args={[2, 1, 0.05]} ref={tvBack}>
        <meshPhongMaterial color="blue" shininess={80} reflectivity={0.4} />
      </Box>

      <Plane
        args={[1.976, 0.96, 10]}
        rotation={[0, Math.PI, 0]}
        ref={screenRef}
      >
        <meshStandardMaterial
          color={"white"}
          emissive={"white"}
          emissiveIntensity={0.5}
        >
          <videoTexture args={[video]} />
          <videoTexture args={[video]} />

          {/* <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} /> */}
        </meshStandardMaterial>
      </Plane>
    </mesh>
  );
}

export default Monitor;
