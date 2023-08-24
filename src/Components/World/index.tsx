import { Environment, OrbitControls, Plane, useFBX } from "@react-three/drei";

let World = () => {
  let character = useFBX("/PBR.fbx");
  console.log(character);

  return (
    <>
      <ambientLight intensity={1} position={[0, 100, 0]} />
      <Plane scale={500} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
        <meshPhongMaterial reflectivity={0.5} />
        <OrbitControls />
        <Environment
          //   background
          files={"/night-sky.hdr"}
        />
      </Plane>
      <mesh scale={0.05} position={[0, -10.1, 0]}>
        <primitive object={character} />
      </mesh>
    </>
  );
};

export default World;
