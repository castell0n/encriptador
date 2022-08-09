let recomendacion = "No utilizar maýusculas, acentos, simbolos y números."


// function para el contador de palabaras
function contar(){
    setTimeout(function(){
        let valor =  document.getElementById("textara");
        let cantidad = valor.value.length;

        if (cantidad = cantidad){
            document.getElementById("contador").innerHTML= cantidad;
        }else{
            document.getElementById("contador").innerHTML= "&#129321;";
        }
    })
};


// ajustes boton encriptar
document.getElementById("encriptar").addEventListener("click", () => {
    let texto = document.getElementById("textara").value;
    let textoCifrado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat").replace(/[á-é-í-ó-ú]/gi, "").replace(/[0-9]/g, "").replace(/[´´*!¡/(-)#$%&=?¿¨¨><+;:.,|_°#]/g, "").toLowerCase(/[A-Z]/g);

    if (textoCifrado = textoCifrado) {
        document.querySelector(".encripttitulo").innerHTML="Encriptado con exito. &#129321;";
        document.querySelector(".encriptado").innerHTML= textoCifrado;
    }else {
        document.querySelector(".encripttitulo").innerHTML="Error al encriptar";
        document.querySelector(".encriptado").innerHTML= "Alparecer no as ingresado ningun texto al cual poder encriptar.<br><br><strong>Se recomienda:</strong><br>" + recomendacion;
    }
    document.getElementById("textara").value = "";
    contar();
});

// ajustes boton desencriptar
document.getElementById("desencriptar").addEventListener("click", () => {
    let texto = document.querySelector(".textara").value;
    let textoDecifrado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u").replace(/[á-é-í-ó-ú]/gi, "").replace(/[0-9]/g, "").replace(/[´´*!¡/(-)#$%&=?¿¨¨><+;:.,|_°]/g, "").replace(/[A-Z]/g, "");

    if (textoDecifrado = textoDecifrado) {
        document.querySelector(".encripttitulo").innerHTML="Desencriptado con exito. &#129321;";
        document.querySelector(".encriptado").innerHTML= textoDecifrado;
    }else {
        document.querySelector(".encripttitulo").innerHTML="Error al desencriptar";
        document.querySelector(".encriptado").innerHTML= "Alparecer no as ingresado ningun texto al cual poder desencriptar.<br><br><strong>Se recomienda:</strong><br>" + recomendacion;
    }
    document.getElementById("textara").value = "";
    contar();
});


// boton izquierdo encriptado copiar
document.querySelector(".copiartext").addEventListener("click", () => {
    let codigoACopiar = document.querySelector(".encriptado");
    let seleccion = document.createRange();
   
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
});

// funcion para el reaeteado
document.querySelector(".limpiar").addEventListener("click", () => {
    document.querySelector(".encripttitulo").innerHTML="Resultado del texto encriptado o desencriptado.";
    document.querySelector(".encriptado").innerHTML= "";
    document.getElementById("contador").innerHTML= "0";
    document.getElementById("textara").value = "";
    contar();
});