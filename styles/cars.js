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
var Normativa= document.getElementsByClassName('Normativa');
var Aplicaciones= document.getElementsByClassName('Aplicaciones');
var Sistema= document.getElementsByClassName('Sistema');

var btnGarantia= document.getElementsByClassName('btnGarantia');
var btnAltura= document.getElementsByClassName('btnAltura');
var btnFaros= document.getElementsByClassName('btnFaros');
var btnMotor= document.getElementsByClassName('btnMotor');
var btnRines= document.getElementsByClassName('btnRines');
var btnFrenos= document.getElementsByClassName('btnFrenos');
var btnVidrios= document.getElementsByClassName('btnVidrios');
var btnNormativa= document.getElementsByClassName('btnNormativa');
var btnAplicaciones= document.getElementsByClassName('btnAplicaciones');
var btnSistema= document.getElementsByClassName('btnSistema');

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
	
	if(i===1 && s<=n)
    visible(s,s-1)
	if(i===-1 && s>=0)
	visible(s,s+1)
	
	if(s>n){
		s=0;
		visible(0,n)
	}
	
	if(s<0){
		s=n;
		visible(n,0)
	}
	
	info();
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
	
	if(i===1 && s<=n)
    visibleByClassName(s,s-1)
	if(i===-1 && s>=0)
	visibleByClassName(s,s+1)
	if(s>n){
		s=0;
		visibleByClassName(0,n)
	}
	
	if(s<0){
		s=n;
		visibleByClassName(n,0)
	}
	
	info();
}

/*----- PARA 3 CARROS ----*/

function visibleTres(visible,noVisible,noVisibleDos){
    document.getElementById(visible).setAttribute('visible','true');
    document.getElementById(noVisible).setAttribute('visible','false');
    document.getElementById(noVisibleDos).setAttribute('visible','false');
}


function info(){
	//console.log(s);
	if(s!=0){
		for (i = 0; i < btnAltura.length; i++) {
			btnAltura[i].setAttribute('visible','false');
		}
		for (i = 0; i < Altura.length; i++) {
			Altura[i].setAttribute('visible','false');
		}
		for (i = 0; i < btnMotor.length; i++) {
			btnMotor[i].setAttribute('visible','false');
		}
		for (i = 0; i < Motor.length; i++) {
			Motor[i].setAttribute('visible','false');
		}
		for (i = 0; i < btnFrenos.length; i++) {
			btnFrenos[i].setAttribute('visible','false');
		}
		for (i = 0; i < Frenos.length; i++) {
			Frenos[i].setAttribute('visible','false');
		}
		for (i = 0; i < Normativa.length; i++) {
		Normativa[i].setAttribute('visible','false');
		}
		for (i = 0; i < Aplicaciones.length; i++) {
		Aplicaciones[i].setAttribute('visible','false');
		}
		for (i = 0; i < Sistema.length; i++) {
		Sistema[i].setAttribute('visible','false');
		}
		for (i = 0; i < btnVidrios.length; i++) {
			btnVidrios[i].setAttribute('visible','false');
		}
		for (i = 0; i < Vidrios.length; i++) {
			Vidrios[i].setAttribute('visible','false');
		}
		for (i = 0; i < Faros.length; i++) {
		Faros[i].setAttribute('visible','false');
		}
		for (i = 0; i < btnFaros.length; i++) {
		btnFaros[i].setAttribute('visible','false');
		}
		for (i = 0; i < btnNormativa.length; i++) {
		btnNormativa[i].setAttribute('visible','false');
		}
		for (i = 0; i < btnAplicaciones.length; i++) {
		btnAplicaciones[i].setAttribute('visible','false');
		}
		for (i = 0; i < btnSistema.length; i++) {
		btnSistema[i].setAttribute('visible','false');
		}
	}else{
		for (i = 0; i < btnAltura.length; i++) {
			btnAltura[i].setAttribute('visible','true');
		}
		for (i = 0; i < btnMotor.length; i++) {
			btnMotor[i].setAttribute('visible','true');
		}
		for (i = 0; i < btnFrenos.length; i++) {
			btnFrenos[i].setAttribute('visible','true');
		}
		
		for (i = 0; i < btnVidrios.length; i++) {
			btnVidrios[i].setAttribute('visible','true');
		}
		for (i = 0; i < btnFaros.length; i++) {
		btnFaros[i].setAttribute('visible','true');
		}
		for (i = 0; i < btnNormativa.length; i++) {
		btnNormativa[i].setAttribute('visible','true');
		}
		for (i = 0; i < btnAplicaciones.length; i++) {
		btnAplicaciones[i].setAttribute('visible','true');
		}
		for (i = 0; i < btnSistema.length; i++) {
		btnSistema[i].setAttribute('visible','true');
		}
	}
	
	if(s!=1){
		for (i = 0; i < Rines.length; i++) {
		Rines[i].setAttribute('visible','false');
		}
		for (i = 0; i < btnRines.length; i++) {
		btnRines[i].setAttribute('visible','false');
		}
	}else{
		for (i = 0; i < btnRines.length; i++) {
		btnRines[i].setAttribute('visible','true');
		}
		for (i = 0; i < btnGarantia.length; i++) {
		btnGarantia[i].setAttribute('visible','true');
		}
	}
}
