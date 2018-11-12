export class tresRaya {
	constructor(arrayTabla){
		this.arrayTabla=arrayTabla;
	}
}
//Array de la tabla
var cont=0;
export var arrayTabla = new Array(2);
	
//Variable comprobadora de juego ganado
export var ganar=false;

export function iniciarTabla(){
	var t = new tresRaya(arrayTabla);
	for (var i = 0; i <= 2; i++) {
		arrayTabla[i] = new Array(2);
		for (var j = 0; j <= 2; j++) {
			cont++;
			arrayTabla[i][j] = cont;
		}
	}
}
export function ponerCruz(fila,column){
	if (ganar==false && arrayTabla[fila][column]!="X"){
		var ficha = "X"
		arrayTabla[fila][column]="X";
		comprobarTabla(fila,column,ficha);
	}
}
export function ponerCirculo(fila,column){
	if (ganar==false && arrayTabla[fila][column]!="O"){
		var ficha = "O"
		arrayTabla[fila][column]="O";
		comprobarTabla(fila,column,ficha);
	}
}
function comprobarTabla(fila,column,ficha){
	if(comprobarFila(fila,column,ficha)==true){
		ganar=true;
		console.log("Has ganado");
	}
	if(comprobarColumna(fila,column,ficha)==true){
		ganar=true;
		console.log("Has ganado");
	}
	if(comprobarDiagonalD(fila,column,ficha)==true){
		ganar=true;
		console.log("Has ganado");
	}
	if(comprobarDiagonalI(fila,column,ficha)==true){
		ganar=true;
		console.log("Has ganado");
	}
}

//Comprobadores de tres en raya
function comprobarFila(fila,column,ficha){
	if (column==0){
		if(comprobarDerecha(fila,column,ficha)==true){
			if(comprobarDerecha(fila,column+1,ficha)==true){
				return true;
			}
		}
	}else if (column==1){
		if(comprobarDerecha(fila,column,ficha)==true){
			if (comprobarIzquierda(fila,column,ficha)==true){
				return true;
			}
		}
	}else if (column==2){
		if(comprobarIzquierda(fila,column,ficha)==true){
			if(comprobarIzquierda(fila,column-1,ficha)==true){
				return true;
			}
		}
	}
	return false;
}
function comprobarColumna(fila,column,ficha){
	if (fila==0){
		if (comprobarAbajo(fila,column,ficha)==true){
			if (comprobarAbajo(fila+1,column,ficha)==true){
				return true;
			}
		}
	}else if (fila==1){
		if (comprobarArriba(fila,column,ficha)==true){
			if (comprobarAbajo(fila,column,ficha)==true){
				return true;
			}
		}
	}else if (fila==2){
		if (comprobarArriba(fila,column,ficha)==true){
			if (comprobarArriba(fila-1,column,ficha)==true){
				return true;
			}
		}
	}
	return false;
}
function comprobarDiagonalI(fila,column,ficha){
	if (fila==0 && column==2){
		if (comprobarDiagIAbajo(fila,column,ficha)==true){
			if (comprobarDiagIAbajo(fila+1,column-1,ficha)==true){
				return true;
			}
		}
	}else if (fila==1 && column==1){
		if (comprobarDiagIAbajo(fila,column,ficha)==true){
			if (comprobarDiagDArriba(fila,column,ficha)==true){
				return true;
			}
		}
	}else if (fila==2 && column==0){
		if (comprobarDiagDArriba(fila,column,ficha)==true){
			if (comprobarDiagDArriba(fila-1,column+1,ficha)==true){
				return true;
			}
		}
	}
	return false;
}
function comprobarDiagonalD (fila,column,ficha){
	if (fila==0 && column==0){
		if (comprobarDiagDAbajo(fila,column,ficha)==true){
			if (comprobarDiagDAbajo(fila+1,column+1,ficha)==true){
				return true;
			}
		}
	}else if (fila==1 && column==1){
		if (comprobarDiagDAbajo(fila,column,ficha)==true){
			if (comprobarDiagIArriba(fila,column,ficha)==true){
				return true;
			}
		}
	}else if (fila==2 && column==2){
		if (comprobarDiagIArriba(fila,column,ficha)==true){
			if (comprobarDiagIArriba(fila-1,column-1,ficha)==true){
				return true;
			}
		}
	}
	return false;
}
//Comprobadores de todas las direcciones
function comprobarArriba(fila,column,ficha){
	if (arrayTabla[fila-1][column] == ficha) {
		return true;
	}else{
		return false;
	}
}
function comprobarAbajo(fila,column,ficha){
	if (arrayTabla[fila+1][column] == ficha) {
		return true;
	}else{
		return false;
	}
}
function comprobarDerecha(fila,column,ficha){
	if (arrayTabla[fila][column+1] == ficha) {
		return true;
	}else{
		return false;
	}
}
function comprobarIzquierda(fila,column,ficha){
	if (arrayTabla[fila][column-1] == ficha) {
		return true;
	}else{
		return false;
	}
}
function comprobarDiagIArriba(fila,column,ficha){
	if (arrayTabla[fila-1][column-1] == ficha) {
		return true;
	}else{
		return false;
	}
}
function comprobarDiagDArriba(fila,column,ficha){
	if (arrayTabla[fila-1][column+1] == ficha) {
		return true;
	}else{
		return false;
	}
}
function comprobarDiagIAbajo(fila,column,ficha){
	if (arrayTabla[fila+1][column-1] == ficha) {
		return true;
	}else{
		return false;
	}
}
function comprobarDiagDAbajo(fila,column,ficha){
	if (arrayTabla[fila+1][column+1] == ficha) {
		return true;
	}else{
		return false;
	}
}
