# 35. Transição, ST de ICMS, IPI e estoque de motopeças

O maior risco operacional do setor **não** é só a alíquota futura do IBS. É operar **vários regimes ao mesmo tempo** sobre o mesmo SKU que ficou seis meses na prateleira.

## Linha do tempo aplicada a um SKU de reposição

| Período | O que o SKU “carrega” | Atenção da distribuidora/importadora |
|---|---|---|
| Até 2026 | PIS/Cofins, ICMS (possivelmente ST), IPI se houver | DFe com grupos IBS/CBS em teste; cadastro |
| 2027–2028 | CBS plena; IBS 0,1%; IPI zero (salvo ZFM); ICMS ainda vivo | Preço e crédito federal mudam; ST estadual continua |
| 2029–2032 | IBS crescente + ICMS residual (ST inclusa) | Dualidade máxima no motor e no preço |
| 2033 | IBS integral; ICMS extinto para fatos novos | Sanear legados de ST e contencioso |

Fonte da transição macro: [Receita — Entenda a RTC](https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/entenda).

## ICMS-ST no estoque: o que documentar **agora**

Para cada família de NCM relevante, registre:

1. **UF de entrada e de saída** e convênio/protocolo ST aplicável.
2. Se a compra foi **com ST retida** pelo fornecedor ou se a empresa é **substituta**.
3. Valor de ICMS-ST embutido no custo médio (se a política contábil assim trata).
4. Direito eventual a **ressarcimento** (saída para contribuinte, outro estado, perda, devolução) e o processo estadual.
5. Notas e XMLs que provam a base e a MVA/pauta usada.

<StatusNormativo tipo="tecnico">Sem trilha documental do ST no custo e nas saídas, a empresa não consegue explicar margem na transição nem defender ressarcimento. “O ERP mostra um total” não basta em fiscalização multiestadual.</StatusNormativo>

### Inventário de virada (recomendado a cada ano-chave: 2027, 2029, 2033)

| Campo | Exemplo |
|---|---|
| SKU / NCM / descrição | Kit relação 428 |
| Qtde e custo médio | 500 un / R$ 85 |
| Origem | Importação própria / compra SP / compra PR |
| ICMS próprio × ST no custo | R$ x / R$ y |
| PIS/Cofins no custo (se residual) | R$ z |
| Crédito IBS/CBS apropriável esperado | depende do regime e da entrada |
| Política de preço até liquidar o lote | manter / rebaixar / promo canal |

## IPI: quase zero em 2027, com armadilha ZFM

Para a maioria das motopeças **não** industriadas como “concorrentes da ZFM”, a expectativa legal é **alíquota de IPI zero a partir de 2027**, mantido o IPI no ordenamento.

### Quando o IPI ainda dói

- item também industrializado na ZFM e listado/enquadrado como concorrente;
- importação ou industrialização com classificação duvidosa;
- estoque comprado **com** IPI em 2026 e vendido em 2027 (efeito de margem e de comparação de preço de mercado).

Não diga ao comercial “acabou o IPI, pode baixar 5% em tudo” sem cruzar NCM e listas oficiais. Veja [Imposto Seletivo e ZFM](/impactos/seletivo-zfm).

## Imposto Seletivo e “peça de moto”

A LC 214 inclui **veículos** entre os grupos do IS. Isso **não** autoriza, por analogia de balcão, tributar automaticamente **peças, fluidos e acessórios** como se fossem o veículo.

Procedimento seguro:

1. Confirmar se o NCM/item está no campo do IS pela lei e anexos/atos.
2. Se **não** estiver, modelar só IBS/CBS (+ legados).
3. Se **estiver**, aplicar monofasia/momento próprios do IS e o efeito na base do IBS/CBS.
4. Registrar pendência de **alíquota** se a lei ordinária ainda não fixou o percentual.

<StatusNormativo tipo="interpretacao" titulo="Pendência">No corte de 14/07/2026, trate alíquotas do IS como dependentes de lei ordinária. Peças de reposição exigem confirmação positiva de incidência — não presunção por “setor automotivo”.</StatusNormativo>

## Dualidade 2029–2032: um motor, duas lógicas

No mesmo XML de venda interestadual de pastilha, a empresa pode precisar de:

- campos e valores de **IBS** (parcela da transição);
- cálculo de **ICMS** residual (próprio ou ST);
- **CBS** federal já em ritmo de cruzeiro;
- totalizadores e eventos de devolução coerentes com **ambos**.

### Testes mínimos de homologação

| Cenário | Por que importa em motopeças |
|---|---|
| Venda interna com ST vigente | Não “desligar” ST cedo demais |
| Venda interestadual para contribuinte | Destino IBS + ICMS residual |
| Venda para não contribuinte / B2C | NFC-e, split, preço |
| Devolução parcial de kit | Estorno dual |
| Transferência entre filiais | Local, crédito e ST intercompany |
| Entrada de importação no mês da venda | Crédito da importação × débito da saída |

## Créditos de ICMS acumulados

Distribuidoras com saldo credor de ICMS (exportação eventual, diferencial, ST a ressarcir, investimento) precisam do dossiê **antes** de 2032/2033. A LC 227 e a EC 132 tratam transição de créditos de ICMS com homologação e uso parcelado conforme a natureza — não com “vira crédito de IBS na virada do ano”.

## Perda, roubo e avaria no CD

Peças de moto sofrem avaria de embalagem, oxidação e furto. Avalie:

- estorno de crédito de IBS/CBS nas hipóteses legais;
- tratamento de ICMS/ST no estoque perdido;
- seguro e indébito;
- se a perda ocorreu **antes** ou **depois** da virada de regra.

## Plano de ação em 90 dias (estoque e ST)

1. Extrair top 80% do valor de estoque e faturamento por NCM.
2. Marcar quais estão em **ST** em cada UF de operação.
3. Separar lotes com **importação própria** × **compra nacional**.
4. Calcular, por lote, “tributo embutido legado” vs “tributo novo esperado”.
5. Definir política comercial de liquidação de estoque antigo.
6. Abrir projeto de ressarcimento/homologação de ICMS com dono e prazo.
7. Homologar no ERP os cenários dual 2029 (mesmo que a data pareça distante: o cadastro se faz agora).

## Caso-espelho: liquidação de estoque ST

Em dezembro de 2028 a empresa tem R$ 2 mi de estoque com ST embutida na média de R$ 0,18 por real de custo. Em 2029 o IBS entra com 10% da alíquota de transição e o ICMS cai para 90%.

**Perguntas**

- O preço de lista de janeiro/2029 cobre a dualidade sem perder competitividade para quem importa “fresco”?
- Há risco de concorrente precificar só com a lógica nova enquanto você carrega ST antiga?
- O comercial sabe explicar a diferença de margem por lote (FIFO/custo médio)?

Próximo: [Preço, crédito e caixa](./preco-credito-caixa).
