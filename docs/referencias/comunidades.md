# Comunidades, fóruns e software fiscal

## Para que servem nesta pesquisa

Comunidades revelam o atrito entre texto e implementação: schema que mudou, total que não fecha, campo ausente, versão de biblioteca e caso de borda. Elas são excelentes sensores e péssimas fontes únicas para uma conclusão jurídica.

## OCA / localização brasileira do Odoo

A discussão [Links úteis sobre a Reforma Tributária](https://github.com/OCA/l10n-brazil/discussions/4237) reúne documentação, calculadora, notas e materiais técnicos. É útil como índice comunitário e mostra a necessidade de coordenar ERP e fontes oficiais.

## Calculadora aberta

O repositório [nfe/rtc-calculadora-offline](https://github.com/nfe/rtc-calculadora-offline) disponibiliza a calculadora oficial/beta em formato aberto. Use para compreender entradas, saídas e integração; confira versão, termos e ambiente antes de produção.

## FlowParse — auditoria digital (laboratório do programa)

O [FlowParse](https://auditoriafiscal.duckdns.org/) é a plataforma de referência do [Programa de Especialização para Analista Fiscal](/especializacao/programa) para parse de XML/SPED, auditoria estadual (XML × EFD), auditoria federal (PIS/Cofins, ECF, créditos) e exportação de pareceres.  
**Acesse:** [https://auditoriafiscal.duckdns.org/](https://auditoriafiscal.duckdns.org/) · Conteúdo e oferta: [Laboratório FlowParse](/especializacao/flowparse).

## Bibliotecas e issues

- [NFePHP](https://github.com/nfephp-org/sped-nfe) e [issue de RTC](https://github.com/nfephp-org/sped-nfe/issues/1274);
- [Java_NFe](https://github.com/Samuel-Oliveira/Java_NFe), com evolução de exemplos IBS/CBS;
- [DFe.NET — rastreamento da RTC](https://github.com/ZeusAutomacao/DFe.NET/issues/1615);
- [NFeWizard — changelog](https://github.com/nfewizard-org/nfewizard-io/blob/master/CHANGELOG.md);
- [ACBr — exemplo Delphi](https://github.com/frones/ACBr/blob/master/Exemplos/ACBrDFe/ACBrNFe/Delphi/Frm_ACBrNFe.pas);
- [nfelib — issue 141](https://github.com/akretion/nfelib/issues/141).

Esses projetos não foram endossados pelo guia. Links servem para estudo de maturidade, testes e compatibilidade.

## O padrão observado

1. Notas técnicas ganham versões sucessivas.
2. Schemas e validações não chegam a todas as bibliotecas ao mesmo tempo.
3. Totalização e eventos são fontes frequentes de bug.
4. Exemplos felizes chegam antes de devoluções, split e regimes especiais.
5. ERP atualizado não significa cadastro correto.

## Como usar uma issue com segurança

1. Reproduza o caso com XML mínimo e dados fictícios.
2. Identifique a versão da NT/schema.
3. Compare com fonte oficial.
4. Verifique se a issue foi resolvida e lançada.
5. Crie teste interno permanente.
6. Não copie interpretação tributária do comentário para produção.

## Classe contábil e entidades

O [CFC](https://cfc.org.br/noticias/classe-contabil-entrega-133-sugestoes-a-receita-federal-para-aperfeicoar-a-cbs/) apresentou 133 sugestões à Receita e também propostas ao CGIBS. A [Fenacon](https://fenacon.org.br/reforma-tributaria/reforma-tributaria-e-simples-nacional-como-o-regime-hibrido-pode-impactar-a-competitividade-das-empresas/) debate efeitos B2B do Simples. Esses materiais ajudam a formar perguntas e priorizar riscos.

## Fóruns e Gists

A pesquisa em Gists e fóruns abertos encontrou muito conteúdo sem data, fonte ou versão. Por isso, o guia não usa snippets anônimos como base. Um exemplo de código só é aproveitável quando pode ser reconectado a schema oficial, teste e versão.

## Como contribuir com este projeto

Ao abrir issue no repositório do guia, inclua:

- pergunta e operação;
- link oficial;
- data/versão;
- página afetada;
- proposta de correção em palavras próprias;
- exemplo sem dados pessoais;
- teste ou cálculo, quando houver.
