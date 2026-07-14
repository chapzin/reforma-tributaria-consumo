# 14. Documentos fiscais e apuração assistida

## O DFe vira a declaração primária da operação

A administração usa documentos e eventos para propor débitos, créditos e saldo. Isso desloca o controle: erro de cadastro no faturamento deixa de ser apenas erro de nota e pode chegar diretamente à apuração.

## NF-e e NFC-e

A Nota Técnica 2025.002 introduz grupos de IBS, CBS e IS, totais, devoluções, diferimentos, créditos presumidos e compras governamentais. Dois campos são centrais:

- **CST:** situação tributária;
- **cClassTrib:** classificação que liga a operação ao tratamento da LC 214.

Uma NCM correta não determina sozinha o tratamento. O mesmo produto pode ter operação padrão, exportação, doação, devolução ou regime específico.

## NFS-e padrão nacional

A Nota Técnica 009 amplia o leiaute para IBS/CBS, ajustes, tributação do Simples e grupo de locação (`gLocacao`). Municípios, emissores e empresas precisam observar adoção e cronograma do padrão.

## DeRE

A Declaração de Regimes Específicos atende operações/regimes definidos em ato próprio. Não é uma “nova obrigação universal” por simples existência. O manual 1.1 consultado inclui disciplina para os regimes abrangidos e para optante do Simples quando recolhe IBS/CBS pelo regular ou ultrapassa sublimite nas condições previstas.

## Apuração assistida

O sistema apresenta um saldo com base nos documentos e formas de extinção. O contribuinte precisa:

1. conferir documentos próprios e recebidos;
2. incluir/excluir/ajustar nos limites legais;
3. justificar divergências;
4. agir no prazo;
5. reconciliar com contabilidade e financeiro.

O silêncio pode produzir efeitos de concordância e constituição do crédito nos termos legais. Por isso, “a Receita calcula” não significa terceirizar a responsabilidade.

## Eventos que o ERP não pode esquecer

- cancelamento e correção;
- devolução total/parcial;
- pagamento antecipado;
- entrega futura;
- perda, roubo e deterioração quando relevantes;
- crédito presumido;
- estorno de crédito;
- split e recolhimento do adquirente;
- ajuste de período;
- nota de débito/crédito conforme leiaute.

## 2026: obrigação legal × validação de schema

<StatusNormativo tipo="tecnico">A orientação oficial exige adaptação dos documentos conforme os atos aplicáveis, mas as regras de rejeição entram por cronogramas e versões. “O autorizador aceitou sem o campo” não prova que a obrigação material foi cumprida.</StatusNormativo>

## Matriz de testes mínima

| Grupo | Cenários |
|---|---|
| venda | B2B, B2C, Simples, governo, interestadual |
| tratamento | padrão, zero, redução, suspensão, isenção |
| ciclo | pedido, adiantamento, entrega, pagamento, cancelamento |
| exceção | devolução, desconto, bonificação, reembolso |
| financeiro | Pix, boleto, cartão, parcial, marketplace |
| crédito | apropriável, vedado, presumido, estorno |

## Fontes técnicas

- [NT NF-e/NFC-e 2025.002 v1.40](https://www.cgibs.gov.br/upload/arquivos/202606/17141803-nt-2025-002-v1-40-rtc-nf-e-ibs-cbs-is-final.pdf);
- [notícia e NT 009 da NFS-e](https://www.gov.br/nfse/pt-br/noticias/publicada-a-nota-tecnica-009-da-nfs-e);
- [Manual DeRE v1.1](https://www.cgibs.gov.br/upload/arquivos/202606/22141223-01-manual-usuario-dere-declaracao-de-regimes-especificos-v-1-1-0.pdf);
- [curso oficial sobre calculadora e obrigações](https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/curso/material-de-apoio/5o-modulo-cfc-rfb-obrigacoes-acessorias-calculadora-motor-oficial-de-calculo-ariel-bonzan.pdf).
