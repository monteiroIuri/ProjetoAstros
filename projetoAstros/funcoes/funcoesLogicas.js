/**
 * @description Retorna a chuva de meteoros se ela estiver ocorrendo na data recebida por parâmetro
 * 
 * @param {Object} chuva 
 * @param {Date} dataAtual 
 */
export const listarChuva = (chuva, dataAtual) => {
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual); 
    
    if ( dataInicio.getMonth() + 1 > dataFim.getMonth() + 1 ) {
        const anoFinal = dataFim.getFullYear();
        dataFim.setFullYear(anoFinal +1);
    }

    return ( dataAtual >= dataInicio && dataAtual <= dataFim ) && chuva;
}

/**
 * @description Retorna a chuva de meteoros se ela ocorrer dois meses após a data recebida por parâmetro
 * 
 * @param {object} chuva 
 * @param {Date} data 
 */
export const listarChuvasSeguinte = (chuva, data) => {
    const dataAtual = data;
    const anoAtual = dataAtual.getFullYear();
    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(dataAtual);

    if ( dataAtual.getMonth() + 1 > dataInicio.getMonth() + 1 ) {
        const anoFinal = dataInicio.getFullYear();
        dataInicio.setFullYear(anoFinal +1);
    }

    dataFim.setMonth( dataFim.getMonth() + 2 );
    
    return ( dataAtual < dataInicio && dataInicio < dataFim ) && chuva;
}

/**
 * @description Inverte o mes e o dia de uma data que não possui ano definido
 * 
 * @param {String} data 
 */
export const inverteMesAno = (data) => {
    const dataInvertida = data.split('/');
    
    return dataInvertida[1] + '/' + dataInvertida[0];
}

/**
 * @description Retorna um texto com a intensidade da chuva
 * 
 * @param {String} intensidade 
 */
export const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (Fraca)';
    
    if ( intensidade.indexOf('Forte') >= 0 ) { 
        novaIntensidade = '3 (Forte)';
    } else if ( intensidade.indexOf('Média') >= 0 ) {
        novaIntensidade = '2 (Média)';
    } else if (  intensidade.indexOf('Irregular') >= 0 ) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
}

/**
 * @description Retorna o hemisfério baseado no valor da declinação
 * 
 * @param {Number} declinacao 
 */
export const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';
