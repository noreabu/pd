// Cyrille Henry 2007

uniform vec2 offset;

void main()
{	
	gl_TexCoord[0] = gl_MultiTexCoord0;
	gl_Position = ftransform();		
}

