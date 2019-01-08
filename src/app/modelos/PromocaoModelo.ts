export class PromocaoModelo {
    $key : string;
    Nome: String 
    Descricao: String 
    Ativa: Number;
    Foto : Blob;
    DataValidade : Date;
    DataCadastro : Date;
    DataAlteracao: Date; 
    IdEmpresa: number;
    IdCategoria: number;
    QuantidadeVisitas: number;
}

