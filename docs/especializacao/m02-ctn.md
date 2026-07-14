# Módulo 2 — Código Tributário Nacional e Legislação Específica

**20 horas** · Pontos CFC (indicativos): AUD, PERITO, PROGP, PRORT — 20  
**Objetivo:** usar o CTN como “sistema operacional” da análise fiscal e enxergar ilícitos sem alarmismo.

---

## Aula 01 — Estrutura e aplicação do CTN

### Por que o CTN ainda é o eixo

Mesmo com EC 132 e LC 214, o **CTN (Lei 5.172/1966)** continua a moldar:

- conceito de tributo e espécies;  
- obrigação principal e acessória;  
- crédito tributário, lançamento, suspensão, extinção, exclusão;  
- responsabilidade tributária;  
- administração tributária (fiscalização, certidões, sigilo).

### Mapa de leitura para o analista

| Livro / tema CTN | Pergunta operacional |
|---|---|
| Sistema tributário | quem pode instituir o quê? |
| Competência | o ente invadiu competência alheia? |
| Obrigação tributária | quem é sujeito passivo e o que deve? |
| Crédito tributário | o crédito está constituído, suspenso, extinto? |
| Administração | o que o Fisco pode exigir em fiscalização? |

### Aplicação do CTN “no chão de fábrica”

1. Fornecedor some: responsabilidade de terceiros (arts. sobre solidariedade/sucessão).  
2. Empresa não emite nota: obrigação acessória + possíveis penalidades.  
3. Compensação e parcelamento: modalidades de **extinção/suspensão**.  
4. Denúncia espontânea: efeitos sobre multa (com limites da jurisprudência e leis especiais).

### Exercício

Pegue um auto de infração (real anonimizado ou modelo) e marque: dispositivo do CTN citado, espécie de lançamento e se a defesa ataca **fato**, **base** ou **procedimento**.

---

## Aula 02 — Práticas de contabilidade e legislação fisco-tributária

### Duas contabilidades que precisam conversar

| Visão | Foco | Artefato |
|---|---|---|
| Contábil (CPC/NBC) | patrimônio e resultado | ECD, balancetes |
| Fiscal | bases e créditos legais | EFD, ECF, apurações |

O analista fiscal **não** é “só SPED”. Ele garante que:

- receita fiscal e contábil tenham **pontes** (não identidade cega);  
- créditos tributários tenham **lastro** documental;  
- provisões e contingências reflitam riscos reais (CPC 25 / NBC TG 25).

### Rotinas de integração

1. Plano de contas com centros de custo e natureza fiscal.  
2. Parametrização de CFOP/CST/CSOSN/cClassTrib por operação.  
3. Conciliação mensal: razão × apuração × guias.  
4. Trilha de auditoria: quem alterou cadastro e quando.

### Armadilha

Ajustar só o SPED para “fechar o PVA” sem ajustar o fato contábil e o XML. Na malha moderna, o cruzamento é multiarquivo.

---

## Aula 03 — Ilícitos e punibilidade na esfera tributária

### Distinções que evitam erro grave de comunicação

| Conceito | O que é | Consequência típica |
|---|---|---|
| Inadimplemento | não pagar tributo declarado | encargos, cobrança |
| Ilícito administrativo-fiscal | infração à legislação tributária | multa, auto, representação |
| Crime contra a ordem tributária | tipificação penal (ex.: Lei 8.137/1990) | esfera criminal, com pressupostos próprios |
| Elisão | economia lícita com suporte em forma e substância | risco de contestação se houver abuso |
| Evasão / sonegação | ocultar fato, falsificar, fraudar | multa + possíveis desdobramentos penais |

<StatusNormativo tipo="interpretacao">Classificar conduta como crime exige análise jurídica específica. O analista documenta fatos, valores e indícios; não emite “sentença” em relatório interno sem suporte.</StatusNormativo>

### Sinais de alerta (red flags) para compliance

- vendas sem DFe ou com DFe de terceiros;  
- créditos de notas canceladas/inidôneas;  
- subfaturamento sistemático vs. mercado;  
- software paralelo de caixa;  
- retenções não recolhidas com fluxo financeiro omitido;  
- retificação em massa sem dossiê.

### O que o relatório deve conter

1. Fato observado e evidência (chave, registro SPED, extrato).  
2. Norma potencialmente violada.  
3. Materialidade e período.  
4. Recomendação (retificar, recolher, abrir consulta, afastar fornecedor).  
5. Status: ERRO / ALERTA / INFO — alinhado à prática de auditoria digital ([Módulo 9](./m09-auditoria-digital)).

---

## Aula 04 — Estudos de casos práticos e exemplos reais

### Caso A — Crédito de ICMS sem entrada física

**Fato:** NF-e de compra escriturada; estoque e romaneio não batem.  
**Análise:** crédito condiciona-se à operação real e documentação idônea.  
**Ação:** glosar preventivamente, apurar fornecedor, avaliar denúncia espontânea.

### Caso B — PIS/Cofins monofásico vendido como “crédito normal”

**Fato:** CST de entrada gera crédito em produto monofásico na saída.  
**Análise:** regime monofásico altera a lógica de crédito/débito.  
**Ação:** revisar NCM/CST, recalcular, retificar EFD-Contribuições.

### Caso C — ISS no município errado

**Fato:** serviço de engenharia retido no tomador de outro município.  
**Análise:** LC 116 + legislação local + local da prestação.  
**Ação:** revisar contratos e cadastro de serviço; avaliar bitributação e restituição.

### Caso D — “Planejamento” sem substância

**Fato:** troca de CFOP e interposição de empresa do grupo sem função econômica.  
**Análise:** risco de desconsideração e multa.  
**Ação:** mapear propósito negocial, fluxos reais e preços de transferência internos.

### Método de resolução (use sempre)

1. Fatos confirmados × fatos faltantes.  
2. Normas e artigos.  
3. Hipóteses numéricas.  
4. Cenários.  
5. Conclusão **condicionada**.  
6. Controles e data de revisão.

É o mesmo esqueleto dos [casos do laboratório RTC](/laboratorio/casos).

---

## Checklist de conclusão do Módulo 2

- [ ] Navego no CTN por obrigação, crédito e responsabilidade.  
- [ ] Explico a ponte contábil × fiscal.  
- [ ] Diferencio elisão, evasão e crime (com cautela de linguagem).  
- [ ] Redijo um mini-parecer com evidência e recomendação.  
- [ ] Aplico o método de 6 passos em um caso.

**Próximo:** [Módulo 3 — Regimes e administração fiscal](./m03-regimes).
