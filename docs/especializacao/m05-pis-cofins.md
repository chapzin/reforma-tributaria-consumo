# Módulo 5 — Tributos Indiretos e Obrigações Acessórias: PIS/Cofins

**24 horas** · Pontos CFC (indicativos): AUD, PERITO, PROGP, PRORT — 24  
**Objetivo:** operar as contribuições sociais sobre o faturamento/receita com domínio de crédito, monofasia e escrituração — e entender a **substituição pela CBS em 2027**.

---

## Aula 01 — Fundamentos das contribuições

### Natureza

PIS e Cofins são contribuições sociais federais incidentes, em regra, sobre o faturamento/receita, com regimes **cumulativo** e **não cumulativo**, além de monofasia, alíquota zero e substituições setoriais.

### Quem está em qual regime (regra prática)

| Regime IR | PIS/Cofins (regra geral) |
|---|---|
| Lucro Presumido | cumulativo |
| Lucro Real | não cumulativo |
| Simples | dentro do DAS (regras próprias) |
| Exceções legais | sempre verificar legislação específica |

### Base e alíquotas (visão de trabalho)

- cumulativo: bases e alíquotas próprias (ex.: 0,65% + 3%);  
- não cumulativo: bases e alíquotas próprias (ex.: 1,65% + 7,6%) com créditos;  
- monofásico: alíquotas concentradas na indústria/importador conforme NCM/lei.

<StatusNormativo tipo="tecnico">Percentuais e bases mudam por lei e por produto. Confirme a tabela/ato vigente no período da apuração — não memorize só o “9,25%”.</StatusNormativo>

### Fim na RTC

PIS e Cofins são **extintos em 2027** com a entrada plena da **CBS** (ainda com regras de transição e compensações). O analista precisa manter competência no legado **e** na CBS. Ver [tributos vigentes](/impactos/tributos-vigentes) e [IVA dual](/consumo/iva-dual).

---

## Aula 02 — Crédito e apuração do PIS/Cofins

### Não cumulativo: a lógica do crédito

No regime não cumulativo, créditos decorrem de custos, despesas e encargos **permitidos em lei** (não de qualquer gasto contábil). Conceitos clássicos de insumo, depreciação, energia, aluguéis etc. exigem leitura da legislação e da jurisprudência aplicável ao caso.

### Testes do analista

1. A pessoa jurídica está no não cumulativo naquele período?  
2. A aquisição gera crédito (CST, NCM, natureza)?  
3. Há monofasia/alíquota zero que **afasta** crédito?  
4. Documento e escrituração estão corretos (EFD-Contribuições)?  
5. Crédito foi utilizado, transferido ou pedido em PER/DCOMP?

### Apuração e arquivos

- blocos de apuração (M200/M600 e correlatos);  
- receitas por CST;  
- créditos de entrada;  
- conciliação com DCTF e contabilidade;  
- demonstrativos de saldo.

### FlowParse (auditoria federal)

Use preflight de tabelas (monofásico, TIPI), regime tributário e demonstrativos de apuração/créditos. Separar:

- **risco** (crédito indevido → impacto negativo);  
- **oportunidade** (crédito não aproveitado / teses com lastro).

Detalhes: [Módulo 9](./m09-auditoria-digital) e [FlowParse](./flowparse).

---

## Aula 03 — Operações diferenciadas

### Temas que mais geram glosa e recuperação

| Tema | Por que importa |
|---|---|
| Monofasia (bebidas, cosméticos, autopeças em hipóteses, etc.) | NCM/CST errado destrói apuração |
| Alíquota zero / isenção | efeito em crédito anterior |
| Exportação | desoneração e manutenção de créditos nas condições legais |
| Exclusões de base (ICMS na base — Tema 69 e desdobramentos) | impacto material histórico e controles |
| ICMS-ST na base (teses) | oportunidade vs. risco — tratar como tese documentada |
| Importação | contribuições na nacionalização + crédito |
| Receitas financeiras e exclusões | depende do regime e da lei do período |

### Rotina de cadastro de item

1. NCM e descrição técnica.  
2. Tabela monofásica / ato vigente.  
3. CST de entrada e de saída.  
4. Natureza de receita na EFD-Contribuições.  
5. Teste de crédito.  
6. Dono da classificação e data de revisão.

### Estudo de caso

Comércio atacadista compra item monofásico da indústria e revende para varejo.  
**Missão:** desenhar CST de entrada/saída, créditos, EFD e o que acontece com a CBS em 2027 se o tratamento setorial mudar.

---

## Checklist de conclusão do Módulo 5

- [ ] Diferencio cumulativo, não cumulativo e monofásico.  
- [ ] Aplico testes de crédito com lastro legal e documental.  
- [ ] Parametrizo NCM/CST e naturezas de receita.  
- [ ] Concilio EFD-Contribuições × DCTF × contábil.  
- [ ] Explico a substituição pela CBS em 2027 sem apagar o legado.

**Próximo:** [Módulo 6 — ISS](./m06-iss).
