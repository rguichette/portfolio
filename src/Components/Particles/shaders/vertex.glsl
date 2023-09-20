uniform float uTime ;


void main(){
vec4 mPos = modelMatrix * vec4( position, 1.0 );

// mPos.z = (sin(mPos.x + uTime ) *.4 ) +  (sin(mPos.y + uTime *.6  ) * .5);
mPos.z += (sin(mPos.x + uTime ) * .1)  +  (sin(mPos.y + uTime   ) * .5);


gl_Position = projectionMatrix * viewMatrix * mPos;

}