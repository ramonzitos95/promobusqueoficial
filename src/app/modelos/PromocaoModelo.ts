export class PromocaoModelo {
    $Key : string;
    Nome: string = '';
    Descricao: string = '';
    Ativa: number;
    DataValidade : Date;
    DataCadastro : string;
    DataAlteracao: string; 
    IdEmpresa: string = '';
    IdCategoria: string = '';
    QuantidadeVisitas: number = 0;
}

