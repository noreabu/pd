uniform sampler2D MyTex;
uniform sampler2D MyTex1;

varying vec2 texcoord1;
varying vec2 texcoord2;

void main (void)
{
 vec4 color = texture2D(MyTex, texcoord1);
 vec4 color2 = texture2D(MyTex1, texcoord1); // texcoord2 does not work.
 if ( color == color2 ) {
	gl_FragColor = vec4(1.0);
 } else {
	gl_FragColor = (color + color2) / 2;
}
}

