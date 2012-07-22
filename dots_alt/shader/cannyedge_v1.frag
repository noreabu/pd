uniform sampler2D img;
uniform float height;
uniform float width;

void main(void)
{
	// set to 1.0 if edge is found
	float edge = 0.0;
	
	if ( 
		length(texture2D(img, gl_TexCoord[0].st - vec2(width,0.0))) < length(texture2D(img, gl_TexCoord[0].st))
		&& length(texture2D(img, gl_TexCoord[0].st + vec2(width,0.0))) < length(texture2D(img, gl_TexCoord[0].st))
		
		||
		
		length(texture2D(img, gl_TexCoord[0].st - vec2(0.0,height))) < length(texture2D(img, gl_TexCoord[0].st))
		&& length(texture2D(img, gl_TexCoord[0].st + vec2(0.0,height))) < length(texture2D(img, gl_TexCoord[0].st))
		
		||
		
		length(texture2D(img, gl_TexCoord[0].st - vec2(width,height))) < length(texture2D(img, gl_TexCoord[0].st))
		&& length(texture2D(img, gl_TexCoord[0].st + vec2(width,height))) < length(texture2D(img, gl_TexCoord[0].st))
		
		||
		
		length(texture2D(img, gl_TexCoord[0].st - vec2(width,(-1.0 * height)))) < length(texture2D(img, gl_TexCoord[0].st))
		&& length(texture2D(img, gl_TexCoord[0].st + vec2(width,(-1.0 * height)))) < length(texture2D(img, gl_TexCoord[0].st))
		)
	{
		edge = 1.0;
	}
	
	// gl_FragColor = texture2D(img, gl_TexCoord[0].st - vec2((1.0/640)*offset,0.0));
	gl_FragColor = vec4(1.0,1.0,1.0,edge);
}