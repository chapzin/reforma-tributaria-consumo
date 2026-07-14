# 8. Extinção do débito e split payment

## Débito apurado não é sinônimo de DARF pago

O art. 27 da LC 214 prevê formas de extinção:

1. compensação com créditos;
2. pagamento pelo contribuinte;
3. recolhimento na liquidação financeira — split payment;
4. recolhimento pelo adquirente;
5. pagamento por responsável legal.

Essa pluralidade conecta documento, apuração e dinheiro.

## O que é split payment

No pagamento da operação, prestadores de serviços de pagamento e sistemas participantes segregam a parcela de IBS/CBS e a recolhem aos destinatários tributários. O fornecedor recebe o valor líquido correspondente, conforme a modalidade e os parâmetros.

### Fluxo conceitual

1. DFe informa operação, base, alíquotas e tributos.
2. Cobrança/pagamento referencia a operação.
3. Sistema consulta ou calcula quanto ainda deve ser segregado.
4. Parcela tributária é recolhida; restante vai ao fornecedor.
5. Evento alimenta a apuração e evita cobrança em duplicidade.

## Modalidades

A lei contempla procedimento padrão e simplificado, com implementação gradual e disciplina conjunta. O padrão busca refletir o débito efetivo da operação; o simplificado pode trabalhar com percentual previamente determinado em situações reguladas, com ajustes posteriores.

<StatusNormativo tipo="tecnico">A existência legal do split não significa que toda forma de pagamento e todo contribuinte já operem o fluxo completo na mesma data. Atos conjuntos definirão implantação, participantes, consulta e contingências.</StatusNormativo>

## Impacto em caixa

No sistema tradicional, o fornecedor pode receber o preço bruto e recolher tributo depois. No split, parte do caixa não transita livremente por ele. Ao mesmo tempo, a compensação de créditos e a segregação correta podem reduzir inadimplência tributária e dar segurança ao crédito do comprador.

### Exemplo didático

Venda: R$ 100.000 + R$ 28.000 de IBS/CBS. Se o sistema identifica R$ 20.000 já extintos/compensáveis segundo a regra operacional, pode segregar apenas o remanescente pertinente, não necessariamente os R$ 28.000 brutos. A forma concreta depende da modalidade e consulta.

## Pontos de projeto

- vínculo único entre DFe, cobrança, parcela e recebimento;
- pagamentos parciais e múltiplos meios;
- antecipação, cartão, marketplace e recebíveis cedidos;
- devolução, estorno, chargeback e cancelamento;
- pagamento sem referência suficiente;
- conciliação por estabelecimento e consolidação por contribuinte;
- segurança, disponibilidade e trilha de auditoria.

## Recolhimento pelo adquirente

É diferente do split automatizado. Em hipóteses legais, o adquirente recolhe, o que pode proteger seu crédito e extinguir o débito do fornecedor. Contratos B2B deverão definir cooperação, dados e tratamento de divergências sem transferir responsabilidade além da lei.

## Armadilhas

- calcular tributo de novo no gateway com regra diferente do DFe;
- não tratar pagamento parcial;
- confundir autorização da nota com extinção do débito;
- liberar crédito ao comprador sem evento correspondente;
- contabilizar valor bruto como caixa disponível;
- ignorar que IBS e CBS são parcelas separadas.

## Pergunta executiva

Se 20% a 30% de um recebimento deixasse de passar pelo caixa disponível, qual covenant, comissão, antecipação de recebível ou métrica de receita seria afetada? O split é projeto fiscal **e** financeiro.
