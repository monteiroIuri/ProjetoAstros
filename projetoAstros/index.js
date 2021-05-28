import chuvaDeMeteoros from "./data/chuva-de-meteoros.js";
import imprimeListaChuva from "./funcoes/funcoesInterface.js";
import { listarChuva, listarChuvasSeguinte } from "./funcoes/funcoesLogicas.js";

const dataAtual = new Date();

const chuvasVisiveis = chuvaDeMeteoros.filter( (chuva)=> listarChuva(chuva, dataAtual) );
const proximaChuva = chuvaDeMeteoros.filter( (chuva)=> listarChuvasSeguinte(chuva, dataAtual) );

console.log('Chuva de meteoros');

if ( chuvasVisiveis.length > 0 ) {
    let msg = "\nEncontramos ";
    msg += chuvasVisiveis.length == 1 ? '1 chuva de meteoros' : chuvasVisiveis.length + ' chuvas de meteoros';
    
    console.log(msg);
    imprimeListaChuva(chuvasVisiveis)
} else {
    console.log('\nNenhuma chuva de meteoros passando no momento');
}

console.log('\n\nNão perca as próximas chuvas de meteoros:');
imprimeListaChuva(proximaChuva)


