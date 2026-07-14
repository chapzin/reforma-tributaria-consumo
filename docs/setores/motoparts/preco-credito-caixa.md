# 36. Preço, crédito e caixa em motopeças

Margem em reposição é estreita. A RTC desloca o jogo de “alíquota na prateleira” para **custo líquido do cliente**, **capital de giro na importação** e **qualidade do crédito**.

## Três preços que o comercial precisa dominar

| Conceito | Definição | Quem usa |
|---|---|---|
| **Preço mercadoria (P)** | Valor da peça sem IBS/CBS | Lista, contrato, ERP |
| **Preço cheio (P + T)** | P mais IBS e CBS destacados (por fora) | Checkout, NF-e, consumidor |
| **Custo líquido do cliente regular (CL)** | (P + T) − crédito apropriável de IBS/CBS | Comprador B2B no regular |

No regime regular “limpo”, se o cliente se credita integralmente de T, o **CL** tende a se aproximar de **P** (ignorando timing, split e bloqueios). Por isso comparar só “preço cheio” entre fornecedores engana o comprador regular e o vendedor do Simples no DAS.

## Simulação didática — pastilha de freio

Premissas (hipótese de estudo, **não** alíquota oficial):

- preço da mercadoria P = R$ 100,00;
- alíquota combinada hipotética de IBS+CBS = 26%;
- tributo T = R$ 26,00;
- preço cheio = R$ 126,00.

| Cliente | Crédito de IBS/CBS | Custo líquido aproximado | Efeito na escolha do fornecedor |
|---|---|---|---|
| Oficina no regular, DFe e extinção ok | R$ 26 | ~ R$ 100 | Aceita T destacado se o crédito fluir |
| Oficina no Simples (IBS/CBS no DAS) | R$ 0 (como crédito regular) | R$ 126 | Sensível ao bruto; pede desconto |
| Consumidor final | R$ 0 | R$ 126 | Compara e-commerce e balcão |
| Cliente regular comprando de **fornecedor no DAS** | crédito **limitado** ao devido no Simples | entre 100 e 126 | Pode exigir híbrido ou desconto |

<StatusNormativo tipo="simulacao">26% é apenas hipótese de sensibilidade. Substitua pela alíquota aplicável ao destino, ano e tratamento do item quando for orçar de verdade.</StatusNormativo>

### Desconto que “compensa” o crédito limitado

Se o cliente regular recebe só R$ 8 de crédito (em vez de R$ 26) porque o fornecedor está no DAS, o custo líquido sobe R$ 18. Para equalizar, o fornecedor no DAS precisaria reduzir o preço da mercadoria em cerca de R$ 18 — **antes** de falar em frete, prazo e marca.

Use o raciocínio do [capítulo de créditos do Simples](/simples/das-creditos) e o simulador de cadeia.

## Formação de preço na importadora

```text
Custo em moeda estrangeira
+ frete/seguro internacional
+ II
+ IPI (se houver) / IS (se houver)
+ despesas aduaneiras e armazenagem
+ frete interno até o CD
+ IBS/CBS da importação  →  crédito no regular (timing!)
+ custo financeiro do prazo de nacionalização
+ margem alvo
= P (preço mercadoria)
+ IBS/CBS da saída (por fora)
= preço cheio ao cliente
```

### O ponto de caixa que mata importadora despreparada

IBS/CBS da **importação** exigem desembolso (ou extinção) **antes** ou no momento da liberação da carga, enquanto o crédito só se compensa com débitos de **saída** ao longo das vendas. Se o giro do estoque é 90 dias, o capital de giro “engole” o IVA da importação por um trimestre.

**Controles**

- projeção de caixa com lead time aduaneiro + prazo médio de venda;
- política de estoque mínimo por família de SKU;
- prioridade de venda de lotes com crédito “parado”;
- acompanhamento de saldo credor e pedido de ressarcimento, se houver.

## Split payment e meios de pagamento no atacado

Distribuidoras recebem por:

- boleto;
- Pix;
- cartão (menos no B2B puro);
- marketplace / intermediação;
- crédito rotativo do cliente.

O **split** (quando operacional para o meio de pagamento) separa IBS/CBS no fluxo. Efeitos:

- entrada líquida menor no momento do pagamento;
- conciliação bancária × DFe obrigatória;
- chargeback e devolução de peça exigem estorno coordenado.

Veja [Extinção e split payment](/consumo/split-payment).

## Política comercial recomendada (mínimo)

1. **Lista em P** (sem IBS/CBS) como referência interna.
2. Motor calcula T por destino, item e data.
3. Proposta B2B regular mostra **P, T e estimativa de crédito** (com ressalva de requisitos).
4. Proposta para Simples/B2C mostra **preço cheio** e condições.
5. Cláusula de **revisão tributária** na transição (2027 e 2029).
6. Desconto financeiro **não** confunde com desconto que altera base sem regra.

## Indicadores de gestão setorial

| KPI | Por que medir |
|---|---|
| % receita B2B regular | Pressão por crédito e híbrido |
| Idade média do crédito bloqueado | Qualidade de fornecedor e XML |
| Dias de giro × IVA da importação em aberto | Caixa |
| % notas com cClassTrib alterado manualmente | Risco de cadastro |
| Devoluções por incompatibilidade de modelo | Estorno e custo oculto |
| Margem por lote de origem (importado ST / nacional) | Liquidação de estoque |

## Erros caros e frequentes

1. Embutir IBS/CBS na base como se fossem ICMS “por dentro” sem reescrever o motor.
2. Dar o mesmo desconto percentual a cliente regular e a cliente do Simples.
3. Prometer “crédito cheio” na proposta sem verificar regime e extinção.
4. Ignorar frete/CT-e no mapeamento de destino e custos.
5. Liquidar estoque ST antigo com preço de estoque novo sem modelo de margem.
6. Tratar marketplace como “cliente único” sem ver o consumidor final e o DFe.

## Mini estudo de caso — dois canais

A **MotoSul Distribuidora** fatura R$ 1,2 mi/mês:

- 55% oficinas Simples;
- 30% redes/regulares;
- 15% B2C site.

Compras: 60% importação própria, 40% indústria nacional regular.

**Perguntas de comitê**

1. O híbrido do Simples (se a empresa for optante) melhora a retenção dos 30% regulares o bastante para pagar o compliance?
2. O IVA da importação em aberto cabe no limite de capital de giro com Selic/juros do cheque especial do fornecedor?
3. Em 2029, a tabela única nacional ainda faz sentido ou o destino exige **preço por UF de entrega**?

Documente a resposta com data de corte, premissas e responsável — o [protocolo de resposta segura](/como-usar#protocolo-de-resposta-segura) vale para o comitê também.

Próximo: [Checklist setorial](./checklist).
