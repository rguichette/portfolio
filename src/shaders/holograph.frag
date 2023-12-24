uniform float uTime; 

void main (){
 
vec4 mainColor = csm_FragColor;

csm_FragColor = vec4(mainColor.r,mainColor.g ,mainColor.b , sin(uTime* 1.2)+1.2  );


}