import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {TabelaPreco, TabelaDesconto } from './tabela';

interface IonSel extends Event {
  detail?: {
      value: string;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  tipo_envio: IonSel | undefined;
  valor_final?: number;
  ValorComDesconto?: number;
  peso: number = 0
  distancia: number = 0
  desconto: number = 0


  desconto_front = {TabelaPreco, TabelaDesconto}

  getValue(event: any , type: 'peso' | 'distancia'){
    if(type === 'peso' && event.target?.value != undefined){
      this.peso = parseFloat(event.target?.value)
    }
    else if(type === 'distancia' && event.target?.value != undefined){
      this.distancia = parseFloat(event.target?.value)
    }
  }

   Calcular(){
    let valor_extra: number = 0
    let v: number = 0
    if (this.tipo_envio?.detail?.value == 'Regular')  {valor_extra = TabelaPreco.Regular.valor_extra; v = TabelaPreco.Regular.multiplicador}
    else if (this.tipo_envio?.detail?.value == 'Expresso') {valor_extra = TabelaPreco.Expresso.valor_extra; v = TabelaPreco.Expresso.multiplicador}

    if (this.peso >= 50){
      this.desconto = TabelaDesconto.kg50
    }

    else if(this.peso >= 10){
      this.desconto = TabelaDesconto.kg10
    }
    this.desconto = (this.desconto * this.peso) / 100


    this.valor_final = (this.peso * v + (this.distancia * 0.5)) + valor_extra

    this.ValorComDesconto = this.valor_final - this.desconto


      return this.valor_final;
   }

}
