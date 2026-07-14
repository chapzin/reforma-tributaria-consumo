# Como contribuir

Obrigado por ajudar a manter o guia correto e didático.

## Antes de abrir uma alteração

1. Procure uma issue existente.
2. Confirme a informação em fonte primária e registre a data de acesso.
3. Use a versão consolidada da legislação.
4. Não inclua dados de clientes ou informações pessoais.

## Padrão de conteúdo

- diferencie norma vigente, cronograma técnico, interpretação e simulação;
- informe dispositivo, versão e vigência;
- trate percentuais ainda não fixados como hipótese;
- apresente exemplo em palavras próprias;
- inclua teste/gabarito quando introduzir conceito novo;
- atualize `docs/referencias/changelog.md`.

## Validação

```bash
npm install
npm run docs:build
```

Para mudanças em componentes, verifique também página inicial, navegação móvel, busca e simuladores.

## Pull request

Descreva: fonte, páginas afetadas, antes/depois, risco corrigido e validação executada. Alterações normativas devem atualizar a data de corte pertinente sem dar a entender que todo o guia foi revisado, salvo revisão completa.
