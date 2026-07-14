# Módulo 12 — Compliance Tributário e Gestão de Riscos

**8 horas** · Pontos CFC (indicativos): AUD, CMN, PERITO, PREVIC, PROGP, PRORT, SUSPEP — 8  
**Objetivo:** implantar conformidade contínua, não só “apagar incêndio de obrigação”.

---

## Aula 01 — Introdução ao compliance tributário

### Conceito

Compliance tributário é o conjunto de políticas, processos, controles e cultura que asseguram o **cumprimento das obrigações** e a **prevenção de riscos** fiscais, com rastreabilidade e resposta a desvios.

### Pilares

1. **Prevenir** — cadastro, alçadas, treinamento.  
2. **Detectar** — auditoria digital, conciliações, denúncias internas.  
3. **Responder** — retificar, recolher, comunicar, disciplinar.  
4. **Melhorar** — causa raiz e redesign de processo.

### Relação com ESG e governança

Tributos entram em risco reputacional, cláusulas de contratos e due diligence de M&A. O analista fiscal vira peça de **governança**, não só de “fechamento”.

---

## Aula 02 — Práticas de conformidade

### Programa mínimo viável (PMV) de compliance fiscal

| Elemento | Exemplo |
|---|---|
| Política | código de conduta fiscal (proíbe nota fria, caixa 2) |
| Matriz de riscos | operações, UFs, monofasia, ST, retenções, RTC |
| Controles | maker-checker em CFOP/CST, checklist de fechamento |
| Treinamento | balcão, compras, fiscal, TI |
| Canal | reporte de irregularidade |
| Monitoramento | KPIs + auditoria digital mensal |
| Evidências | dossiês e logs |

### Rotina mensal

1. Calendário de obrigações.  
2. Preflight de cobertura XML/SPED.  
3. Auditoria amostral ou completa (FlowParse).  
4. Fila de ERROS com dono e prazo.  
5. Ata de fechamento com exceções aprovadas.

---

## Aula 03 — Gestão de riscos fiscais

### Classificação

| Risco | Exemplo | Tratamento |
|---|---|---|
| Operacional | CFOP errado em massa | automação + treino |
| Normativo | mudança de convênio ST | observatório de normas |
| Tecnológico | schema NF-e rejeitando | homologação e versionamento |
| Fraude | fornecedor inidôneo | due diligence e bloqueio |
| Transição RTC | dualidade ICMS+IBS | projeto de adequação |

### Matriz probabilidade × impacto

Priorize riscos de **alto impacto** (crédito indevido material, omissão de receita, ST em multi-UF) mesmo com probabilidade média.

### Indicadores de risco

- valor de ERROS em aberto > X dias;  
- % compras de CNPJs com restrição;  
- divergência receita DFe × SPED;  
- intimações / malha no período.

### Conexão com ilícitos

Revise [Módulo 2 — ilícitos](./m02-ctn) e mantenha linguagem cautelosa em relatórios.

---

## Aula 04 — Ferramentas e softwares de compliance tributário

### Camadas de ferramenta

```text
ERP / emissor DFe
    → Monitor / repositório de XML
    → SPED (geração e PVA)
    → Auditoria digital (FlowParse)
    → BI / painéis de risco
    → GRC / workflows de aprovação
```

### FlowParse no compliance contínuo

O **FlowParse** ([auditoriafiscal.duckdns.org](https://auditoriafiscal.duckdns.org/)) atua como **motor de detecção** e evidência:

- auditoria completa por CNPJ/ano ou mês a mês;  
- cruzamentos estaduais e federais;  
- exportação para comitê de compliance;  
- redução do tempo entre o erro e a correção;  
- suporte a escritórios que operam **carteira multi-CNPJ**.

Combine com o [laboratório FlowParse](./flowparse) e o [projeto de adequação RTC](/operacao/projeto-adequacao).

### Critérios de contratação (para o aluno argumentar com a diretoria)

1. Cobertura de arquivos e cruzamentos.  
2. Rastreabilidade do achado.  
3. Segurança e LGPD.  
4. Custo × materialidade do risco.  
5. Capacitação da equipe (este programa).

---

## Checklist de conclusão do Módulo 12

- [ ] Defino política e matriz de riscos fiscais.  
- [ ] Opero rotina mensal de detecção e resposta.  
- [ ] Priorizo riscos por impacto e evidência.  
- [ ] Integro FlowParse (ou equivalente) ao calendário de compliance.  
- [ ] Reporto à gestão em linguagem de risco e ação.

**Próximo:** [Módulo 13 — Reforma Tributária](./m13-reforma).
