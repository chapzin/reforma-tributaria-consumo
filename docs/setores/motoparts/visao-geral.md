# 32. Motopeças: mapa da reforma para distribuidora e importadora

Este módulo traduz a Reforma Tributária do Consumo para o dia a dia de quem **importa, revende e distribui peças e acessórios de motocicletas** — o chamado comércio de *motoparts* / motopeças. A lógica vale, com adaptações, para autopeças leves e pesadas quando a operação for mercadoria revendida com NCM de reposição.

<StatusNormativo tipo="interpretacao" titulo="Escopo educacional">O texto não substitui classificação fiscal de cada NCM, consulta aduaneira, planejamento de preço nem parecer de contador/advogado. Serve para estruturar a investigação e o projeto de adequação.</StatusNormativo>

## Por que o setor é sensível

| Traço do negócio | Por que a RTC afeta mais |
|---|---|
| Cadeia longa (fábrica/exterior → importador → distribuidor → loja/oficina → consumidor) | Crédito e qualidade do DFe se propagam; erro no meio vira custo no fim |
| Forte presença de **substituição tributária de ICMS** em vários estados | ST residual em estoque e coexistência ICMS/IBS na transição 2029–2033 |
| Mistura **importação + revenda interestadual + B2B + B2C** | Momento, local (destino), II/IPI/IS e IVA dual ao mesmo tempo |
| Muitos clientes no **Simples** (oficinas, lojas) e fornecedores mistos | Crédito limitado × crédito regular muda negociação de preço |
| Catálogo enorme de NCM e marcas | cClassTrib, descrição e motor fiscal dependem de cadastro limpo |
| Margem apertada e capital de giro | Split, pagamento na importação e estoque “carregado” de tributo antigo |

## O que a reforma **não** é para motopeças

- **Não** é “peça de moto tem alíquota especial automática”. Em regra, reposição comercial de peças segue o **regime padrão** de IBS/CBS, salvo hipótese legal específica comprovada por NCM/anexo.
- **Não** é fim imediato de ICMS em 2026. ICMS (e ST) convivem até a transição subnacional.
- **Não** é extinção do IPI em 2026. Em **2027** as alíquotas de IPI tendem a zero, **salvo** produtos concorrentes da ZFM.
- **Não** é garantia de que o Imposto Seletivo alcance “toda peça”. O IS, na LC 214, lista grupos como **veículos** e outros bens/serviços; **peças de reposição** não devem ser confundidas com o bem principal sem leitura do texto e da lei ordinária de alíquotas.

## Arquitetura do negócio sob o IVA dual

```text
Exterior / indústria nacional
        │
        ▼
  Importadora / fabricante
   (IBS/CBS na importação ou na venda)
        │
        ▼
   Distribuidora B2B
   (débito saída − crédito entrada; destino do cliente)
        │
        ├─► Oficina / loja no Simples
        ├─► Oficina / loja no regular
        └─► Consumidor final (B2C)
```

### Perguntas que o gestor precisa responder todo mês

1. **De onde veio o crédito?** Importação própria, compra nacional regular, Simples no DAS, monofásico residual, ST?
2. **Para onde vai a mercadoria?** Entrega, disponibilidade e destino do IBS.
3. **Quem é o cliente?** Regular (quer crédito integral do DFe) ou Simples/B2C (preço líquido manda)?
4. **Em que ano estamos?** 2026 (teste + DFe), 2027–28 (CBS plena + IPI zero), 2029–32 (ICMS+IBS), 2033 (só IBS subnacional)?
5. **O motor e o ERP batem com o XML?** NCM, CST, cClassTrib, valores e eventos de devolução.

## Três perfis neste módulo

| Perfil | Capítulo âncora | Dor principal |
|---|---|---|
| **Importadora** pura ou mista | [Importação de motopeças](./importadora) | Caixa na nacionalização, crédito da importação, II/IPI/IS, DI/DUIMP × DFe |
| **Distribuidora** B2B multiestado | [Distribuição e revenda](./distribuidora) | Destino, ST em transição, cliente Simples, preço por fora |
| **Operação integrada** (importa e distribui) | [Transição ST e estoque](./transicao-st-estoque) + [Preço, crédito e caixa](./preco-credito-caixa) | Estoque “antigo”, capital de giro, dualidade de regras |

## Modelo mental em uma frase

> Em motopeças, a reforma cobra **neutralidade na cadeia** e **qualidade de cadastro**. Quem só olha “qual alíquota?” perde a disputa de margem; quem governa **crédito + destino + documento + ano da transição** defende preço e caixa.

## Como usar este módulo

1. Leia a trilha principal (capítulos 5–10) se ainda não domina IBS/CBS e créditos.
2. Faça o [checklist setorial](./checklist).
3. Simule com os [casos integradores do setor](/laboratorio/casos) (casos 7 a 9) e o [gabarito](/laboratorio/gabarito).
4. Confronte sempre com a [LC 214 consolidada](https://www2.camara.leg.br/legin/fed/leicom/2025/leicomplementar-214-16-janeiro-2025-796905-normaatualizada-pl.pdf) e as [orientações da Receita](https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/entenda).

## Fontes-base deste módulo

- EC 132/2023 e LC 214/2025 (incidência, importação, créditos, transição).
- LC 227/2026 (alterações e governança).
- Portal [Entenda a RTC — Receita Federal](https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/entenda).
- NT NF-e 2025.002 e atos do CGIBS para campos de IBS/CBS/IS.
- Legislação estadual de ICMS-ST de peças/automotivo **enquanto vigorar** na transição.
