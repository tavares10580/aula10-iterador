
const nomes = new Set();

function adicionar(){
    const nome = document.getElementById("nome");
    const lista = document.getElementsByTagName("ul")[0];
    const item = document.createElement("li");
    let nomeUpper = nome.value;
    item.textContent = nomeUpper.toUpperCase();
    nomes.add(nomeUpper.toUpperCase());
    nome.value="";
    lista.appendChild(item);

}

function sortear(){
    const listaNomes = Array.from(nomes);
    const sorteado = listaNomes[Math.floor(Math.random()*listaNomes.length)]
    const listaSorteado = document.getElementsByTagName("ul")[1];
    const itemSorteado = document.createElement("li");
    itemSorteado.textContent = sorteado;
    listaSorteado.appendChild(itemSorteado);
}
