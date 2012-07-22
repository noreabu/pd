uniform sampler2D texture;
uniform float thresh;
uniform float range;
uniform bool full_color;
uniform float red;
uniform float green;
uniform float blue;

void main(void)
{
	vec4 color;
	float brightness = 
		texture2D(texture,gl_TexCoord[0].st).r * 0.32
		+ texture2D(texture,gl_TexCoord[0].st).g * 0.51
		+ texture2D(texture,gl_TexCoord[0].st).b * 0.17;
	if (brightness > thresh - range && brightness < thresh + range)
	{
		if (full_color)
		{
			color = vec4(red, green, blue, 1.0);
		} else {
			color = vec4(texture2D(texture,gl_TexCoord[0].st).r * red
						,texture2D(texture,gl_TexCoord[0].st).g * green
						,texture2D(texture,gl_TexCoord[0].st).g * blue
						,texture2D(texture,gl_TexCoord[0].st).a);
		}
	}
	else
	{
		color = vec4(0.0,0.0,0.0,0.0);
	}
    gl_FragColor = color;
}