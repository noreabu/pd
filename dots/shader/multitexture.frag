uniform sampler2D MyTex;
uniform sampler2D MyTex1;

uniform float threshold;
uniform float brightness;

uniform float red;
uniform float green;
uniform float blue;

varying vec2 texcoord1;
varying vec2 texcoord2;

void main (void)
{
  vec4 color = vec4(0., 0., 0., 1.);
 vec4 pixel1 = texture2D(MyTex, texcoord1);
 vec4 pixel2 = texture2D(MyTex1, texcoord1);
 
 /*
    if ( ((pixel1.r + pixel2.r) / 2. * 0.32) + ((pixel1.g + pixel2.g) / 2. * 0.51) + ((pixel1.b + pixel2.b) / 2. * 0.17) > brightness ) {
	  if (abs(pixel1.r - pixel2.r) > threshold) {
	    color.r = ((pixel1.r + pixel2.r) / 2.);
	  }
	  
	  if (abs(pixel1.g - pixel2.g) > threshold) {
	    color.g = (pixel1.g + pixel2.g) / 2.;
	  }
	  
	  if (abs(pixel1.b - pixel2.b) > threshold) {
	    color.b = (pixel1.b + pixel2.b) / 2.;
	}
    }
 */
    if ( (abs(pixel1.r - pixel2.r) * 0.32) + (abs(pixel1.g - pixel2.g) * 0.51) + (abs(pixel1.b - pixel2.b) * 0.17) > brightness ) {
      color = vec4(red, green, blue, 1.);
    }
 
 gl_FragColor = color;
}

