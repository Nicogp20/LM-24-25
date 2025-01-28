var variables = [];

function anadir(){
   let numero = (document.getElementById("numero").value);
   if (isNaN(numero))
    {
        document.getElementById("resultado").innerHTML = "Debes introducir valores correctos";
    }
    else {
        let numero1 = parseFloat(numero);
        variables.push(numero1);
    }
}

function ordenar(){
    if (variables.length === 0){
        document.getElementById("resultado").innerHTML = "No has introducido ningún valor en el array";
    }
    else{
        variables.sort();
        document.getElementById("resultado").innerHTML = variables;
    }

}

function media(){
    let sumatorio = 0;
    if (variables.length === 0){
        document.getElementById("resultado").innerHTML = "No has introducido ningún valor en el array";
    }
    else{
        for(let i = 0; variables.length>i; i++){
            sumatorio += variables[i];
        }
        let mediaA = sumatorio/variables.length;
        document.getElementById("resultado").innerHTML = mediaA;
    }
}