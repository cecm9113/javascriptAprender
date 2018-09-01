let numero = Math.floor(Math.random()*11);
console.log("numero" +numero)
let intentos = 0;
let estado = false;
let lista = "Números:";

///comentarios
var verificarNumero = function(){
	
	var valor = document.getElementById("numeroCampo").value;
	intentos++;
	lista = lista +" " +valor;
	document.getElementById("lista").textContent =lista
	if( valor == numero)
	{
		console.log("ganaste")
		gano();
		borrarPista();
		estado = true;
        reiniciar();
	}
	else
	{
		fallo();
		darPista(valor);
	}

	if(intentos == 3)
	{
		if(estado == false)
		{
		 perdio();
		 borrarPista();
	    }
	    reiniciar();
	}


}

var reiniciar = function (){
	intentos=0;
	estado = false;
	numero = Math.floor(Math.random()*11);
	console.log("numero" +numero)
	document.getElementById("lista").innerHTML = "";
	lista = "Números:";

}

var gano = function function_name(argument) {
  document.getElementById("resultado").innerHTML = "ganaste, adivina un nuevo número!";
 
}

var fallo = function function_name(argument) {
	console.log("no ese no es!")
	document.getElementById("resultado").innerHTML = "no ese no es!";
}

var perdio = function function_name(argument) {
	 document.getElementById("resultado").innerHTML = "perdiste, adivina un nuevo número!";
}

function darPista(datoUsario){
   if(numero>datoUsario)
   {
   document.getElementById("pista").innerHTML = "El número es mayor a " + datoUsario +" , te quedan "+(3-intentos) + " intentos";
   }
   else
   {
    document.getElementById("pista").innerHTML = "El número es menor a " + datoUsario +" , te quedan "+(3-intentos) + " intentos";
   }

   


}

function borrarPista()
{
	document.getElementById("pista").innerHTML = "";
   
}


