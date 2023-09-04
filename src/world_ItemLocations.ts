import * as THREE from "three"

import { useThree } from "@react-three/fiber";
import { Vector3, Euler } from "three";

let floorPosition = new Vector3(0, -10, 0);
let floorScale = new Vector3(800, 800,5);
let floorRotation = new Euler(-Math.PI / 2, 0, 0)
let wallScale = new Vector3 (floorScale.x, floorScale.x/2.25, 1);


console.log("SCENE", THREE.Scene)


//degree / 57.2957795 = radian


const RAD = 57.2957795; 

 export default {
    positions: {
            city: {

                floor_position: floorPosition,
                //walls
                z_back_position: new Vector3(0, floorPosition.y + wallScale.y/2, -(floorScale.x/2)),
                z_front_position: new Vector3(0, floorPosition.y + wallScale.y/2, floorPosition.x/2 ),
                x_right_position: new Vector3(-floorScale.x/2, floorPosition.y + wallScale.y/2, 0 ),
                x_left_position: new Vector3(floorScale.x/2, floorPosition.y + wallScale.y/2, 0 )

            }
    }, 
    scales: {
        city: {
            floor_scale: floorScale,
            
            city_view_walls: wallScale
            
        }
    },
//positive x on left and -z facing camera
    rotations: {
        city: {
            floor_rotation: floorRotation,
            z_back_rotation:  new Euler(-4/RAD, 0, 0),
            x_right_rotation: new Euler(-5/RAD, 90/RAD,0/RAD, "YXZ"),
            x_left_rotation: new Euler(5/RAD ,90/RAD ,0/RAD, "YXZ"),
        }
    }

 } 
