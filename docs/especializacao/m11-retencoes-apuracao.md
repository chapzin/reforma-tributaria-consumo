# Módulo 11 — Retenções Tributárias: Impacto na Apuração de Contribuições

**6 horas** · Pontos CFC (indicativos): AUD, PERITO, PROGP, PRORT — 6  
**Objetivo:** conectar o que foi **retido** com o que será **apurado e compensado**, sem duplicar ou perder crédito.

---

## Aula 01 — Reflexo das retenções sobre PIS e Cofins

### Dois papéis

| Papel | Efeito |
|---|---|
| **Tomador que reteve** (CSRF) | recolhe a retenção; não “some” com a apuração própria de PIS/Cofins sobre a receita dele de forma automática e cega — são lógicas distintas |
| **Prestador que sofreu retenção** | usa o valor retido como compensação/dedução na apuração de PIS/Cofins, nas condições legais |

### Controles do prestador

1. Conferir destaque de retenção na NFS-e.  
2. Registrar o crédito/valor retido por competência.  
3. Informar corretamente na EFD-Contribuições / obrigações.  
4. Evitar pedir PER/DCOMP do que já foi compensado na apuração (e vice-versa).  
5. Conciliar extrato de retenções × apuração mensal.

### Armadilha

Ignorar retenção sofrida e pagar PIS/Cofins “cheio” — ou compensar duas vezes.

---

## Aula 02 — Reflexo das retenções sobre a CSLL

### Visão prática

A CSLL retida na fonte (como parte da CSRF em hipóteses) gera direito ao prestador de **compensar** com a CSLL devida na apuração (trimestral/anual ou estimativa), conforme as regras do período e do regime (presumido/real).

### Rotina

- acumular CSLL retida por período;  
- abater na apuração / guia;  
- escriturar na ECF e obrigações correlatas;  
- guardar NF e comprovantes para fiscalização.

### Integração com IRPJ

Embora IRRF tenha trilha própria, o fechamento mensal/trimestral deve olhar o **pacote de retenções** do prestador (IR, CSLL, PIS, Cofins, INSS) para não distorcer caixa e resultado fiscal.

---

## Aula 03 — Integração com o SPED e outras obrigações acessórias

### Mapa de integração

```text
Contrato / pedido
    → NFS-e com retenção
    → Pagamento (financeiro)
    → EFD-Reinf (eventos)
    → DCTFWeb / DARF
    → EFD-Contribuições (prestador)
    → ECF (quando couber)
    → Contabilidade (passivo/ativo de tributos)
```

### Testes de auditoria digital

| Cruzamento | Sintoma de erro |
|---|---|
| NF com retenção × Reinf | evento ausente ou valor diferente |
| Reinf × DCTFWeb | declarado ≠ pago |
| Retenção sofrida × EFD-Contribuições | crédito/compensação omitida |
| Financeiro × fiscal | pagou bruto sem reter ou reteve e não recolheu |

### FlowParse e o fechamento

Use a trilha federal e a conferência de documentos para achar omissões de XML/NFS e inconsistências de apuração; o módulo de retenções exige também o olhar Reinf/DCTFWeb do time. Ver [FlowParse](./flowparse) e [Módulo 9](./m09-auditoria-digital).

### Entregável da aula

Planilha-controle: fornecedor | serviço | base | IRRF | CSRF | INSS | guia | evento Reinf | status conciliação.

---

## Checklist de conclusão do Módulo 11

- [ ] Sei o efeito da retenção no prestador e no tomador.  
- [ ] Compenso PIS/Cofins/CSLL retidos sem duplicidade.  
- [ ] Integro NF × Reinf × DCTFWeb × EFD × contábil.  
- [ ] Tenho planilha-controle auditável.

**Próximo:** [Módulo 12 — Compliance](./m12-compliance).
