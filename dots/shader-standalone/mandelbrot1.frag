
//Zoom Parameter
uniform float zoom_re;
uniform float zoom_im;
uniform float zoom_b;

//Offset-Parameter für x und y
uniform float xy_offset;
uniform float x_offset;
uniform float y_offset;
//Manipulator für Fraktal
uniform float ab_offset;
uniform float a_offset;
uniform float b_offset;

//Offset-Parameter Abbruchbedingung / Grenzwert
uniform float maxiterations;
uniform float infinity;

//Offset-Parameter fuer Farbbestimmung
uniform float color;
uniform float break_alpha;

//Offset-Parameter fuer Farbverscheibung
uniform float red;
uniform float green;
uniform float blue;
 
//ToDo Kommentar eintragen
uniform float r;
uniform float g;
uniform float b;
uniform float a;

//ToDo Kommentar eintragen
uniform sampler2D texture;

//ToDo Kommentar eintragen
//const float dx = 1./500.; // change to gemwin dim

//ToDo funktionnen kommentieren
void main (void)
{	

// init process & const variables
	//Bild verschieben
	
	// float x = (gl_TexCoord[0].s - (x_offset - xy_offset)*zoom_b) / (zoom_re * zoom_b);
	// float y = (gl_TexCoord[0].t - (y_offset - xy_offset)*zoom_b) / (zoom_im * zoom_b);
	float x = (gl_TexCoord[0].s / zoom_b) - x_offset;
	float y = (gl_TexCoord[0].t / zoom_b) - y_offset;
	
	float re;
	float im;
	//Madelbrot verzerren	
	re = (x - a_offset - ab_offset); 
	im = (y - b_offset - ab_offset); 
	vec4 c;
	
		
	//float maxiterations = 1000.;
   float n = 0.;
   float m = 0.;
   
	while (n < maxiterations)
	{
		float aa = re * re;
		float bb = im * im;
		float twoab = 2.0 * re * im;
		re = (aa - bb + x);
		im = (twoab + y);
		// Infinty in our finite world is simple, let's just consider it 16
		
		//if (re + im > infinity)
		//if (aa + bb > 16.0)
		if (aa + bb > infinity)
		{
			m = n/maxiterations;
			break;  // Bail
		}
		n = n + 1.;
	}
	
	/*
	if (n == maxiterations) {
		c.a = m * break_alpha; //mit random-wert [0-1] schneegestöber erzeugen
	} else {
		c.a = 1.;
	}
	*/
	
	// float color = mod(n*x_offset,255.)*0.002;
	
	float color1 = n/0.245 * color;
	float color2 = n/2. * color;
	float color3 = n/4. * color;
	
	c.rgb = vec3(color1-red,color2-green,color3-blue);
	c.a = 1.;
	//c.rgb = vec3 (color1,color2,color3);
	

	gl_FragColor = c;
}
