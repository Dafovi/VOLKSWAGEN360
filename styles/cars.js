function To(scene) {   
    var x = location.href = scene;
    document.body.innerHTML = x;
}
var back = new Number(0);
var s = new Number(0);
var int = new String("");
var press = false;
var aftS= new String("");

var i;

var Garantia= document.getElementsByClassName('Garantia');
var Altura= document.getElementsByClassName('Altura');
var Faros= document.getElementsByClassName('Faros');
var Motor= document.getElementsByClassName('Motor');
var Rines= document.getElementsByClassName('Rines');
var Frenos= document.getElementsByClassName('Frenos');
var Vidrios= document.getElementsByClassName('Vidrios');

function interior(){
	if(int!="")
	To('Interiores/'+int);
}

function boton(conten){
	if(press===false){
		document.getElementById(conten).setAttribute('visible','true');
		press=true;
	}else{
		document.getElementById(conten).setAttribute('visible','false');
		press=false;
	}
}
function botonClass(conten){
	var x= document.getElementsByClassName(conten);
	if(press===false){
		for (i = 0; i < x.length; i++) {
	  		x[i].setAttribute('visible','true');
		}
		press=true;
	}else{
		for (i = 0; i < x.length; i++) {
	  		x[i].setAttribute('visible','false');
		}
		press=false;
	}
}
function botonDos(conten,btnUno,btnDos){
    if(press===false){
        document.getElementById(conten).setAttribute('visible','true');
        document.getElementById(btnUno).setAttribute('visible','false');
        document.getElementById(btnDos).setAttribute('visible','false');
        press=true;
    }else{
        document.getElementById(conten).setAttribute('visible','false');
        document.getElementById(btnUno).setAttribute('visible','true');
        document.getElementById(btnDos).setAttribute('visible','true');
        press=false;
    }
}
function volver(atras){
		if(back<=0){
			To(atras);
		}
		if(back===1){
			document.getElementById('Select').setAttribute('visible','true');
			document.getElementById('Flechas').setAttribute('visible','false');
			document.getElementById(aftS).setAttribute('visible','false');
			back=0;
			int="";
			aftS="";
		}
}
function visibleByClassName(visible,noVisible){
    var x= document.getElementsByClassName(visible);
    var y= document.getElementsByClassName(noVisible);
	
	for (i = 0; i < x.length; i++) {
	  	x[i].setAttribute('visible','true');
		y[i].setAttribute('visible','false');
	}
}
/*----- PARA 1 CARRO ----*/
function changeCarById(i,n){
    s+=i;
	if(s>n){
		s=0;
		visible(0,n)
		
	}
	
	if(s<0){
		s=n;
		visible(n,0)
	}
	if(i===1)
    visible(s,s-1)
	if(i===-1)
	visible(s,s+1)
}
function visible(visible,noVisible){
    	document.getElementById(visible).setAttribute('visible','true');
    	document.getElementById(noVisible).setAttribute('visible','false');
}

/*----- PARA 2 CARROS ----*/
function visibleDos(visible,interior){
		if(aftS==""){
			document.getElementById(visible).setAttribute('visible','true');
			document.getElementById('Select').setAttribute('visible','false');
			document.getElementById('Flechas').setAttribute('visible','true');
			back=1;
			int=interior;
			aftS=visible;
			console.log(interior);
		}
}
function changeCarByClassName(i,n){
    s+=i;
	if(s>n){
		s=0;
		visibleByClassName(0,n)
	}
	
	if(s<0){
		s=n;
		visibleByClassName(n,0)
	}
	if(i===1)
    visibleByClassName(s,s-1)
	if(i===-1)
	visibleByClassName(s,s+1)
}

/*----- PARA 3 CARROS ----*/

function visibleTres(visible,noVisible,noVisibleDos){
    document.getElementById(visible).setAttribute('visible','true');
    document.getElementById(noVisible).setAttribute('visible','false');
    document.getElementById(noVisibleDos).setAttribute('visible','false');
}



