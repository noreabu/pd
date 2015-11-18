uniform sampler2D texture;
uniform float level;
uniform float range;
uniform bool full_color;
uniform float red;
uniform float green;
uniform float blue;

uniform float spread;

void main(void)
{
	vec4 color;
	float brightness = 
		texture2D(texture,gl_TexCoord[0].st).r * 0.32
		+ texture2D(texture,gl_TexCoord[0].st).g * 0.51
		+ texture2D(texture,gl_TexCoord[0].st).b * 0.17;
	if (brightness > level - range && brightness < level + range)
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
	else if (
	  (brightness > level - range * 2.5 && brightness < level - range * 2.0)
	  || (brightness < level + range * 2.5 && brightness > level + range * 2.0))
	{
		if (full_color)
		{
			color = vec4(red / 2.0, green / 2.0 , blue / 2.0 , 1.0);
		} else {
			color = vec4(texture2D(texture,gl_TexCoord[0].st).r * red / 2.0
						,texture2D(texture,gl_TexCoord[0].st).g * green / 2.0
						,texture2D(texture,gl_TexCoord[0].st).g * blue / 2.0
						,texture2D(texture,gl_TexCoord[0].st).a);
		}
	}
	else if (
	  (brightness > level - range * 3.0 && brightness < level - range * 2.5)
	  || (brightness < level + range * 3.0 && brightness > level + range * 2.5))
	{
		if (full_color)
		{
			color = vec4(red / 3.0, green / 3.0 , blue / 3.0 , 1.0);
		} else {
			color = vec4(texture2D(texture,gl_TexCoord[0].st).r * red / 3.0
						,texture2D(texture,gl_TexCoord[0].st).g * green / 3.0
						,texture2D(texture,gl_TexCoord[0].st).g * blue / 3.0
						,texture2D(texture,gl_TexCoord[0].st).a);
		}
	}
	else if (
	  (brightness > level - range * 2.0 && brightness < level - range * 1.5)
	  || (brightness < level + range * 2.0 && brightness > level + range * 1.5))
	{
		if (full_color)
		{
			color = vec4(red / 2.0, green / 2.0 , blue / 2.0 , 1.0);
		} else {
			color = vec4(texture2D(texture,gl_TexCoord[0].st).r * red / 2.0
						,texture2D(texture,gl_TexCoord[0].st).g * green / 2.0
						,texture2D(texture,gl_TexCoord[0].st).g * blue / 2.0
						,texture2D(texture,gl_TexCoord[0].st).a);
		}
	}
	else if (
	  (brightness > level - range * 3.0 && brightness < level - range * 2.5)
	  || (brightness < level + range * 3.0 && brightness > level + range * 2.5))
	{
		if (full_color)
		{
			color = vec4(red / 3.0, green / 3.0 , blue / 3.0 , 1.0);
		} else {
			color = vec4(texture2D(texture,gl_TexCoord[0].st).r * red / 3.0
						,texture2D(texture,gl_TexCoord[0].st).g * green / 3.0
						,texture2D(texture,gl_TexCoord[0].st).g * blue / 3.0
						,texture2D(texture,gl_TexCoord[0].st).a);
		}
	}
	else
	{
		color = vec4(0.0,0.0,0.0,0.0);
	}
    gl_FragColor = color;
}