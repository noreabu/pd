// Cyrille Henry 2007

uniform float x_offset;
uniform float y_offset;

uniform float color;
uniform float maxiterations;

uniform sampler2D texture;

void main (void)
{	
	float x = gl_TexCoord[0].s - x_offset;
	float y = gl_TexCoord[0].t - y_offset;
	
	vec4 c;
	float a;
	float b;
	
	a = x;
	b = y;
	
   float n = 0.;
	while (n < maxiterations)
	{
		float aa = a * a;
		float bb = b * b;
		float twoab = 2.0 * a * b;
		a = aa - bb + x;
		b = twoab + y;
		// Infinty in our finite world is simple, let's just consider it 16
		if (aa + bb > 16.0)
		{
			break;  // Bail
		}
		n = n + 1.;
	}
	
	vec4 c1 = texture2D(texture, vec2(x, y));
	
	float color = mod(n*color,255.)*0.002;
	// float color = tan(n);
	
	c.rgb = vec3(color,color,color);
	c.a = 1.;

	gl_FragColor = c;
}
