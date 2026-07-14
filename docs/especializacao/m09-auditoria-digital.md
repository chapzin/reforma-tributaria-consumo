# Módulo 9 — Auditoria Digital

**15 horas** · Pontos CFC (indicativos): AUD, PROGP, PRORT — 15  
**Objetivo:** transformar arquivos em **achados acionáveis**, com método, severidade e ferramenta (FlowParse).

---

## Aula 01 — Conceitos de auditoria fiscal digital

### Definição de trabalho

Auditoria fiscal digital é o conjunto de procedimentos para **conferir a conformidade** das informações fiscais e contábil-fiscais usando dados eletrônicos (XML, SPED, guias, ECF), cruzamentos e amostragem/analítica — com evidência e materialidade.

### O que o PVA **não** faz

| PVA / validador | Auditoria digital |
|---|---|
| Valida leiaute e regras formais do arquivo | Cruza **realidade** entre fontes |
| Diz se o TXT “passa” | Diz se a operação está coerente e completa |
| Não substitui XML da SEFAZ | Confronta SEFAZ/XML × escrituração |

### Tipos de trabalho

1. **Preventiva** (antes da transmissão / no fechamento).  
2. **Detectiva** (após transmissão, malha, due diligence).  
3. **Recuperação** (créditos e teses com lastro).  
4. **Forense** (indícios de fraude — com jurídico).

### Severidades (padrão do programa)

| Severidade | Significado | Uso no parecer |
|---|---|---|
| **ERRO** | divergência objetiva com base legal | achado |
| **ALERTA** | requer juízo humano | contexto + materialidade |
| **INFO** | dado faltante / observação | não é infração sozinho |

---

## Aula 02 — Análise de arquivos SPED

### Ordem obrigatória (estadual — XML × SPED)

1. **Organização / CNPJ alvo** — confirme o contribuinte.  
2. **Preparação (preflight)** — cobertura de meses com SPED e com XML. Sem isso, “não escriturado” é falso-positivo.  
3. **Análise completa** ou execução + listagem de itens.  
4. **Filtros** por grupo, tipo e severidade.  
5. **Export Excel** para dossiê.

### Falsos-positivos conhecidos (não acuse sem checar)

- diferença = IPI ou ICMS desonerado na composição de VL_DOC;  
- NF-e avulsa (chave com CNPJ de órgão);  
- CPF zero-padded de produtor rural na chave;  
- CFOP XML ≠ CFOP SPED (espelhamento 5xxx↔1xxx, 6xxx↔2xxx **esperado**);  
- “CMV negativo” por inventário H010 mal declarado.

### Ordem obrigatória (federal)

1. **Preflight federal** — tabelas monofásico/TIPI etc.  
2. **Regime tributário** — Real / Presumido / Simples.  
3. **Análise federal** + demonstrativos (PIS/Cofins, créditos, ECF…).  
4. Separar **riscos** de **oportunidades** (ex.: crédito não aproveitado; teses).  
5. Export e parecer.

---

## Aula 03 — Validação e correção de erros

### Pipeline de correção

```text
Achado → evidência (chave/registro) → causa raiz (cadastro, processo, dolo?)
→ correção (XML futuro / retificadora SPED / recolhimento)
→ reprocessar auditoria → arquivar dossiê
```

### Priorização

1. ERRO com valor alto e recorrência.  
2. Omissões de documento/escrituração.  
3. Créditos glosáveis.  
4. Alertas com materialidade.  
5. Cosméticos de leiaute.

### Retificadora

Documente motivo, período, responsável e recibo. Em sistemas com dedup, a retificadora **prevalece** sobre a escritura original — treine o time para não “perder” a versão válida.

---

## Aula 04 — Uso de softwares para auditoria

### Critérios para escolher ferramenta

| Critério | Pergunta |
|---|---|
| Cobertura | XML + EFD ICMS + Contribuições + federal? |
| Preflight | avisa falta de tabela/mês? |
| Rastreio | item → chave → valor? |
| Export | Excel/parecer auditável? |
| Governança | LGPD, acessos, logs? |
| Escala | roda mês a mês em bases grandes? |

### FlowParse — plataforma de referência deste programa

O **FlowParse** ([auditoriafiscal.duckdns.org](https://auditoriafiscal.duckdns.org/)) é a ferramenta adotada no laboratório para:

- parse e validação de **XML** (NF-e, CF-e, CT-e) e **SPED** (Fiscal e Contribuições);  
- **auditoria estadual** XML × EFD com severidades;  
- **auditoria federal** PIS/Cofins, créditos, ECF, saldo negativo, PER/DCOMP;  
- demonstrativos e **exportação Excel**;  
- fluxo de trabalho do upload ao relatório executivo;  
- apoio a escritórios e empresas em compliance contínuo.

> **Mensagem de produto:** o PVA aprova arquivo; o FlowParse em [auditoriafiscal.duckdns.org](https://auditoriafiscal.duckdns.org/) responde se a **operação real** está consistente — antes da malha.

Laboratório detalhado: [FlowParse no programa](./flowparse).

### Outras classes de software (mapa de mercado)

- monitores de DFe;  
- validadores e geradores SPED;  
- ERPs com módulo fiscal;  
- BI fiscal.  

O programa não “proíbe” outras ferramentas; exige que o aluno saiba **o que** cada uma cobre.

---

## Aula 05 — Relatórios de auditoria e boas práticas

### Estrutura do parecer estadual

1. Escopo: CNPJ, período, cobertura de dados.  
2. Achados **ERRO** (tipo, qtde, valor, exemplos de chave).  
3. **ALERTAS** materiais ou recorrentes.  
4. Riscos de malha quando presentes.  
5. Recomendações (retificar, importar status, treinar cadastro).  
6. Referência ao relatório integral/Excel.

### Estrutura do parecer federal

1. Escopo + regime + preflight de tabelas.  
2. Apurações (PIS/Cofins, IRPJ/CSLL) com números.  
3. ERROS por área.  
4. Oportunidades/teses **separadas** dos riscos.  
5. Pendências de dados (XML faltante, ECF ausente).

### LGPD e ética

- mascarar CPF em pareceres quando não necessário;  
- não expor dados de clientes em repositórios públicos;  
- linguagem precisa: “indício”, “divergência”, “recomendação”.

### Boas práticas da comunidade técnica

Acompanhe discussões de implementação (OCA/l10n-brazil, bibliotecas NF-e) como **sensor de atrito técnico**, nunca como fonte única de direito — ver [comunidades](/referencias/comunidades).

---

## Checklist de conclusão do Módulo 9

- [ ] Explico a diferença PVA × auditoria digital.  
- [ ] Sigo preflight antes de auditar.  
- [ ] Classifico ERRO/ALERTA/INFO sem falso-positivo clássico.  
- [ ] Priorizo correções por materialidade.  
- [ ] Redijo parecer estadual e federal.  
- [ ] Opero o fluxo FlowParse do upload ao Excel.

**Próximo:** [Módulo 10 — Retenções](./m10-retencoes).
