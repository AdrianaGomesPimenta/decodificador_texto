function criptografar() {
    let texto = document.getElementById("inputText").value;
    texto = texto.replaceAll("e", "enter");
    texto = texto.replaceAll("i", "imes");
    texto = texto.replaceAll("a", "ai");
    texto = texto.replaceAll("o", "ober");
    texto = texto.replaceAll("u", "ufat");
    document.getElementById("outputText").innerText = texto;
        }

function descriptografar() {
    let texto = document.getElementById("inputText").value;
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");
    document.getElementById("outputText").innerText = texto;}

function copiar_texto() {
    const texto = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(texto).catch(function(err) {
        console.error('Falha ao copiar o texto: ', err);
    });
}
 
 
 



       