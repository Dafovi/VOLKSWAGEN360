// JavaScript Document
"use strict";
/*var vid =[document.getElementById("window"),document.getElementById("vid_modelos"),document.getElementById("vid_finan"),
		 document.getElementById("vid_ptpago"),document.getElementById("vid_mtpago")];*/

function open(n){
		document.getElementById("window").style.display="block";
	if(n===1){
		document.getElementById("vid_modelos").style.display="block";
	}else if(n===2){
		document.getElementById("vid_finan").style.display="block";
	}else if(n===3){
		document.getElementById("vid_ptpago").style.display="block";
	}else if(n===4){
		document.getElementById("vid_mtpago").style.display="block";
	}
}
function close(){
	document.getElementById("window").style.display="none";
	//document.getElementById("vid_modelos").style.display="none";
	document.getElementById("vid_finan").style.display="none";
	document.getElementById("vid_ptpago").style.display="none";
	document.getElementById("vid_mtpago").style.display="none";
	
	
	document.getElementById("vid_finan").pause();
	document.getElementById("vid_finan").load();
	
	document.getElementById("vid_ptpago").pause();
	document.getElementById("vid_ptpago").load();
	
	document.getElementById("vid_mtpago").pause();
	document.getElementById("vid_mtpago").load();
	
}