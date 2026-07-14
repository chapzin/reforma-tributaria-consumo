# 34. Distribuidora de motopeças: destino, ST e clientes

A distribuidora típica compra de importador ou indústria, mantém CD multiestado e vende para **oficinas, lojas, e-commerce, frotas e, às vezes, consumidor final**. Sob o IVA dual, o lucro deixa de depender de “comprar com ST e vender com margem opaca”; passa a depender de **crédito limpo, destino correto e preço negociado com quem tem (ou não) direito a crédito**.

## O que muda em relação ao ICMS “clássico” do setor

| Antes (visão simplificada) | Depois (visão IBS/CBS + transição) |
|---|---|
| ST em vários estados “fecha” o ICMS na cadeia | ST de ICMS **não** replica automaticamente no IBS; a transição esvazia o ICMS gradualmente |
| Crédito de ICMS e PIS/Cofins com regras distintas | Crédito de IBS e de CBS **separados**, com DFe + extinção do débito do fornecedor |
| Interestadual com alíquotas e benefícios regionais | Destino do consumo orienta parcelas do IBS; legislação **uniforme** de regras materiais |
| Preço “cheio” embutindo cascata | Cálculo **por fora**; cliente B2B enxerga crédito potencial |
| Cadastro “bom o bastante” para autorizar NF-e | cClassTrib/CST e apuração assistida **penalizam** cadastro sujo |

## Incidência na revenda

Venda onerosa de peça móvel está no campo amplo de IBS/CBS. O **momento** geral é o do fornecimento (entrega/disponibilização). O **local** da operação com bem móvel, em regra, segue a **entrega ou disponibilização** ao adquirente — base do princípio do destino.

### Matriz prática de destino (distribuidora)

| Operação | Evidência mínima | Risco se errar |
|---|---|---|
| Entrega no CD do cliente | NF-e, ROMANEIO, CTE/MDFe, comprovante | IBS de destino errado |
| Retira no balcão (cliente de outro estado) | Quem retirou, endereço e natureza da operação | Disputa de local e prova |
| Drop shipping (envia da importadora ao cliente) | Contrato tripartite, emitente, destinatário | Crédito e responsabilidade desalinhados |
| E-commerce B2C | Endereço de entrega e meios de pagamento | Rejeição de dados e split |

## Substituição tributária de ICMS: o elefante na sala

Muitas UFs sujeitam **peças e acessórios automotivos/motociclísticos** a ST (MVA, pauta, convênios). Enquanto o ICMS existir na transição:

1. a empresa pode **continuar** apurando ST nas saídas/entradas conforme a legislação estadual vigente;
2. o **IBS** não herda automaticamente a monofasia da ST;
3. estoques comprados com ST embutido precisam de **política de preço e inventário** na virada de percentuais (2029–2033);
4. créditos e ressarcimentos de ST (convênios, destinação a contribuinte, devolução) continuam com regras **próprias do ICMS**, paralelas ao IBS.

<StatusNormativo tipo="interpretacao">Não existe, no corte deste guia, um “conversor oficial universal” de saldo de ST em crédito de IBS. Trate ST como legado a sanear e a coexistir; não como input automático do novo IVA.</StatusNormativo>

Veja [Transição, ST e estoque](./transicao-st-estoque).

## Clientes: a matriz de negociação

### Cliente no regime regular (concessionária, rede, indústria de customização)

- Quer **crédito integral** de IBS/CBS destacado (cumpridos os requisitos).
- Compara fornecedores pelo **custo líquido** (preço − crédito), não só pelo bruto.
- Pressiona fornecedor do Simples no DAS a migrar para **híbrido** ou a baixar preço.

### Cliente no Simples (oficina e loja típicas)

- Se mantém IBS/CBS no DAS, **não** se credita como no regular.
- O que importa é **preço de aquisição** e capital de giro.
- Ainda assim, a qualidade do DFe importa para o **seu** (distribuidor) débito e para a cadeia posterior se houver revenda.

### Consumidor final (B2C)

- Não se credita.
- Transparência de tributo por fora e split no pagamento mudam a experiência de checkout e a margem.

## Fornecedores: qualidade fiscal vira critério de compra

Dois importadores cotam a mesma pastilha a R$ 40:

| Fornecedor | DFe / extinção | Efeito para a distribuidora regular |
|---|---|---|
| A | XML correto, débito extinto | Crédito apropriável no prazo |
| B | Classificação errada, atraso de pagamento/split | Crédito bloqueado ou em disputa; custo financeiro |

Inclua no score de compras: **regime, cClassTrib histórico, taxa de divergência e idade média de crédito bloqueado**.

## Simples na própria distribuidora

Distribuidoras de motopeças frequentemente estão no **Anexo I** (comércio) do Simples, com sublimite e interestadual.

| Opção | Quando costuma ser discutida |
|---|---|
| **IBS/CBS no DAS** | Cliente majoritariamente B2C/Simples; compliance enxuto; margem absorve crédito limitado do cliente regular |
| **Híbrido** | Grande fatia B2B regular; clientes exigem crédito “cheio”; ERP já maduro |

Não decida só por “alíquota do DAS × 28%”. Modele:

- % da receita B2B regular sensível a crédito;
- créditos de compras (importação/indústria) no híbrido;
- custo de ERP/contabilidade;
- split e caixa;
- três hipóteses de alíquota-padrão.

Use o [simulador de cadeia](/simples/das-creditos) e o [roteiro de decisão](/simples/decisao).

## Preço por fora na prática comercial

Contrato antigo: “preço R$ 100 com todos os impostos inclusos”.

No IVA dual, a conversa saudável é:

1. preço da mercadoria **sem** IBS/CBS;
2. IBS e CBS destacados;
3. política de reajuste se alíquota de referência/ente mudar;
4. tratamento de devolução e garantia (comum em peças).

Sem cláusula clara, a margem some na transição 2027 e 2029.

## Garantia, devolução e bonificação

O setor vive de:

- **devolução por incompatibilidade** (ano/modelo de moto);
- **garantia de fabricante**;
- **bonificação** e brinde de campanha;
- **remoção de peça** em consignação (menos formalizado).

Cada uma exige:

- evento de DFe (devolução/ajuste);
- estorno de crédito/débito;
- impacto em ST residual, se ainda houver ICMS;
- reconciliação com financeiro (crédito em conta, troca, vale).

## Caso-espelho: CD multiestado

Distribuidora em SP vende:

- 40% para oficinas em SP (muitas no Simples);
- 35% para lojas no NE (mix regular/Simples);
- 25% e-commerce B2C.

**Missão de projeto**

1. Segmentar receita por regime do cliente e UF de entrega.
2. Mapear NCMs top 200 por faturamento e qualquer tratamento especial.
3. Listar convênios ST ainda vigentes por UF de saída/entrada.
4. Simular 2027 (CBS) e 2029 (10% IBS) no preço de lista e no custo líquido do cliente regular.
5. Definir se a política comercial terá **duas tabelas** (B2B regular × demais) ou desconto explícito de crédito.

## Ligações internas

- [Incidência, momento e local](/consumo/incidencia)
- [Créditos](/impactos/creditos)
- [Documentos e apuração](/operacao/documentos)
- [Preço, crédito e caixa no setor](./preco-credito-caixa)

Próximo: [Transição ST, IPI e estoque](./transicao-st-estoque).
