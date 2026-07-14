# Reforma Tributária do Consumo — guia prático e aprofundado

Portal educacional, em português, sobre a EC 132/2023, a LC 214/2025 já consolidada com as alterações da LC 227/2026, IBS, CBS, Imposto Seletivo, transição, Simples Nacional e locação de imóveis.

> Corte normativo: **14 de julho de 2026**. Este é um material educacional e não substitui análise jurídica, contábil ou fiscal individualizada.

## Conteúdo

- trilha principal em quatro unidades;
- módulos especiais de Simples Nacional e locação de imóveis;
- comparativos, mapas mentais, casos, exercícios comentados e checklists;
- simuladores didáticos para discutir crédito na cadeia e locação;
- fontes oficiais, leitura profissional e sinais das comunidades de software fiscal;
- busca local, navegação responsiva e publicação automática no GitHub Pages.

## Executar localmente

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run docs:dev
```

Para validar a versão de produção:

```bash
npm run docs:build
npm run docs:preview
```

## Publicar no GitHub Pages

1. Crie um repositório e envie estes arquivos para a branch `main`.
2. Em **Settings → Pages → Source**, selecione **GitHub Actions**.
3. O fluxo em `.github/workflows/deploy.yml` fará o build e a publicação.

O caminho-base é calculado pelo nome do repositório. Para domínio próprio ou publicação na raiz, defina `VITEPRESS_BASE=/` no fluxo.

## Como atualizar sem misturar níveis normativos

1. Atualize `docs/referencias/fontes.md` e `docs/referencias/observatorio.md`.
2. Registre a mudança em `docs/referencias/changelog.md`.
3. Identifique no texto se é **norma vigente**, **ato técnico**, **interpretação** ou **simulação**.
4. Execute `npm run docs:build` antes de publicar.

## Licença e contribuições

Texto sob [CC BY 4.0](LICENSE). Correções documentadas, exemplos e novos casos podem ser enviados por issue ou pull request. Não inclua dados pessoais, sigilosos ou casos de clientes identificáveis.
