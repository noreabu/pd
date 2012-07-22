// http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/

uniform sampler2D img;
uniform float width;

void main(void)
{
	vec4 sum = vec4(0.0);
 
   // blur in y (vertical)
   // take nine samples, with the distance width between them
   sum += texture2D(img, vec2(gl_TexCoord[0].x - 4.0*width, gl_TexCoord[0].y)) * 0.05;
   sum += texture2D(img, vec2(gl_TexCoord[0].x - 3.0*width, gl_TexCoord[0].y)) * 0.09;
   sum += texture2D(img, vec2(gl_TexCoord[0].x - 2.0*width, gl_TexCoord[0].y)) * 0.12;
   sum += texture2D(img, vec2(gl_TexCoord[0].x - width, gl_TexCoord[0].y)) * 0.15;
   sum += texture2D(img, vec2(gl_TexCoord[0].x, gl_TexCoord[0].y)) * 0.16;
   sum += texture2D(img, vec2(gl_TexCoord[0].x + width, gl_TexCoord[0].y)) * 0.15;
   sum += texture2D(img, vec2(gl_TexCoord[0].x + 2.0*width, gl_TexCoord[0].y)) * 0.12;
   sum += texture2D(img, vec2(gl_TexCoord[0].x + 3.0*width, gl_TexCoord[0].y)) * 0.09;
   sum += texture2D(img, vec2(gl_TexCoord[0].x + 4.0*width, gl_TexCoord[0].y)) * 0.05;
 
   gl_FragColor = sum;
}