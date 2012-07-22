uniform sampler2D img;
uniform float y_offset;
uniform float x_offset;

void main(void)
{
	float result;
	float gx,gy;
		
	gx = 	-texture2D(img, vec2(gl_TexCoord[0].x - x_offset, gl_TexCoord[0].y - y_offset)).x
			-2*texture2D(img, vec2(gl_TexCoord[0].x, gl_TexCoord[0].y - y_offset)).x
			-texture2D(img, vec2(gl_TexCoord[0].x + x_offset, gl_TexCoord[0].y - y_offset)).x
			+texture2D(img, vec2(gl_TexCoord[0].x - x_offset, gl_TexCoord[0].y + y_offset)).x
			+2*texture2D(img, vec2(gl_TexCoord[0].x, gl_TexCoord[0].y + y_offset)).x
			+texture2D(img, vec2(gl_TexCoord[0].x + x_offset, gl_TexCoord[0].y + y_offset)).x;
			
	gy = 	-texture2D(img, vec2(gl_TexCoord[0].x - x_offset, gl_TexCoord[0].y - y_offset)).x
			-2*texture2D(img, vec2(gl_TexCoord[0].x - x_offset, gl_TexCoord[0].y)).x
			-texture2D(img, vec2(gl_TexCoord[0].x - x_offset, gl_TexCoord[0].y + y_offset)).x
			+texture2D(img, vec2(gl_TexCoord[0].x + x_offset, gl_TexCoord[0].y - y_offset)).x
			+2*texture2D(img, vec2(gl_TexCoord[0].x + x_offset, gl_TexCoord[0].y)).x
			+texture2D(img, vec2(gl_TexCoord[0].x + x_offset, gl_TexCoord[0].y + y_offset)).x;
			
	result = sqrt((gx*gx)+(gy*gy));
	
	gl_FragColor = vec4(result);
}