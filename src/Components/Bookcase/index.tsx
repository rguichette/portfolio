import { Instance, Instances, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import {
  BoxGeometry,
  Material,
  MeshLambertMaterial,
  MeshStandardMaterial,
} from "three";
import { GLTF } from "three-stdlib";

interface BookProps extends MeshProps {
  material?: Material;
}

export default function Bookcase({
  material = new MeshStandardMaterial(),
  ...props
}: BookProps) {
  let { nodes } = useGLTF("/3Dassets/bookcase.glb") as GLTF & { nodes: any };

  //   useEffect(() => {
  //     nodes.BookCase.material = new MeshBasicMaterial();
  //     console.log("book", material);
  //   }, [nodes.length]);
  //   //   bookcase.materials = material;

  let colors = [
    "Tan",
    "DarkSeaGreen",
    "LightCyan",
    "RoyalBlue",
    "Goldenrod",
    "LawnGreen",

    "DeepSkyBlue",
  ];

  let count = 1;

  let row = () => {
    return Array.apply(null, Array(20)).map((_, i) => {
      let color = () => colors[Math.floor(Math.random() * colors.length)];
      let j = i - 10;

      if (j >= 0) {
        j += 1;
      }
      return <Instance key={i} position={[0, 0, j]} color={color()} />;
    });
  };

  return (
    <mesh {...props}>
      <RigidBody colliders={false} type="fixed">
        <mesh geometry={nodes.BookCase.geometry} material={material} />
        {/* <Merged meshes={nodes}>
        {({ BookCase }) => {
          return <BookCase material={material} />;
        }}
      </Merged> */}
        <Instances
          scale={[0.2, 0.3, 0.08]}
          args={[new BoxGeometry(), new MeshLambertMaterial(), count]}
        >
          <Instance key={"row_1"} position={[0, 2.4, 0]}>
            {row()}
          </Instance>
          <Instance key={"row_2"} position={[0, 1.2, 0]}>
            {row()}
          </Instance>
          <Instance key={"row_3"} position={[0, 0, 0]}>
            {row()}
          </Instance>
          <Instance key={"row_4"} position={[0, -1.2, 0]}>
            {row()}
          </Instance>
          <Instance key={"row_5"} position={[0, -2.4, 0]}>
            {row()}
          </Instance>
        </Instances>
        <CuboidCollider args={[0.2, 1, 0.9]} />
      </RigidBody>
      {/* <spotLight /> */}
    </mesh>
  );
}

/**
 * 
 * 
 *  {Array.apply(null, Array(count)).map((it, ind) => {
            //   let color =
            //     colors[Math.floor(Math.random() * (colors.length - 1)) + 1];
            let color = () => colors[Math.floor(Math.random() * colors.length)];

            //   console.log("COLOR: ", color);
            return (
              <mesh key={`${Math.random()}`}>
                {Array.apply(null, Array(20)).map((item, i) => {
                  let j = i - 10;

                  if (j >= 0) {
                    j += 1;
                  }

                  // console.log("index", j);
                  return (
                    <>
                      <Instance
                        scale={[1, 1.1, 0.8]}
                        position={[0, 2.42, j]}
                        color={color()}
                        // key={i}
                        
                      />
                      {/* <Instance
                        scale={[1, 1.1, 0.8]}
                        position={[0, 1.22, j]}
                        color={color()}
                        key={Math.random()}
                      />
                      <Instance
                        scale={[1, 1.1, 0.8]}
                        position={[0, -0.2, j]}
                        color={color()}
                        key={Math.random()}
                      />
                      <Instance
                        scale={[1, 1.1, 0.8]}
                        position={[0, -1.32, j]}
                        color={color()}
                        key={Math.random()}
                      />

                      <Instance
                        scale={[1, 1.1, 0.8]}
                        position={[0, -2.72, j]}
                        color={color()}
                        key={Math.random()}
                      /> }
                      </>
                      );
                    })}
                    <Instance position={[0, 1.22, 10]} color={color()} />; 
                  </mesh>
                );
              })}
              <CuboidCollider args={[0.15, 1, 0.85]} key={Math.random()} />
    
               <CuboidCollider args={[1.15, 1, 1.85]} /> 
 */
