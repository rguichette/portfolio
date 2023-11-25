// attribute vec3 position;
// attribute vec3 normal;
// attribute vec2 uv;

uniform float uTime;


void main(){
    mat4 mtx = projectionMatrix * viewMatrix; 
   
   vec3 modelPos = position; 
//    modelPos.z= modelPos.z + cos(position.z* uTime ) ;
//    modelPos.x= modelPos.x + sin(position.x* uTime ) ;
   
  

    // gl_Position = mtx * modelMatrix * vec4(modelPos, 1.0 );
    
    csm_Position = modelPos;


}