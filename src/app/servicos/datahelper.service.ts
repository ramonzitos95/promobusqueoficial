import { Injectable } from '@angular/core';
import { concat } from 'rxjs/observable/concat';

@Injectable()
export class DataHelperServico {

  constructor() { 

  }

  dataHoje() {
      var data = new Date();
      var dia = data.getDate();
      var mes = data.getMonth() + 1;
      var ano = data.getFullYear();
      var hora = data.getHours();
      var segundo = data.getSeconds();
      var data2 = [dia, mes, ano].join('/');
      return data2;
      //return concat(data2, ' ', [hora, segundo].join(':'));
  }
}
