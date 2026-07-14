# Módulo 8 — Sistema Público de Escrituração Digital (SPED)

**15 horas** · Pontos CFC (indicativos): AUD, CMN, PERITO, PREVIC, PROGP, PRORT, SUSPEP — 15  
**Objetivo:** dominar o ecossistema digital de documentos e escriturações — a “matéria-prima” da auditoria e da RTC.

---

## Aula 01 — Documentos fiscais eletrônicos (DFe)

### Família essencial

| Documento | Uso típico |
|---|---|
| NF-e | mercadorias e algumas operações |
| NFC-e | varejo presencial |
| CT-e / MDF-e | transporte e manifesto |
| CFS-e / CF-e-SAT (legado regional) | cupom / automação comercial |
| NFS-e | serviços (padrão nacional em expansão) |

### Eventos que o analista não pode ignorar

cancelamento, CC-e, manifestação do destinatário, encerramento, e-mail de autorização ≠ validade material eterna.

### RTC nos DFe

Grupos de **IBS, CBS e IS**, CST e **cClassTrib** entram pelas NTs (ex.: NT 2025.002 NF-e). “O autorizador aceitou” ≠ “a obrigação material está perfeita”. Ver [documentos e apuração](/operacao/documentos).

### Boas práticas

- guardar XML e eventos;  
- reconciliar numeração;  
- monitorar contingência;  
- proibir emissão “só no papel” quando a lei exige DFe.

---

## Aula 02 — SPED Fiscal (EFD ICMS/IPI)

### Finalidade

Escrituração digital das operações de ICMS e IPI, inventário e controles correlatos, validada no PVA e transmitida à administração.

### Blocos que o analista “mora”

| Bloco (visão) | Conteúdo |
|---|---|
| 0 | cadastros |
| B/C/D | documentos e serviços de comunicação/transporte conforme leiaute |
| E | apuração ICMS |
| G/H/K | CIAP, inventário, produção/estoque (perfil) |
| 1 | outras informações |

### Rotina de qualidade

1. Importar/gerar arquivo.  
2. Validar no PVA.  
3. Corrigir erros de estrutura.  
4. Cruzar com XML (aqui entra o **FlowParse**).  
5. Transmitir e arquivar recibo.  
6. Abrir dossiê de retificadora se necessário (retificadora prevalece sobre original na lógica de dedup de sistemas modernos).

---

## Aula 03 — SPED Contribuições (EFD-Contribuições)

### Finalidade

Escrituração de PIS/Cofins (e contribuições correlatas conforme o caso), bases, créditos e apurações.

### Pontos de atenção

- CST e natureza da receita;  
- monofasia e alíquota zero;  
- créditos de entrada;  
- conciliação com DCTF;  
- omissão de competência obrigatória = risco de multa.

### Auditoria federal

Preflight de tabelas de referência (monofásico etc.) antes de crer em “zero achados”. Ver [FlowParse](./flowparse).

---

## Aula 04 — EFD-Reinf

### Finalidade

Escrituração de retenções e outras informações fiscais (serviços tomados, retenções, comercial exportação, etc., conforme eventos vigentes).

### Integração

Reinf conversa com **DCTFWeb**, eSocial e rotinas de retenção ([Módulos 10 e 11](./m10-retencoes)). O analista garante:

- eventos no prazo;  
- CNPJ/CPF e códigos de serviço corretos;  
- valores coerentes com NF e pagamento.

---

## Aula 05 — ECD (Escrituração Contábil Digital)

### Finalidade

Substitui a escrituração em papel no âmbito do SPED contábil: diário, razão, balancetes e demonstrações conforme perfil.

### Por que o fiscal se importa

- malhas cruzam ECF × ECD × receitas;  
- inconsistência contábil vira indício fiscal;  
- planejamento e laudos dependem de contabilidade íntegra.

---

## Aula 06 — ECF (Escrituração Contábil Fiscal)

### Finalidade

Escrituração do IRPJ/CSLL e informações econômicas, com blocos de apuração por regime (presumido/real etc.).

### Cruzamentos sensíveis

- receita ECF × PIS/Cofins × DFe;  
- adições/exclusões;  
- saldo negativo e PER/DCOMP;  
- divergências DCTF × apurado.

Na auditoria federal FlowParse: regime primeiro (Real/Presumido/Simples), depois demonstrativos e itens por área.

---

## Mapa mental do ecossistema

```text
DFe (XML) ──► operação real autorizada
   │
   ├─► EFD ICMS/IPI
   ├─► EFD-Contribuições
   ├─► EFD-Reinf ──► DCTFWeb
   ├─► ECD ──► ECF
   └─► (RTC) apuração assistida IBS/CBS + DeRE
```

### Ferramenta de referência do programa

**FlowParse** ([auditoriafiscal.duckdns.org](https://auditoriafiscal.duckdns.org/)): upload de XML/SPED, parse, auditorias estadual e federal, Excel e parecer. Laboratório e oferta comercial em [FlowParse](./flowparse).

---

## Checklist de conclusão do Módulo 8

- [ ] Identifico cada obrigação SPED e seu “dono” na empresa.  
- [ ] Valido EFD no PVA e entendo o limite do PVA.  
- [ ] Cruzo mentalmente DFe × Fiscal × Contribuições × Reinf × ECF.  
- [ ] Sei o que muda nos DFe com IBS/CBS.  
- [ ] Consigo carregar uma base de estudo no FlowParse.

**Próximo:** [Módulo 9 — Auditoria digital](./m09-auditoria-digital).
