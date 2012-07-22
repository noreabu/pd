uniform sampler2D img;
const float y_offset = 1.0/768.0;
const float x_offset = 1.0/1024.0;
uniform float red;
// const float PI = 3.14159265358979323846264;
const float PIdiv4 = 0.78538231634224483211566;

void main(void)
{
	float result;
	float gx,gy;
		
	gx = 	-texture2D(img, vec2(gl_TexCoord[0].x - x_offset, gl_TexCoord[0].y - y_offset)).x
			-2.0*texture2D(img, vec2(gl_TexCoord[0].x, gl_TexCoord[0].y - y_offset)).x
			-texture2D(img, vec2(gl_TexCoord[0].x + x_offset, gl_TexCoord[0].y - y_offset)).x
			+texture2D(img, vec2(gl_TexCoord[0].x - x_offset, gl_TexCoord[0].y + y_offset)).x
			+2.0*texture2D(img, vec2(gl_TexCoord[0].x, gl_TexCoord[0].y + y_offset)).x
			+texture2D(img, vec2(gl_TexCoord[0].x + x_offset, gl_TexCoord[0].y + y_offset)).x;
			
	gy = 	-texture2D(img, vec2(gl_TexCoord[0].x - x_offset, gl_TexCoord[0].y - y_offset)).x
			-2.0*texture2D(img, vec2(gl_TexCoord[0].x - x_offset, gl_TexCoord[0].y)).x
			-texture2D(img, vec2(gl_TexCoord[0].x - x_offset, gl_TexCoord[0].y + y_offset)).x
			+texture2D(img, vec2(gl_TexCoord[0].x + x_offset, gl_TexCoord[0].y - y_offset)).x
			+2.0*texture2D(img, vec2(gl_TexCoord[0].x + x_offset, gl_TexCoord[0].y)).x
			+texture2D(img, vec2(gl_TexCoord[0].x + x_offset, gl_TexCoord[0].y + y_offset)).x;
			
	result = sqrt((gx*gx)+(gy*gy));
	vec4 color = vec4(0.0);
	
	if ( atan (gy/gx) < 0.0 ) {
		if ( atan (gy/gx) < -PIdiv4 ) {
			color = vec4(1.0, 0.0, 0.0, result);
		} else {
			color = vec4(1.0, 1.0, 0.0, result);
		}
	} else {
		if ( atan (gy/gx) > PIdiv4 ) {
			color = vec4(0.0, 1.0, 0.0, result);
		} else {
		color = vec4(0.0, 0.0, 1.0, result);
		}
	}
	
	gl_FragColor = color;
}