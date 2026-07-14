# 15. Projeto de adequação: fiscal, ERP, contratos e pessoas

## Governança sugerida

| Frente | Entrega | Dono típico |
|---|---|---|
| norma | matriz de regras e evidências | tributário/jurídico |
| cadastro | NCM/NBS, cClassTrib, partes e destinos | fiscal + dados |
| tecnologia | motor, DFe, apuração, eventos, integrações | TI/ERP |
| finanças | split, conciliação e capital de giro | tesouraria |
| comercial | preço, crédito do cliente e cláusulas | vendas/pricing |
| compras | regime e qualidade fiscal do fornecedor | suprimentos |
| contábil | contas, saldos, reconciliações | controladoria |
| mudança | treinamento, comunicação e suporte | RH/PMO |

## Fase 1 — descobrir

1. Catalogue CNPJ, estabelecimentos, inscrições e municípios.
2. Extraia 12 meses de itens e operações reais.
3. Agrupe os 80% de valor e os 20% de exceções críticas.
4. Identifique regimes, incentivos, contratos e créditos acumulados.
5. Mapeie sistemas que criam ou alteram dado fiscal.
6. Se for **importação/distribuição de peças** (motoparts/autopeças): mapeie NCM Pareto, ST por UF, giro de estoque, regimes de clientes e fluxo DI/DUIMP — use o [checklist setorial](/setores/motoparts/checklist).

### Entregável

Um mapa “operação → regra → documento → pagamento → crédito → contabilização”, com volume, materialidade e responsável.

## Fase 2 — desenhar

- política de classificação e aprovação;
- modelo de preço por cliente/canal;
- plano de contas para IBS/CBS/IS;
- arquitetura de eventos e conciliação;
- contingência de DFe e pagamento;
- critérios de opção do Simples e regimes;
- plano de contrato e comunicação.

## Fase 3 — construir e testar

Use dados reais anonimizados. Teste unidade do motor, integração ponta a ponta e aceite de negócio. Um cálculo correto que não chega ao XML, cobrança ou razão continua sendo falha.

### Critérios de saída

- 100% dos cenários materiais com resultado esperado aprovado;
- nenhuma divergência não explicada entre total do item, DFe, cobrança e contabilidade;
- rastreio da regra até fonte e versão;
- operação de cancelamento/devolução demonstrada;
- monitoramento e suporte definidos.

## Fase 4 — operar e aprender

Meça:

- taxa de rejeição por regra;
- notas recebidas sem classificação adequada;
- créditos bloqueados e idade;
- diferença entre apuração assistida e razão;
- tempo de resolução por fornecedor;
- impacto de split no caixa;
- margem por regime/canal.

## Arquitetura de regras

Evite fórmulas espalhadas em faturamento, e-commerce e gateway. Um motor versionado deve receber dados suficientes e devolver cálculo + fundamento + versão. A [Calculadora oficial em ambiente piloto](https://piloto-cbs.tributos.gov.br/servico/calculadora-consumo/calculadora) e o [repositório aberto](https://github.com/nfe/rtc-calculadora-offline) ajudam a entender o padrão, sem dispensar integração e validação da empresa.

## Política de mudança

Cada mudança normativa/técnica deve gerar:

1. triagem de impacto;
2. regra versionada;
3. teste de regressão;
4. aprovação fiscal;
5. janela de implantação;
6. plano de reversão;
7. registro no observatório.

## Plano de 90 dias

### Dias 1–30

Inventário, equipe, materialidade, extração de dados e lacunas.

### Dias 31–60

Classificação prioritária, protótipo de cálculo, contratos-chave e primeiro ciclo de testes.

### Dias 61–90

Integração financeira/contábil, piloto controlado, treinamento e painel de qualidade.

## Pergunta de maturidade

Se uma NT alterar amanhã o campo de devolução, sua empresa sabe quais produtos, interfaces, testes, clientes e lançamentos serão afetados? Se a resposta depende de uma pessoa lembrar, o risco é de arquitetura, não apenas fiscal.
