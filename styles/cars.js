function To(scene) {   
    var x = location.href = scene;
    document.body.innerHTML = x;
}
var s = new Number(0);
var press = false;
var btnname= new String("");

function interior(car){
	To('../Interiores/'+car);
}
function exterior(car){
	To('../Exteriores/'+car);
}

function boton(conten){
	if(conten!=btnname && btnname!=""){
		press=false;
		document.getElementById(btnname).setAttribute('visible','false');
	}
	
	if(press===false){
		document.getElementById(conten).setAttribute('visible','true');
		press=true;
		btnname=conten;
	}else{
		document.getElementById(conten).setAttribute('visible','false');
		press=false;
	}
	//console.log(btnname);
}
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
	botonVisible();
	
}
function visible(visible,noVisible){
    	document.getElementById(visible).setAttribute('visible','true');
    	document.getElementById(noVisible).setAttribute('visible','false');
}

/*window.onload = function(){
	document.getElementById("ActiveZone").addEventListener("mouseover",funtion(){
	 	var btn= document.getElementsByClassName("btn");
		for (i = 0; i < btn.length; i++) {
			btn[i].setAttribute('visible','true');
		}
	});
	
	document.getElementById("ActiveZone").addEventListener("mouseout",funtion(){
	 	var btn= document.getElementsByClassName("btn");
		for (i = 0; i < btn.length; i++) {
			btn[i].setAttribute('visible','false');
		}
	});
}*/
function botonVisible(){
	var x= document.getElementsByClassName("0");
	var y= document.getElementsByClassName("2");
	var info= document.getElementsByClassName("info");
	
	if(s==0){
		for (i = 0; i < x.length; i++) {
			x[i].setAttribute('visible','true');
		}
		for (i = 0; i < y.length; i++) {
			y[i].setAttribute('visible','false');
		}
	}else if(s==2){
		for (i = 0; i < x.length; i++) {
			x[i].setAttribute('visible','false');
		}
		for (i = 0; i < y.length; i++) {
			y[i].setAttribute('visible','true');
		}
			 
		}else{
			for (i = 0; i < x.length; i++) {
				x[i].setAttribute('visible','false');
			}
			for (i = 0; i < y.length; i++) {
				y[i].setAttribute('visible','false');
			}
	}
	for (i = 0; i < info.length; i++) {
		info[i].setAttribute('visible','false');
	}
}
