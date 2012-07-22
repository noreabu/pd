uniform sampler2D img;
uniform float threshhold = 0.5;

void main(void) {
	vec4 result;
	float brightness = 
		texture2D(img,gl_TexCoord[0].st).r * 0.32
		+ texture2D(img,gl_TexCoord[0].st).g * 0.51
		+ texture2D(img,gl_TexCoord[0].st).b * 0.17;
	
	if (brightness > threshhold) {
		result = vec4(1.0);
	} else {
		result = vec4(0.0);
	}
	
	gl_FragColor = result;
}