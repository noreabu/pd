uniform sampler2D img;
uniform float height;
uniform float width;

// const float PI = 3.14159265358979323846264;
const float PIdiv4 = 0.78538231634224483211566;

uniform float threshhold;
uniform float range;
uniform bool colormode;

uniform float red;
uniform float green;
uniform float blue;

void main(void)
{
	float result;
	float gx,gy;
		
	gx = 	-texture2D(img, vec2(gl_TexCoord[0].x - width, gl_TexCoord[0].y - height)).x
			-2.0*texture2D(img, vec2(gl_TexCoord[0].x, gl_TexCoord[0].y - height)).x
			-texture2D(img, vec2(gl_TexCoord[0].x + width, gl_TexCoord[0].y - height)).x
			+texture2D(img, vec2(gl_TexCoord[0].x - width, gl_TexCoord[0].y + height)).x
			+2.0*texture2D(img, vec2(gl_TexCoord[0].x, gl_TexCoord[0].y + height)).x
			+texture2D(img, vec2(gl_TexCoord[0].x + width, gl_TexCoord[0].y + height)).x;
			
	gy = 	-texture2D(img, vec2(gl_TexCoord[0].x - width, gl_TexCoord[0].y - height)).x
			-2.0*texture2D(img, vec2(gl_TexCoord[0].x - width, gl_TexCoord[0].y)).x
			-texture2D(img, vec2(gl_TexCoord[0].x - width, gl_TexCoord[0].y + height)).x
			+texture2D(img, vec2(gl_TexCoord[0].x + width, gl_TexCoord[0].y - height)).x
			+2.0*texture2D(img, vec2(gl_TexCoord[0].x + width, gl_TexCoord[0].y)).x
			+texture2D(img, vec2(gl_TexCoord[0].x + width, gl_TexCoord[0].y + height)).x;
			
	result = sqrt((gx*gx)+(gy*gy));
	vec4 color = vec4(0.0);
	
	// TODO: Kanten folgen
	if ( result > threshhold ) {
		if ( colormode ) {
			color = vec4(red,green,blue,result);
		} else {
			if ( atan (gy/gx) < 0.0 ) {
				if ( atan (gy/gx) < -PIdiv4 ) {
					color = vec4(red, 0.0, 0.0, result);
				} else {
					color = vec4(red, green, 0.0, result);
				}
			} else {
				if ( atan (gy/gx) > PIdiv4 ) {
					color = vec4(0.0, green, 0.0, result);
				} else {
				color = vec4(0.0, 0.0, blue, result);
				}
			}
		}
	}
	
	gl_FragColor = color;
}
