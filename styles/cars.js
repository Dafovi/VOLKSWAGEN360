function To(scene) {   
    var x = location.href = scene;
    document.body.innerHTML = x;
}
var back = new Number(0);
var s = new Number(0);
var int = new String("");
var press = false;

function interior(){
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
		console.log(interior);
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

function volverDos(visible,noVisible,noVisibleDos,noVisibleTres,flechas,atras){
		if(back<=0){
			To(atras);
		}
		if(back===1){
			document.getElementById(visible).setAttribute('visible','true');
			document.getElementById(noVisible).setAttribute('visible','false');
			document.getElementById(noVisibleDos).setAttribute('visible','false');
			document.getElementById(noVisibleTres).setAttribute('visible','false');
			document.getElementById(flechas).setAttribute('visible','false');
			back=0;
			int="";
		}
}

function visibleTres(visible,noVisible,noVisibleDos){
    document.getElementById(visible).setAttribute('visible','true');
    document.getElementById(noVisible).setAttribute('visible','false');
    document.getElementById(noVisibleDos).setAttribute('visible','false');
}

function visibleByClassNameDos(visible,noVisible){
    var x= document.getElementsByClassName(visible);
    var y= document.getElementsByClassName(noVisible);
	x[0].setAttribute('visible','true');
	x[1].setAttribute('visible','true');
	x[2].setAttribute('visible','true');
	y[0].setAttribute('visible','false');
	y[1].setAttribute('visible','false');
	y[2].setAttribute('visible','false');
}
function changeCarByClassNameDos(i,n){
    s+=i;
	if(s>n){
		s=0;
		visibleByClassNameDos(0,n)
	}
	
	if(s<0){
		s=n;
		visibleByClassNameDos(n,0)
	}
	if(i===1)
    visibleByClassNameDos(s,s-1)
	if(i===-1)
	visibleByClassNameDos(s,s+1)
}

/*----- PARA 7 CARROS ----*/
function visibleByClassNameTres(visible,noVisible){
    var x= document.getElementsByClassName(visible);
    var y= document.getElementsByClassName(noVisible);
	x[0].setAttribute('visible','true');
	x[1].setAttribute('visible','true');
	x[2].setAttribute('visible','true');
	x[3].setAttribute('visible','true');
	x[4].setAttribute('visible','true');
	x[5].setAttribute('visible','true');
	x[6].setAttribute('visible','true');
	y[0].setAttribute('visible','false');
	y[1].setAttribute('visible','false');
	y[2].setAttribute('visible','false');
	y[3].setAttribute('visible','false');
	y[4].setAttribute('visible','false');
	y[5].setAttribute('visible','false');
	y[6].setAttribute('visible','false');
}
function changeCarByClassNameTres(i,n){
    s+=i;
	if(s>n){
		s=0;
		visibleByClassNameTres(0,n)
	}
	
	if(s<0){
		s=n;
		visibleByClassNameTres(n,0)
	}
	if(i===1)
    visibleByClassNameTres(s,s-1)
	if(i===-1)
	visibleByClassNameTres(s,s+1)
}
function volverTres(visible,noVisible,noVisibleDos,noVisibleTres,noVisibleCuatro,noVisibleCinco,noVisibleSeis,noVisibleSiete,flechas,atras){
		if(back<=0){
			To(atras);
		}
		if(back===1){
			document.getElementById(visible).setAttribute('visible','true');
			document.getElementById(noVisible).setAttribute('visible','false');
			document.getElementById(noVisibleDos).setAttribute('visible','false');
			document.getElementById(noVisibleTres).setAttribute('visible','false');
			document.getElementById(noVisibleCuatro).setAttribute('visible','false');
			document.getElementById(noVisibleCinco).setAttribute('visible','false');
			document.getElementById(noVisibleSeis).setAttribute('visible','false');
			document.getElementById(noVisibleSiete).setAttribute('visible','false');
			document.getElementById(flechas).setAttribute('visible','false');
			back=0;
			int="";
		}
}



