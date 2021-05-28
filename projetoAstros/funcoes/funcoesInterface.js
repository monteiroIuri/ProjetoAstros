import { inverteMesAno, retornaHemisferio, retornaIntensidade } from "./funcoesLogicas.js";

/**
 * @description Imprime uma tabela com a lista de chuvas 
 * @param {Array} lista 
 */
const imprimeListaChuva = (lista) => {
    console.log('\nNOME DO METEORO             - INTENSIDADE - HEMISFÉRIO - Período');
    
    lista.forEach( imprimeItemListaChuva );
}

/**
 * @description Imprime uma linha da tabela de lista de chuvas
 * @param {Object} chuva
 */
const imprimeItemListaChuva = (chuva) => {
    const nome = chuva.nome.padEnd(27,' ');
    let intensidade = retornaIntensidade(chuva.intensidade);
    let hemisferio = retornaHemisferio(chuva.declinacao);

    intensidade = intensidade.padEnd(11, ' ');
    hemisferio = hemisferio.padEnd(10,' ');
    
    const dataInicio = inverteMesAno(chuva.inicio);
    const dataFim = inverteMesAno(chuva.fim);
    
    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${dataInicio} à ${dataFim} `);
}

export default imprimeListaChuva;