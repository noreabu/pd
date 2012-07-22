#extension GL_ARB_texture_rectangle : enable

uniform sampler2DRect rectTexture;

void main()
{
	vec4 color = texture2DRect(rectTexture, gl_FragCoord.st);

	color += texture2DRect(rectTexture, vec2(gl_FragCoord.s + 1.0, gl_FragCoord.t));
	color += texture2DRect(rectTexture, vec2(gl_FragCoord.s + 1.0, gl_FragCoord.t + 1.0));
	color += texture2DRect(rectTexture, vec2(gl_FragCoord.s, gl_FragCoord.t + 1.0));

	gl_FragColor = color * 0.25;
}
