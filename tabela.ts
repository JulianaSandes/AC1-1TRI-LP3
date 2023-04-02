interface Tempo_Entrega {
  Regular: number;
  Expresso: number;
}

interface Preco_Entrega {
  Regular: { valor_extra: number; multiplicador: number };
  Expresso: { valor_extra: number; multiplicador: number };
}

interface Desconto_Peso{
  kg10:number,
  kg50: number
}

export let TabelaPreco: Preco_Entrega = {
  Regular: { valor_extra: 0, multiplicador: 1 },
  Expresso: { valor_extra: 5, multiplicador: 1.2 }
};

export let TabelaDesconto: Desconto_Peso= {
  kg10: 20,
  kg50: 40
}
