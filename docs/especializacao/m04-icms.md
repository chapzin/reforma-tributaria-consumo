# Módulo 4 — Tributos Indiretos e Obrigações Acessórias: ICMS

**24 horas** · Pontos CFC (indicativos): AUD, PERITO, PROGP, PRORT — 24  
**Objetivo:** dominar a lógica estadual do consumo **ainda vigente na transição** e preparar a coexistência com o IBS.

---

## Aula 01 — Fundamentos do ICMS

### Competência e campo

Imposto estadual/distrital sobre circulação de mercadorias, prestações de transporte interestadual/intermunicipal e de comunicação, com contornos constitucionais e da **LC 87/1996** (e alterações), além do regulamento de cada UF.

### Elementos que o analista parametriza

| Elemento | Onde vive no dia a dia |
|---|---|
| Fato gerador | saída, entrada (hipóteses), prestações |
| Local da operação | art. da LC 87 + RICMS — define UF e alíquota |
| Base de cálculo | valor da operação + hipóteses legais |
| Alíquotas | internas, interestaduais, FCP |
| Não cumulatividade | crédito de entradas vs. débito de saídas |
| Benefícios | isenção, redução de base, diferimento, crédito outorgado |

### Documentos e obrigações típicas

- NF-e / NFC-e / CT-e / MDF-e;  
- EFD ICMS/IPI;  
- GIAs / obrigações estaduais específicas;  
- DeSTDA (quando aplicável);  
- inventário e blocos H/K conforme perfil.

### Ponte com a Reforma

ICMS **não some em 2026**. A troca material para IBS se intensifica de **2029 a 2033**. Até lá: dualidade de regras e de motor fiscal. Veja [tributos vigentes](/impactos/tributos-vigentes) e [calendário](/fundamentos/calendario).

---

## Aula 02 — Crédito e apuração do ICMS

### Conta mental

```text
Débitos (saídas tributadas e hipóteses)
− Créditos (entradas e autorizações legais)
± Estornos / ajustes / ST / DIFAL / FCP
= Saldo devedor ou credor do período
```

### Testes do crédito (analista)

1. A operação de entrada é **tributada** ou gera direito legal ao crédito?  
2. O documento é idôneo e o emitente está regular?  
3. A mercadoria/serviço se destina a operação que autoriza crédito (revenda, industrialização, etc.)?  
4. Há hipótese de estorno (perda, furto, isenção na saída, uso e consumo sem direito)?  
5. O valor está coerente XML × C170/C190 × razão?

### Apuração na prática

- Conferir totais de documentos × registros da EFD.  
- Separar ST, DIFAL, FCP e benefícios.  
- Validar no PVA e transmitir.  
- Conciliar guia e contabilidade.  
- Controlar saldo credor e pedidos de ressarcimento.

### Laboratório

No FlowParse, cruze XML de entrada/saída com a EFD para achar: nota na SEFAZ não escriturada, valor divergente, CFOP espelhado (não é erro por si só), inventário inconsistente. Método em [Módulo 9](./m09-auditoria-digital).

---

## Aula 03 — Substituição tributária e local da operação

### Substituição tributária (ST)

Mecanismo em que a responsabilidade pelo ICMS de toda a cadeia (ou parte) é atribuída a um contribuinte (**substituto**), em geral com MVA, pauta ou base definida em convênio/protocolo.

| Papel | O que faz |
|---|---|
| Substituto | retém/recolhe ST na saída |
| Substituído | em regra não debita ICMS próprio daquela operação; pode ter ressarcimento |
| Consumidor final | preço já “carrega” a lógica da ST |

### Pontos críticos

- enquadramento por NCM/CEST e UF;  
- operações com não contribuinte interestadual;  
- devoluções e cancelamentos;  
- ressarcimento e complemento;  
- **estoque com ST embutida** na virada da RTC.

Setor de peças: [transição ST e estoque (motopeças)](/setores/motoparts/transicao-st-estoque).

### Local da operação e DIFAL

Definir a UF correta evita:

- alíquota errada;  
- benefício indevido;  
- DIFAL mal calculado;  
- disputa de competência.

Na RTC, o princípio do **destino** do IBS não elimina a necessidade de dominar o local do ICMS **enquanto ele existir**.

### Estudo de caso rápido

Distribuidora em SP vende pastilha com ST para oficina em MG e para consumidor final em PR via e-commerce.  
**Missão:** listar, para cada canal, documentos, ST/DIFAL, EFD e o que muda em 2029 com IBS residual.

---

## Checklist de conclusão do Módulo 4

- [ ] Explico campo, local e não cumulatividade do ICMS.  
- [ ] Apuro e concilio créditos com testes de lastro.  
- [ ] Mapeio ST por NCM/UF e rotinas de ressarcimento.  
- [ ] Sei por que o ICMS convive com o IBS até 2033.  
- [ ] Sei quais cruzamentos XML×EFD priorizar na auditoria.

**Próximo:** [Módulo 5 — PIS/Cofins](./m05-pis-cofins).
