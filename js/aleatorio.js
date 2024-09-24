const nomes = ["Neymar", "Messi", "Cristiano", "Ronaldo", "EndrickChalton", "Kaká", "Atumalaca"];


export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
