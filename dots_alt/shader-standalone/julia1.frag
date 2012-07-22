// Cyrille Henry 2007

//Zoom Parameter
uniform float zoom_re;
uniform float zoom_im;
uniform float zoom_ab;

//Offset-Parameter für x und y
uniform float xy_offset;
uniform float x_offset;
uniform float y_offset;

uniform float ab_offset;
uniform float a_offset;
uniform float b_offset;

//Offset-Parameter Abbruchbedingung / Grenzwert
uniform float maxiterations;
uniform float infinity;

//Offset-Parameter fuer Farbbestimmung
uniform float color;

//Offset-Parameter fuer Farbverscheibung
uniform float roff;
uniform float goff;
uniform float boff;
 
//ToDo Kommentar eintragen
uniform float r;
uniform float g;
uniform float b;
uniform float a;

//ToDo Kommentar eintragen
uniform sampler2D texture;

//ToDo Kommentar eintragen
const float dx = 1./500.; // change to gemwin dim

//ToDo funktionnen kommentieren
void main (void)
{	
	float x = gl_TexCoord[0].s;
	float y = gl_TexCoord[0].t;
	
	vec4 c;
	float a;
	float b;
	
	//vor-Skalieren von a und b
	//a = (x-K2)/2 * ( intervallgroeße x ) * (0.5 * fraktal intervall)
	
	a = (x - K2)/4*(x_max - x_min) * (a_max - a_min) ;
	b = (x - K3)/4*(y_max - y_min) * (b_max - b_min) ;
	
	//Grenzwert fuer Abbruch limZn
		float limZn = 1000.;
		
   //Laufvariable Zn
   float Zn = Z0;
   
   //Zn^2
		float x1x2 = Z0re;
		float y1x2 = Z0im;
		
   //
   Iterator i = 0;
	while (Zn < limZn)
	{	
		//Zn^2+1
		a = a*a - b*b + Z0re;
		b = 2.0 * a*b + Z0im;
		Zn = sqrt(a*a+b*b);
		i++;
	}
	
	vec4 c1 = texture2D(texture, vec2(x, y));
	
	// Einfärbung je nach Dauer bis Abbruch;
	float color1 = n/limZn);
	float color2 = 1-n/limZn);
	float color1 = n/2*limZn);
	
	c.rgb = vec3(color1,color2,color3);
	c.a = 1.;

	gl_FragColor = c;
}
