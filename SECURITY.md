# Segurança do projeto

Este repositório gera um site estático. A publicação no GitHub Pages contém apenas HTML, CSS, JavaScript e assets produzidos pelo build; não há servidor de aplicação, autenticação ou banco de dados.

## Servidor local

Use `npm run docs:dev` e `npm run docs:preview` apenas em interface local/confiável. A versão estável mais recente do VitePress 1.x depende de Vite/esbuild com avisos de segurança relacionados ao servidor de desenvolvimento e a caminhos locais, não ao conteúdo estático publicado. Não exponha o servidor de desenvolvimento à internet.

## Relato

Não publique vulnerabilidade com dados sensíveis em issue aberta. Envie um relato privado ao mantenedor do repositório, informando versão, impacto, reprodução mínima e correção sugerida.

## Conteúdo tributário

Erro normativo deve ser tratado como correção editorial: informe fonte primária, dispositivo, versão e data de vigência. Nunca envie documentos fiscais reais, CPF, CNPJ de cliente, chaves de DFe ou contratos sigilosos.
