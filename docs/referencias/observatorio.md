# Observatório de pendências e mudanças

Última revisão: **14/07/2026**.

## Painel

| Tema | Estado no corte | O que monitorar | Fonte primária |
|---|---|---|---|
| alíquotas de referência | metodologia/estimativas, não percentual final único | atos do Senado e leis dos entes | Senado, TCU, Planalto |
| Imposto Seletivo | campo definido; alíquotas dependem de lei ordinária | lei e listas/atos | Planalto/Receita |
| split payment | previsto e regulamentação em evolução | fases, meios, modalidade simplificada | RFB + CGIBS |
| NF-e/NFC-e | NT 2025.002 v1.40 consultada | nova versão e validações | Portal NF-e/CGIBS |
| NFS-e | NT 009 publicada | adesão, schema e datas | Portal NFS-e |
| DeRE | manual 1.1 e Ato Conjunto 3/2026 | versões e regimes abrangidos | CGIBS/RFB |
| Simples 2027 | Resolução 186 e calendário divulgado | sistemas, documento, opção de março | Portal Simples |
| locador PF no próprio ano | leitura controvertida do gatilho | solução de consulta/regulamento/jurisprudência | RFB/CGIBS |
| redutores atualizados | valores legais sujeitos ao IPCA | índice/ato e período | RFB/CGIBS |
| contratos art. 487 | condições legais; procedimento pode evoluir | forma de disponibilização/opção | RFB/CGIBS |
| ZFM/IPI | proteção legal | listas de concorrentes e atos | Receita/Suframa |

## Rotina semanal de triagem

### Segunda

Verifique Diário Oficial/Planalto, Receita e CGIBS.

### Quarta

Verifique portais NF-e, CT-e, NFS-e e versões de schemas.

### Sexta

Leia issues das bibliotecas que sua empresa realmente usa. Abra ticket interno se uma mudança oficial já apareceu na comunidade, mas valide na fonte.

## Critério de impacto

- **P0:** impede emissão, pagamento ou prazo legal em até 15 dias;
- **P1:** muda cálculo, crédito, contrato ou opção em até 60 dias;
- **P2:** exige cadastro/processo no trimestre;
- **P3:** interpretação/estudo sem efeito imediato.

## Modelo de registro

```text
Data / fonte / versão:
Tema e dispositivo:
Estado: vigente | técnico | interpretação
Operações afetadas:
Impacto em cálculo, DFe, caixa, contrato e crédito:
Decisão e responsável:
Testes:
Prazo:
```

## Regra contra boatos

Antes de compartilhar “mudou a reforma”:

1. peça o link oficial;
2. identifique se é projeto, lei, regulamento ou NT;
3. confira data e versão;
4. abra o dispositivo, não apenas a manchete;
5. descreva quem e quando é afetado.

## Assuntos para uma futura versão do guia

- alíquotas efetivamente publicadas;
- operação nacional do split;
- jurisprudência administrativa IBS/CBS;
- experiência real de ressarcimento;
- critérios vinculantes para PF locadora;
- primeiros dados de preços e conformidade de 2027.
