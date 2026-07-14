# 24. Impacto na carga: como simular sem prometer um número

## Três contas paralelas

### Pessoa física

IRPF continua existindo. Se a PF preencher os critérios de contribuinte, IBS/CBS somam-se à análise. Portanto, não compare “IRPF antes” com “IBS/CBS depois” como se um substituísse o outro.

### Pessoa jurídica

IRPJ/CSLL permanecem. PIS/Cofins são substituídos pela CBS, e IBS amplia a tributação do consumo sobre a locação. Créditos de gastos empresariais e crédito do locatário podem alterar o custo líquido.

### Locatário

Pessoa jurídica no regular pode tomar crédito se a locação for usada na atividade, documentada e os requisitos forem cumpridos. Consumidor residencial não toma crédito. Isso influencia capacidade de repasse.

## Simulador didático

<StatusNormativo tipo="simulacao">Informe uma alíquota-padrão apenas para estudar sensibilidade. O resultado não inclui todo o sistema nem prova enquadramento.</StatusNormativo>

<SimuladorLocacao />

## Exemplo comparativo

Hipóteses: aluguel residencial de R$ 8.000, contribuinte enquadrado, redutor de R$ 600, alíquota-padrão combinada de 28% apenas para simulação.

1. alíquota após redução de 70%: 8,4%;
2. base após redutor: R$ 7.400;
3. IBS/CBS estimados: R$ 621,60.

Isso não inclui IR, créditos, IPCA, contrato antigo ou demais receitas. Se o aluguel foi pactuado como valor total, o efeito na margem difere de um contrato com tributos adicionados.

## Repasse ao aluguel

O aumento nominal não é necessariamente repassado integralmente. Depende de:

- contrato e cláusula tributária;
- lei de locações e revisão/reequilíbrio aplicável;
- vacância e oferta local;
- capacidade de crédito do locatário;
- prazo e poder de negociação;
- condomínio/IPTU e custo total de ocupação.

## Métrica correta para o locatário B2B

> custo líquido de ocupação = aluguel + encargos + tributos cobrados − créditos aproveitados + custo financeiro

Para locatário sem crédito, o tributo tende a permanecer no custo. Para empresa no regular, pode haver neutralização parcial ou ampla, sujeita à operação e requisitos.

## PF × PJ: não existe vencedor universal

Compare:

| Dimensão | PF | PJ |
|---|---|---|
| renda | tabela progressiva e deduções legais | IRPJ/CSLL conforme regime |
| consumo | só se ultrapassar critérios | regra empresarial/específica |
| sucessão | inventário/doação direta | quotas, governança e ITCMD |
| venda | ganho de capital PF | receita/ganho conforme atividade e regime |
| custo | menor estrutura | contabilidade, societário e compliance |
| crédito | quando contribuinte e permitido | conforme regime regular |

## Sensibilidades obrigatórias

- alíquota-padrão em três faixas;
- atualização do limite/redutor pelo IPCA;
- vacância de 0, 1 e 3 meses;
- locatário com e sem crédito;
- contrato de transição a 3,65%;
- manutenção em PF, transferência e custo de ITBI/IR/registro;
- venda futura e sucessão.

Uma economia mensal pode ser anulada por custo de transferência ou tributação futura da venda.
