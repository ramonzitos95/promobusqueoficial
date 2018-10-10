export class ResultadoOperacao<T>{
    Mensagens: Array<string> = new Array<string>();
    Sucesso: boolean;
    Modelo: T;
}