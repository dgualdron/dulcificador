// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});



// App Vars

var theraphy = 0;
var session = 1;
var playing = 0;


// Audio Channels
var ch1 = new Audio('./audio/white.mp3');
var ch2 = new Audio('./audio/white.mp3');
var ch3 = new Audio('./audio/white.mp3');
var ch4 = new Audio('./audio/white.mp3');
var ch5 = new Audio('./audio/white.mp3');
var ch6 = new Audio('./audio/white.mp3');

// Player Functions
function playerswitch(e){
	if($(e).attr("src") == "img/play.png")
	{
		$(e).attr("src","img/stop.png");
	}
	else
	{
		$(e).attr("src","img/play.png");
	}
}

function stopAll(){
	ch1.pause();
	ch2.pause();
	ch3.pause();
	ch4.pause();
	ch5.pause();
	ch6.pause();
	playing = 0;
}

// Therapy sets

function playshit(e) {
	if(ch1.paused)
	{
		ch1 = new Audio('./audio/4/INSTRUCCION5.wav');
		ch1.play();
		playerswitch(e);
	}
	else
	{
		ch1.pause();
		playerswitch(e);
	}
}

//1 - Insomnio
function t11(e){
	if(ch1.paused)
	{
		ch1 = new Audio('./audio/1/t11.mp3');
		ch1.play();
		playerswitch(e);
	}
	else
	{
		ch1.pause();
		playerswitch(e);
	}
}

function t12(e){
	if(ch2.paused)
	{
		ch2 = new Audio('./audio/1/t12.mp3');
		ch2.play();
		playerswitch(e);
		playing = 1;
	}
	else
	{
		ch2.pause();
		playerswitch(e);
	}
}

//2 - Relajación Guiada
function t2(e){
	if(ch1.paused)
	{
		ch1 = new Audio('./audio/2/t2.mp3');
		ch1.play();
		playerswitch(e);
	}
	else
	{
		ch1.pause();
		playerswitch(e);
	}
}

//3 - Alivia tu ansiedad
function t3(e){
	if(ch1.paused)
	{
		ch1 = new Audio('./audio/3/t3.mp3');
		ch1.play();
		playerswitch(e);
	}
	else
	{
		ch1.pause();
		playerswitch(e);
	}
}

//4 - Aliviar Pesadillas
function t4(e){
	if(playing == 0)
	{
		ch1.pause();
		ch1 = new Audio('./audio/4/i1.mp3');
		ch2 = new Audio('./audio/4/pianobg.mp3');
		ch3 = new Audio('./audio/4/water_stream_looped.mp3');
		ch2.loop = true;
		ch3.loop = true;
		ch1.play();
		ch2.play();
		ch3.play();
		playerswitch(e);
		if(session == 1)
		{
			$("#t4btn").html('<button class="col button button-fill" onclick="nextSession(this);">Siguiente</button>');
		}
		playing = 1;
	}
	else
	{
		ch1.pause();
		ch2.pause();
		ch3.pause();
		ch4.pause();
		session = 1;
		playerswitch(e);
		playing = 0;
		$("#t4btn").html("");
	}
}

function nextSession(e){
	switch(session)
	{
		case 1: 
			ch1.pause();
			ch1 = new Audio('./audio/4/i2.mp3');
			ch1.play();
			break;
			
		case 2: 
			ch1.pause();
			ch1 = new Audio('./audio/4/i3.mp3');
			ch1.play();
			break;
			
		case 3: 
			ch1.pause();
			ch1 = new Audio('./audio/4/i4.mp3');
			ch1.play();
			break;
			
		case 4:
			ch1.pause();
			ch1 = new Audio('./audio/4/i5.mp3');
			ch4 = new Audio('./audio/4/quadronaurality_loop.mp3');
			ch4.loop = true;
			//ch4.volume = 0.2;
			ch1.play();
			ch4.play();
			$(e).hide();
			break;
	}
	session++;
}

function clearSession(){
	session = 1;
	stopAll();
}


//5 - Mejora tu autoestima
function t5(e){
	if(ch1.paused)
	{
		ch1 = new Audio('./audio/5/t5.mp3');
		ch1.play();
		playerswitch(e);
	}
	else
	{
		ch1.pause();
		playerswitch(e);
	}
}

//6 - Elimina tristeza y depresión
function t6(e){
	if(ch1.paused)
	{
		ch1 = new Audio('./audio/6/t6.mp3');
		ch1.play();
		playerswitch(e);
	}
	else
	{
		ch1.pause();
		playerswitch(e);
	}
}

//7 - Elimina tristeza y depresión
function t7(e){
	if(ch1.paused)
	{
		ch1 = new Audio('./audio/7/t7.mp3');
		ch1.play();
		playerswitch(e);
	}
	else
	{
		ch1.pause();
		playerswitch(e);
	}
}

//8 - ASRM
function t81(e){
	if(ch1.paused)
	{
		ch1 = new Audio('./audio/8/asmr1.mp3');
		ch1.play();
		playerswitch(e);
	}
	else
	{
		ch1.pause();
		playerswitch(e);
	}
}

function t82(e){
	if(ch2.paused)
	{
		ch2 = new Audio('./audio/8/asmr2.mp3');
		ch2.play();
		playerswitch(e);
	}
	else
	{
		ch2.pause();
		playerswitch(e);
	}
}

function t83(e){
	if(ch3.paused)
	{
		ch3 = new Audio('./audio/8/asmr3.mp3');
		ch3.play();
		playerswitch(e);
	}
	else
	{
		ch3.pause();
		playerswitch(e);
	}
}

function t84(e){
	if(ch4.paused)
	{
		ch4 = new Audio('./audio/8/asmr4.mp3');
		ch4.play();
		playerswitch(e);
	}
	else
	{
		ch4.pause();
		playerswitch(e);
	}
}

function t85(e){
	if(ch5.paused)
	{
		ch5 = new Audio('./audio/8/asmr5.mp3');
		ch5.play();
		playerswitch(e);
	}
	else
	{
		ch5.pause();
		playerswitch(e);
	}
}

function t86(e){
	if(ch6.paused)
	{
		ch6 = new Audio('./audio/8/asmr6.mp3');
		ch6.play();
		playerswitch(e);
	}
	else
	{
		ch6.pause();
		playerswitch(e);
	}
}
