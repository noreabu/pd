uniform sampler2D MyTex;
uniform sampler2D MyTex1;

uniform float threshold;

varying vec2 texcoord1;
varying vec2 texcoord2;

void main (void)
{
  vec4 color = vec4(0., 0., 0., 1.);
 vec4 pixel1 = texture2D(MyTex, texcoord1);
 vec4 pixel2 = texture2D(MyTex1, texcoord1);
 
 
 if (abs(pixel1.r - pixel2.r) > threshold) {
  color.r = ((pixel1.r + pixel2.r) / 2.);
 }
 
 if (abs(pixel1.g - pixel2.g) > threshold) {
  color.g = (pixel1.g + pixel2.g) / 2.;
 }
 
 if (abs(pixel1.b - pixel2.b) > threshold) {
  color.b = (pixel1.b + pixel2.b) / 2.;
 }
 
 gl_FragColor = color;
}

