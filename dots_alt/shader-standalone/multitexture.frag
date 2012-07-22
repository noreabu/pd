uniform sampler2D MyTex;
uniform sampler2D MyTex1;
// uniform sampler2D MyTex2;

uniform float threshhold;
uniform float real;

varying vec2 texcoord1;
// varying vec2 texcoord2;

void main (void)
{
 vec4 color1 = texture2D(MyTex, texcoord1);
 vec4 color2 = texture2D(MyTex1, texcoord1); // texcoord2 does not work.
 // vec4 color3 = texture2D(MyTex2, texcoord1);
 
 vec4 color = abs ( color1 - color2 );
 
 if ( ( color.r * 0.32 + color.g * 0.51 + color.b * 0.17 ) > threshhold ) {
	gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
 } else {
	gl_FragColor = vec4(0.0 + ( color1.r * real ), 0.0 + ( color1.g * real ), 0.0 + ( color1.b * real ), 0.0 + ( color1.a * real ));
 }
}

