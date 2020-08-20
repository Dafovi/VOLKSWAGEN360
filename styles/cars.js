function To(scene) {   
    var x = location.href = scene;
    document.body.innerHTML = x;
}
var back = new Number(0);
var s = new Number(0);
var int = new String("");

function interior(){
	To('Interiores/'+int);
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

function volver(visible,noVisible,noVisibleDos,flechas,atras){
		if(back<=0){
			To(atras);
		}
		if(back===1){
			document.getElementById(visible).setAttribute('visible','true');
			document.getElementById(noVisible).setAttribute('visible','false');
			document.getElementById(noVisibleDos).setAttribute('visible','false');
			document.getElementById(flechas).setAttribute('visible','false');
			back=0;
			int="";
		}
}
function visibleDos(visible,noVisible,flechas,atras,interior){
    	document.getElementById(visible).setAttribute('visible','true');
    	document.getElementById(noVisible).setAttribute('visible','false');
		document.getElementById(flechas).setAttribute('visible','true');
		back=atras;
		int=interior;
}

function visibleByClassName(visible,noVisible){
    var x= document.getElementsByClassName(visible);
    var y= document.getElementsByClassName(noVisible);
	x[0].setAttribute('visible','true');
	x[1].setAttribute('visible','true');
	y[0].setAttribute('visible','false');
	y[1].setAttribute('visible','false');
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

function visibleByClassNameDos(visible,noVisible,noVisibleDos){
    var x= document.getElementsByClassName(visible);
    var y= document.getElementsByClassName(noVisible);
    var z= document.getElementsByClassName(noVisibleDos);
	x[0].setAttribute('visible','true');
	x[1].setAttribute('visible','true');
	x[2].setAttribute('visible','true');
	y[0].setAttribute('visible','false');
	y[1].setAttribute('visible','false');
	y[2].setAttribute('visible','false');
	z[0].setAttribute('visible','false');
	z[1].setAttribute('visible','false');
	z[2].setAttribute('visible','false');
}
function changeCarByClassNameDos(i,n){
    s+=i;
	if(s>n){
		s=0;
		visibleByClassNameDos(0,n,n)
	}
	
	if(s<0){
		s=n;
		visibleByClassNameDos(n,0,0)
	}
	if(i===1)
    visibleByClassNameDos(s,s-1,s-1)
	if(i===-1)
	visibleByClassNameDos(s,s+1,s-1)
}



