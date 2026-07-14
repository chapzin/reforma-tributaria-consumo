# 33. Importadora de motopeças: IBS, CBS e nacionalização

Importar pastilhas, kits de transmissão, faróis, pneus, ESC/ECU, carenagens ou acessórios deixa de ser “só II + IPI + PIS/Cofins-Importação + ICMS”. A LC 214 coloca **IBS e CBS também na importação**, com fato gerador, contribuinte, local e pagamento próprios.

## Campo de incidência na importação

<StatusNormativo tipo="vigente">O art. 63 da LC 214 determina que o IBS e a CBS incidem sobre a importação de bens ou de serviços do exterior, realizada por pessoa física ou jurídica (ou entidade sem personalidade jurídica), ainda que não inscrita no regime regular e **qualquer que seja a finalidade**.</StatusNormativo>

Isso significa:

- importação **para revenda** de motopeças entra no campo;
- importação **para uso próprio** (ex.: oficina interna, marketing) também pode gerar débito;
- a ausência de inscrição no regime regular **não** afasta a incidência na importação.

Às importações aplicam-se, em regra, as normas das operações onerosas, **salvo** as regras específicas do capítulo de importação.

## Fato gerador em bens materiais (peças físicas)

Na importação de **bens materiais**, a lei trata a **entrada no território nacional** e detalha momentos como:

| Hipótese | Leitura operacional para motopeças |
|---|---|
| Despacho para consumo | Momento clássico da nacionalização da carga |
| Admissão temporária para utilização econômica | Relevante para amostras/ferramental com uso econômico, não só “mostra” |
| Situações de extravio / bagagem / manifesto sem DI | Menos frequente no atacado, mas o sistema aduaneiro precisa estar mapeado |

### O que **não** confundir

- **Desembaraço aduaneiro** (procedimento) × **fato gerador de IBS/CBS** (hipótese legal).
- **Pagamento do tributo** × **momento do fato gerador**. A lei vincula o **pagamento** do IBS/CBS na importação de bens materiais, em regra, à **entrega dos bens submetidos a despacho para consumo**, admitida antecipação — confira o artigo aplicável na consolidação vigente (em especial a disciplina dos arts. 63 e seguintes e o art. 76 na redação consolidada).

## Contribuinte

É contribuinte, entre outros, o **importador** — quem promove a entrada do bem no país. Na operação típica de motopeças:

- importador **por conta própria** (compra e revende);
- estruturas de **encomenda** / **conta e ordem** exigem mapear quem figura como importador no documento aduaneiro e no DFe de entrada/saída;
- trading e filial de marca estrangeira não fogem da disciplina só por “ser do grupo”.

## Alíquotas e base

- As alíquotas de IBS/CBS na importação acompanham as da **aquisição do respectivo bem no País** (mesma lógica de produto/tratamento).
- Não existe, no regime geral, um “IBS de importação” com percentual mágico diferente do interno só porque a origem é China, Índia, Taiwan ou Itália.
- **Imposto de Importação (II)** continua federal e **fora** da lógica de crédito do IVA dual.
- **IPI** na importação/industrialização segue a transição: em 2027, alíquotas tendem a zero, **exceto** preservação de produtos concorrentes da ZFM.
- **Imposto Seletivo**, se e quando a lei ordinária alcançar o item, incide conforme grupo e monofasia; **não** trate automaticamente “peça = veículo”.

<StatusNormativo tipo="simulacao">Qualquer planilha de “custo nacionalizado + 28%” é hipótese. II, IPI residual, IS, despesas aduaneiras, frete, seguro e base legal de cada tributo precisam ser decompostos item a item.</StatusNormativo>

## Crédito da importação para quem revende

No **regime regular**, o objetivo do IVA é permitir que o importador-revendedor **se credite** do IBS/CBS pagos na importação e debite nas saídas internas, tributando o valor adicionado.

### Quatro testes (iguais aos do capítulo de créditos)

1. **Subjetivo:** a empresa está no regular de IBS/CBS (ou híbrido do Simples)?
2. **Objetivo:** a peça se destina à atividade (revenda), não a uso pessoal vedado?
3. **Documental:** há lastro aduaneiro + DFe de entrada com campos de IBS/CBS corretos?
4. **Financeiro:** o débito da importação foi **extinto** (pago/compensado conforme a forma legal)?

### Armadilha clássica da importadora de motopeças

Pagar IBS/CBS na nacionalização, estocar, vender meses depois e **não reconciliar**:

- DI/DUIMP × valores de IBS/CBS;
- nota de entrada × apuração assistida;
- devolução ao exterior / reexportação / avaria;
- diferença de câmbio e despesas que **não** geram crédito de IBS/CBS.

## Local e destino

Na importação de bens materiais, a lei usa critérios próprios de **local** (entrega ao destinatário final, inclusive remessa internacional, e hipóteses de entreposto/extravio). Na **revenda interna** seguinte, o destino do IBS passa a ser o da **operação doméstica** (entrega/disponibilização ao cliente da distribuidora).

| Etapa | O que localizar |
|---|---|
| Importação | local legal da importação (entrada/entrega) |
| Venda B2B interestadual | local da entrega/disponibilização da peça ao adquirente |
| Venda para oficina em outro estado | não “fixar” alíquota só no CNPJ da matriz da importadora |

## Coexistência com tributos “da borda”

```text
Custo CIF + II + (IPI se houver) + (IS se houver)
+ despesas aduaneiras + frete interno
+ IBS/CBS da importação (com crédito no regular)
= estoque tributário e financeiro da importadora
```

### Checklist de nacionalização (mínimo)

- [ ] NCM e descrição técnica validados (não só catálogo do fornecedor).
- [ ] Tratamento: padrão / zero / redução / ZFM / IS (se aplicável).
- [ ] Quem é o importador jurídico e o tomador econômico.
- [ ] Forma e prazo de pagamento de IBS/CBS na importação.
- [ ] Conta contábil de crédito a apropriar × crédito bloqueado.
- [ ] Integração DI/DUIMP → ERP → NF-e de entrada/saída.
- [ ] Política de preço de lista **sem** embutir IBS/CBS na base deles (cálculo por fora).

## Simples Nacional na importadora

Importadora no Simples que **mantém IBS/CBS no DAS**:

- em regra **não** se credita como no regular;
- o comprador regular pode ter **crédito limitado** ao IBS/CBS devido no DAS e informado no documento;
- clientes grandes (concessionárias, redes) tendem a pressionar por **híbrido** ou preço menor.

Importadora no **híbrido** (IBS/CBS regular + demais no Simples):

- se aproxima da lógica de crédito/débito do IVA dual;
- exige ERP, apuração e compliance próximos do regime regular.

Veja o [módulo Simples](/simples/visao-geral) e a [decisão DAS × híbrido](/simples/decisao).

## Caso-espelho: kit de transmissão importado

1. Empresa importa 1.000 kits (NCM de transmissão/reposição).
2. Desembaraça para consumo; paga II e IBS/CBS da importação.
3. Estoca 60 dias; vende 700 kits para distribuidores multiestado e 300 para lojas.
4. Nas saídas, debita IBS/CBS; apropria crédito da importação (se regular e requisitos ok).
5. Devolução de 20 kits com defeito: estorno/ajuste de débito e crédito + procedimento aduaneiro se reexportar.

**Sem o passo 5 modelado no ERP, a apuração assistida e o estoque divergem.**

## Fontes primárias

- LC 214 consolidada — capítulo de **importação** (arts. 63 e seguintes) e **créditos** (arts. 47 e seguintes).
- [Receita — Entenda a RTC](https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/entenda).
- Regulamentos CBS (Decreto 12.955/2026) e IBS (Resolução CGIBS 6/2026) para procedimentos.
- NT NF-e 2025.002 — campos de IBS/CBS/IS no documento de saída/entrada.

Próximo: [Distribuição e revenda de motopeças](./distribuidora).
