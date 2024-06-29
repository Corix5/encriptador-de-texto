//Obtener el texto ingresado por el usuario

const clavesEncriptacion = {
    "a":"ai",
    "e":"enter",
    "i":"imes",
    "o":"ober",
    "u":"ufat"
}

function obtenerTexto(){
    let texto = document.getElementById("texto").value;
    document.getElementById('titulo').style.display = 'none';
    document.getElementById('copiar-btn').style.display = 'block';
    document.querySelector('textarea').value = "";
    return texto;
}

//Encriptar el texto
function encriptar(textoIngresado){
    let textoEncriptado = "";
    for(let i = 0; i < textoIngresado.length; i++){
        if(textoIngresado[i] in clavesEncriptacion){
            textoEncriptado += clavesEncriptacion[textoIngresado[i]];
        }
        else{
            textoEncriptado += textoIngresado[i];
        }
    }
    return textoEncriptado;
}

//Desencriptar texto
function desencriptar(textoIngresado){
    let textoDesencriptado = textoIngresado;
    for(const clave in clavesEncriptacion){
        if(textoIngresado.includes(clavesEncriptacion[clave])){
            // expresion regular para reemplazar todas las ocurrencias
            let regex = new RegExp(clavesEncriptacion[clave], 'g');
            textoDesencriptado = textoDesencriptado.replace(regex, clave);
        }
    }
    return textoDesencriptado;
}

//colocar texto encriptado en aside
function colocaTextoEncriptado(){
    let textoColocado = encriptar(obtenerTexto());
    document.querySelector('#textoColocado').innerHTML = textoColocado;
}

//colocar texto desencriptado en aside
function colocaTextoDesencriptado(){
    let textoColocado = desencriptar(obtenerTexto());
    document.querySelector('#textoColocado').innerHTML = textoColocado;
}

//copiar texto 
function copiar(){
    // Seleccionar el elemento <p> por su ID
    const elemento = document.getElementById('textoColocado');

    // Crear un rango de selección
    const seleccion = document.createRange();
    seleccion.selectNodeContents(elemento);

    // Seleccionar el texto
    window.getSelection().removeAllRanges(); // Limpiar selecciones anteriores
    window.getSelection().addRange(seleccion);

    // Copiar el texto seleccionado
    document.execCommand('copy');

    // Informar al usuario que el texto ha sido copiado
    alert('Texto copiado: ' + elemento.textContent);
}