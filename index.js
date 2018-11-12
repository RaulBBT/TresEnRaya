import {tresRaya, arrayTabla, iniciarTabla, ponerCruz, ganar, ponerCirculo} from './TresEnRaya.js';
var jugador=0;
document.getElementById("00").onclick=clica;
document.getElementById("01").onclick=clica;
document.getElementById("02").onclick=clica;
document.getElementById("10").onclick=clica;
document.getElementById("11").onclick=clica;
document.getElementById("12").onclick=clica;
document.getElementById("20").onclick=clica;
document.getElementById("21").onclick=clica;
document.getElementById("22").onclick=clica;
var contador=9;
document.getElementById("boton").onclick=dibujar;
var comprobador=true;
function clica(e) {
	if (contador<9){
		if (jugador==0){
			ponerCruz(parseInt(e.target.id[0]),parseInt(e.target.id[1]));
			jugador=1;
			if(comprobador==true){
				document.getElementById("label"+e.target.id[0]+""+e.target.id[1]).innerHTML="X"
			}
		}else if(jugador==1){
			ponerCirculo(parseInt(e.target.id[0]),parseInt(e.target.id[1]));
			jugador=0;
			if(comprobador==true){
				document.getElementById("label"+e.target.id[0]+""+e.target.id[1]).innerHTML="O"
			}
		}
		if (ganar==true){
			comprobador=false;
		}
	}
	contador++;
}
function dibujar() {
	iniciarTabla();
	document.getElementById("tabla").style.backgroundColor="white";
	contador=0;
}
