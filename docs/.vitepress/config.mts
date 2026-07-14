import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'
const repositoryUrl = process.env.GITHUB_REPOSITORY
  ? `https://github.com/${process.env.GITHUB_REPOSITORY}`
  : undefined

export default defineConfig({
  lang: 'pt-BR',
  title: 'Reforma Tributária — Guia Prático',
  description: 'Guia RTC e Programa de Especialização para Analista Fiscal: CTN, ICMS, PIS/Cofins, SPED, auditoria digital FlowParse, retenções, compliance e reforma tributária.',
  base,
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#123c33' }],
    ['meta', { name: 'author', content: 'Ricardo e colaboradores' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'RTC · Guia Prático',
    search: { provider: 'local', options: { translations: { button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' }, modal: { noResultsText: 'Nenhum resultado para', resetButtonTitle: 'Limpar busca', footer: { selectText: 'selecionar', navigateText: 'navegar', closeText: 'fechar' } } } } },
    nav: [
      { text: 'Começar', link: '/como-usar' },
      { text: 'Trilha principal', link: '/fundamentos/necessidade' },
      { text: 'Analista Fiscal', link: '/especializacao/programa' },
      { text: 'Simples', link: '/simples/visao-geral' },
      { text: 'Imóveis', link: '/imoveis/situacao-atual' },
      { text: 'Motopeças', link: '/setores/motoparts/visao-geral' },
      { text: 'FlowParse', link: '/especializacao/flowparse' },
      { text: 'Laboratório', link: '/laboratorio/casos' },
      { text: 'Fontes', link: '/referencias/fontes' }
    ],
    sidebar: [
      {
        text: 'Orientação',
        items: [
          { text: 'Visão geral', link: '/' },
          { text: 'Como estudar', link: '/como-usar' },
          { text: 'Mapa normativo', link: '/mapa-normativo' },
          { text: 'Glossário essencial', link: '/glossario' }
        ]
      },
      {
        text: 'Unidade 1 · Introdução', collapsed: false,
        items: [
          { text: '1. Por que reformar?', link: '/fundamentos/necessidade' },
          { text: '2. EC 132, LC 214 e LC 227', link: '/fundamentos/legislacao' },
          { text: '3. Calendário 2026–2033', link: '/fundamentos/calendario' },
          { text: '4. Sistema atual × novo', link: '/fundamentos/comparacao' }
        ]
      },
      {
        text: 'Unidade 2 · Tributação do consumo', collapsed: false,
        items: [
          { text: '5. IBS e CBS: IVA dual', link: '/consumo/iva-dual' },
          { text: '6. Incidência, local e momento', link: '/consumo/incidencia' },
          { text: '7. Base, alíquotas e preço', link: '/consumo/base-aliquotas' },
          { text: '8. Extinção e split payment', link: '/consumo/split-payment' }
        ]
      },
      {
        text: 'Unidade 3 · Créditos e outros tributos', collapsed: false,
        items: [
          { text: '9. Créditos e não cumulatividade', link: '/impactos/creditos' },
          { text: '10. PIS/Cofins, ICMS, ISS e IPI', link: '/impactos/tributos-vigentes' },
          { text: '11. Imposto Seletivo e ZFM', link: '/impactos/seletivo-zfm' },
          { text: '12. ITCMD, IPVA, IPTU e Cosip', link: '/impactos/patrimonio' }
        ]
      },
      {
        text: 'Unidade 4 · Implementação', collapsed: false,
        items: [
          { text: '13. Regimes diferenciados', link: '/operacao/regimes' },
          { text: '14. Documentos e apuração', link: '/operacao/documentos' },
          { text: '15. Projeto de adequação', link: '/operacao/projeto-adequacao' },
          { text: '16. Riscos e observatório', link: '/operacao/riscos' }
        ]
      },
      {
        text: 'Módulo · Simples Nacional', collapsed: true,
        items: [
          { text: '17. Visão geral', link: '/simples/visao-geral' },
          { text: '18. Crédito dentro do DAS', link: '/simples/das-creditos' },
          { text: '19. Regime híbrido', link: '/simples/hibrido' },
          { text: '20. Decisão e cenários', link: '/simples/decisao' },
          { text: '21. Roteiro consultivo', link: '/simples/roteiro-consultivo' }
        ]
      },
      {
        text: 'Módulo · Locação de imóveis', collapsed: true,
        items: [
          { text: '22. Situação atual', link: '/imoveis/situacao-atual' },
          { text: '23. Incidência de IBS/CBS', link: '/imoveis/incidencia' },
          { text: '24. Carga e simulações', link: '/imoveis/carga' },
          { text: '25. Planejamento responsável', link: '/imoveis/planejamento' },
          { text: '26. Contratos na transição', link: '/imoveis/contratos' }
        ]
      },
      {
        text: 'Módulo · Motopeças (distribuição e importação)', collapsed: true,
        items: [
          { text: '32. Visão setorial', link: '/setores/motoparts/visao-geral' },
          { text: '33. Importadora', link: '/setores/motoparts/importadora' },
          { text: '34. Distribuidora', link: '/setores/motoparts/distribuidora' },
          { text: '35. Transição, ST e estoque', link: '/setores/motoparts/transicao-st-estoque' },
          { text: '36. Preço, crédito e caixa', link: '/setores/motoparts/preco-credito-caixa' },
          { text: '37. Checklist setorial', link: '/setores/motoparts/checklist' }
        ]
      },
      {
        text: 'Especialização · Analista Fiscal (180h)', collapsed: false,
        items: [
          { text: 'Programa e competências', link: '/especializacao/programa' },
          { text: 'M1 · Fundamentos (20h)', link: '/especializacao/m01-fundamentos' },
          { text: 'M2 · CTN e ilícitos (20h)', link: '/especializacao/m02-ctn' },
          { text: 'M3 · Regimes e gestão (16h)', link: '/especializacao/m03-regimes' },
          { text: 'M4 · ICMS (24h)', link: '/especializacao/m04-icms' },
          { text: 'M5 · PIS/Cofins (24h)', link: '/especializacao/m05-pis-cofins' },
          { text: 'M6 · ISS (4h)', link: '/especializacao/m06-iss' },
          { text: 'M7 · IPI (4h)', link: '/especializacao/m07-ipi' },
          { text: 'M8 · SPED (15h)', link: '/especializacao/m08-sped' },
          { text: 'M9 · Auditoria digital (15h)', link: '/especializacao/m09-auditoria-digital' },
          { text: 'M10 · Retenções (8h)', link: '/especializacao/m10-retencoes' },
          { text: 'M11 · Retenções na apuração (6h)', link: '/especializacao/m11-retencoes-apuracao' },
          { text: 'M12 · Compliance (8h)', link: '/especializacao/m12-compliance' },
          { text: 'M13 · Reforma Tributária (16h)', link: '/especializacao/m13-reforma' },
          { text: 'Laboratório FlowParse', link: '/especializacao/flowparse' },
          { text: 'Avaliação e certificação', link: '/especializacao/avaliacao' }
        ]
      },
      {
        text: 'Prática e avaliação', collapsed: true,
        items: [
          { text: '27. Casos integradores', link: '/laboratorio/casos' },
          { text: '28. Atividades', link: '/laboratorio/atividades' },
          { text: '29. Gabarito comentado', link: '/laboratorio/gabarito' },
          { text: '30. Checklists', link: '/laboratorio/checklists' },
          { text: '31. Perguntas frequentes', link: '/laboratorio/faq' }
        ]
      },
      {
        text: 'Referências', collapsed: true,
        items: [
          { text: 'Fontes e metodologia', link: '/referencias/fontes' },
          { text: 'O que mudou com a LC 227', link: '/referencias/lc227' },
          { text: 'Observatório de pendências', link: '/referencias/observatorio' },
          { text: 'Comunidades e software fiscal', link: '/referencias/comunidades' },
          { text: 'Histórico do guia', link: '/referencias/changelog' }
        ]
      }
    ],
    socialLinks: repositoryUrl ? [{ icon: 'github', link: repositoryUrl }] : [],
    outline: { level: [2, 3], label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próximo' },
    lastUpdated: { text: 'Atualizado em' },
    footer: { message: 'Material educacional · confirme a norma e o caso concreto.', copyright: 'CC BY 4.0 · Corte normativo: 14/07/2026' }
  }
})
