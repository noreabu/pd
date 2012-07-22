uniform sampler2D texture;
uniform float thresh;
uniform float range;
uniform bool full_color;

void main(void)
{
	vec4 color = texture2D(texture,gl_TexCoord[0].st);
	if (color.r < thresh - range || color.r > thresh + range)
		{ color.r = 0.0; }
	else 
		{ if (full_color) color.r = 1.0; }
	if (color.g < thresh - range || color.g > thresh + range)
		{ color.g = 0.0; }
	else 
		{ if (full_color) color.g = 1.0; }
	if (color.b < thresh - range || color.b > thresh + range)
		{ color.b = 0.0; }
	else 
		{ if (full_color) color.b = 1.0; }
	// if (color.a < thresh - range || color.a > thresh + range) color.a = 0.0;
    gl_FragColor = color;
}