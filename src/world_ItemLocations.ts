import * as THREE from "three"

import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";

let floorPosition = new Vector3(0, -10, 0)


console.log("SCENE", THREE.Scene)




 export default {
    positions: {
            city: {
                floor_position: floorPosition,
                z_back_position: new Vector3(0, floorPosition.y + 150, -250),
                z_front_position: new Vector3(0, floorPosition.y + 150, 250 ),
                x_right_position: new Vector3(-250, floorPosition.y + 150, 0 ),
                x_left_position: new Vector3(270, floorPosition.y + 150, 0 )

            }
    }, 

 } 
