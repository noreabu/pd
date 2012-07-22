uniform sampler2D current;
uniform sampler2D prev;

void main(void) {
	gl_FragColor = texture2D(current,gl_TexCoord[0].st) - texture2D(prev,gl_TexCoord[1].st);
}