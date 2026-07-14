# Módulo 3 — Regimes Tributários e Administração Fiscal

**16 horas** · Pontos CFC (indicativos): AUD, PERITO, PROGP, PRORT — 16  
**Objetivo:** escolher, monitorar e administrar regimes com visão de caixa, risco e dados.

---

## Aula 01 — Organização dos regimes tributários

### Matriz comparativa (visão do analista)

| Dimensão | Simples | Presumido | Real |
|---|---|---|---|
| IRPJ/CSLL | no DAS (regras próprias) | presunção sobre receita | lucro real |
| PIS/Cofins | no DAS | em regra cumulativo | em regra não cumulativo |
| ICMS/ISS/IPI | regras do SN / anexos | regras gerais | regras gerais |
| Complexidade acessória | menor em alguns pontos | média | alta |
| Crédito na cadeia B2B | limitado / híbrido na RTC | depende do tributo | em geral mais amplo no consumo federal atual |

### Critérios de escolha (não só “alíquota cheia”)

1. Receita projetada e sublimites.  
2. Margem e estrutura de custos (folha vs. insumos).  
3. Perfil de clientes (B2B regular sensível a crédito).  
4. Créditos de ICMS/PIS/Cofins e monofasia.  
5. Custo de compliance e sistemas.  
6. Transição RTC (DAS × híbrido IBS/CBS) — [decisão Simples](/simples/decisao).

### Entregável da aula

Ficha de regime da empresa: CNAE, anexos, fator R (se houver), PIS/Cofins, IE, benefícios, data da última opção e responsável.

---

## Aula 02 — Gestão tributária contábil

### O “cockpit” do analista

| Painel | Pergunta | Fonte |
|---|---|---|
| Caixa tributário | quanto sai em guias nos próximos 30 dias? | apurações + calendário |
| Créditos | o que está apropriado, bloqueado, a recuperar? | EFD, PER/DCOMP, controles |
| Documentos | cobertura XML × SPED | FlowParse / monitor DFe |
| Malha | o que o Fisco já cruza? | intimações, SIGA, e-CAC |
| Pessoas | quem aprova exceção de CFOP/CST? | matriz de alçada |

### Rotina semanal sugerida

- Segunda: divergências de XML e status SEFAZ.  
- Quarta: créditos e parâmetros sensíveis.  
- Sexta: filas de retificação e obrigações da semana seguinte.

### KPIs

- dias de fechamento fiscal;  
- % obrigações sem reprocessamento;  
- valor de crédito em risco;  
- tempo médio de resolução de ERRO de auditoria.

---

## Aula 03 — Política fiscal e administração tributária

### Dois lados da mesa

**Administração tributária (Fisco):** lançar, fiscalizar, arrecadar, combater fraude, usar malhas digitais.  
**Administração fiscal (empresa):** cumprir, documentar, contestar com base, planejar com ética.

### Instrumentos que o analista deve conhecer

- consulta fiscal / solução de consulta;  
- parcelamentos e transações;  
- regimes especiais e benefícios (com contrapartidas);  
- processos administrativos e prazos;  
- certidões (CND/CPEND) e impacto em contratos.

### Na era do SPED e da RTC

O Fisco deixa de depender só da visita presencial. O analista passa a trabalhar com **prevenção de malha**: consistência entre DFe, EFD, DCTFWeb, ECF e, em breve, apuração assistida de IBS/CBS ([documentos e apuração](/operacao/documentos)).

---

## Aula 04 — Planejamento tributário

### Definição responsável

Planejamento é a organização **lícita** de negócios e formas jurídicas para reduzir carga ou diferir tributos, com **substância econômica**, documentação e governança.

### O que **não** é planejamento

- omitir receita;  
- adulterar XML/SPED;  
- usar “nota fria”;  
- simular operação para gerar crédito.

### Roteiro de um estudo de planejamento

1. Diagnóstico da carga atual por tributo e operação.  
2. Mapear alternativas legais (regime, local, contrato, cadeia).  
3. Quantificar cenários (melhor / base / pior).  
4. Avaliar risco de autuação e custo de defesa.  
5. Aprovar em comitê (fiscal + contábil + jurídico + negócio).  
6. Implementar com controles e data de revisão.

### Conexão com a RTC

A partir de 2026–2033, planejamento de consumo exige: destino, crédito, split, Simples híbrido, estoques ST e preço por fora. Use o [projeto de adequação](/operacao/projeto-adequacao) e o [Módulo 13](./m13-reforma).

---

## Checklist de conclusão do Módulo 3

- [ ] Comparo regimes além da alíquota nominal.  
- [ ] Mantenho cockpit com KPIs e filas.  
- [ ] Conheço instrumentos de relação com o Fisco.  
- [ ] Documento planejamento com substância e cenários.  
- [ ] Incluo a RTC na agenda de opções societárias/regime.

**Próximo:** [Módulo 4 — ICMS](./m04-icms).
