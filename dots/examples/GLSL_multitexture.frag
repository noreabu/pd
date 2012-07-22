//jack/RYBN 2010
#extension GL_EXT_gpu_shader4 : enable
#extension GL_ARB_texture_rectangle : enable
uniform sampler2DRect MyTex1;
uniform sampler2DRect MyTex2;
uniform sampler2DRect tex0;
varying vec2 texcoord0;
ivec2 size1 = textureSize2DRect(MyTex1, 0);
ivec2 size2 = textureSize2DRect(MyTex2, 0);
ivec2 size0 = textureSize2DRect(tex0, 0);

void main (void)
{
	float sizeF1X = float(size1.x)/float(size0.x);
	float sizeF1Y = float(size1.y)/float(size0.y);
	float sizeF2X = float(size2.x)/float(size0.x);
	float sizeF2Y = float(size2.y)/float(size0.y);
	vec4 color1 = texture2DRect(MyTex1, vec2(texcoord0.s*sizeF1X,texcoord0.t*sizeF1Y));
	vec4 color2 = texture2DRect(MyTex2, vec2(texcoord0.s*sizeF2X,texcoord0.t*sizeF2Y));
	gl_FragColor = (color1*0.5 + color2*0.5);
}

