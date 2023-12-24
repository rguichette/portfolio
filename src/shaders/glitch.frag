uniform float uTime; 


float rand2(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float squareWave(float x, float frequency, float amplitude)
{
    return amplitude * sign(sin(6.2831 * frequency * x));
}

void main (){
  
   // Get the screen coordinates
    vec2 fragCoord = gl_FragCoord.xy;

    // Pixelate the screen coordinates
    vec2 pixelCoord = floor(fragCoord / 10.0) * 10.0;

    // Create a glitch effect based on time, pixelated screen coordinates, and popping squares
    float glitchThreshold = 0.1;

    float timeFactor = .2;

float glitchX = step(glitchThreshold, rand2(pixelCoord + uTime * timeFactor)) * squareWave(fragCoord.x, 0.5, 0.2);
    float glitchY = step(glitchThreshold, rand2(pixelCoord - uTime * timeFactor)) * squareWave(fragCoord.y, 0.5, 0.2);


    // Apply the glitch effect to the color channels
    vec3 glitchColor = vec3(glitchX, 0.0, glitchY);
    
 

csm_DiffuseColor = vec4(glitchColor, .4)   ;
     
    
}