# Laboratório FlowParse — auditoria digital na prática

Ferramenta de referência do **Programa de Especialização para Analista Fiscal** para transformar XML e SPED em **parecer com evidência**.

---

## O problema que o analista vive

> O PVA disse que o arquivo está válido.  
> A malha e o cruzamento disseram que a operação não está.

Validar leiaute **não** garante:

- que toda NF-e da SEFAZ foi escriturada;  
- que valores e impostos batem com o XML;  
- que créditos de PIS/Cofins são cabíveis;  
- que a ECF conversa com a realidade das receitas;  
- que inventário e movimentação fecham.

A comunidade de software fiscal e as práticas de e-auditoria convergem no mesmo ponto: **cruzar obrigações entre si e com a base de documentos eletrônicos** antes que o Fisco o faça.

---

## O que é o FlowParse

O **FlowParse** é uma plataforma para **análise, processamento e validação de documentos fiscais** (XML, SPED e correlatos), com foco em automação de processos fiscais e tributários.

### Capacidades centrais

| Capacidade | Para o analista em formação |
|---|---|
| Parse de **NF-e, CF-e, CT-e** | lastro da operação |
| Análise de **SPED Fiscal e Contribuições** | escrituração estadual e federal |
| **Auditoria estadual** XML × EFD | achar não escriturado, divergências, riscos de malha |
| **Auditoria federal** | PIS/Cofins, créditos, ECF, saldo negativo, PER/DCOMP |
| Demonstrativos | apuração e créditos com número para o parecer |
| Exportação **Excel** | dossiê entregável ao cliente/gestão |
| APIs e processamento em fila | escala multi-CNPJ / escritório |

Stack (visão produto): Go, PostgreSQL, filas (RabbitMQ), armazenamento de objetos, Excel — arquitetura pensada para volume fiscal real.

### Site

**[https://flowparse.com.br](https://flowparse.com.br)**

---

## Por que o programa adota o FlowParse

1. **Método ensinável** — preflight → análise → severidade → parecer (igual ao [Módulo 9](./m09-auditoria-digital)).  
2. **Dois eixos** — estadual e federal, como o mercado de auditoria digital exige.  
3. **Anti-falso-positivo** — CFOP espelhado, NF avulsa, desoneração, inventário etc. entram no treino.  
4. **Compliance contínuo** — serve ao [Módulo 12](./m12-compliance), não só ao “projeto anual”.  
5. **Ponte com a RTC** — enquanto ICMS/PIS existem, a auditoria de legado é obrigatória; a plataforma também acompanha a agenda da reforma (classificações, radar normativo).

---

## Roteiro de laboratório (aluno)

### Laboratório A — Auditoria estadual (4h)

1. Escolha um CNPJ de estudo (dados fictícios ou base autorizada).  
2. Carregue XML e EFD do período.  
3. Rode **preparação/preflight** e anote cobertura (meses sem SPED ou sem XML).  
4. Execute a análise completa.  
5. Filtre **ERRO** e calcule materialidade.  
6. Separe 3 falsos-positivos potenciais da lista de alertas.  
7. Exporte Excel e redija parecer de 1–2 páginas (modelo do M9).

### Laboratório B — Auditoria federal (4h)

1. Confirme **regime** (Real/Presumido/Simples).  
2. Rode preflight de **tabelas de referência** (monofásico, TIPI…).  
3. Se o preflight falhar, **registre a limitação** antes de concluir “sem achados”.  
4. Gere demonstrativos de apuração e créditos de PIS/Cofins.  
5. Liste riscos (crédito indevido) e oportunidades (crédito não tomado / teses) **em seções separadas**.  
6. Exporte e apresente ao mentor/turma.

### Laboratório C — Compliance mensal (2h)

Monte um calendário: todo dia 5, preflight + top 10 ERROS + donos. Use o template do [M12](./m12-compliance).

### Laboratório D — Setor motopeças (opcional, 2h)

Cruze o que aprendeu em [motopeças](/setores/motoparts/visao-geral) com ST, NCM e cadeia B2B: o que a auditoria digital precisa priorizar em distribuidora/importadora.

---

## Mensagem comercial (para gestores e escritórios)

| Sem FlowParse (cenário comum) | Com FlowParse no processo |
|---|---|
| Fecha no PVA e torce | Cruza XML × SPED antes de dormir tranquilo |
| Achado só na intimação | Achado no fechamento do mês |
| Planilha heroica | Excel padronizado + trilha do item |
| Conhecimento na cabeça de um analista | Método repetível multi-CNPJ |
| Legado e RTC “depois a gente vê” | Legado sob controle enquanto a reforma avança |

### Para quem é

- **Empresas** com volume de NF e multi-UF;  
- **Escritórios contábeis** que querem serviço de auditoria digital recorrente;  
- **Analistas em formação** que precisam de laboratório realista;  
- **Times de compliance** que medem risco em valor e prazo.

### Chamada

Conheça planos e demonstrações em **[flowparse.com.br](https://flowparse.com.br)**.  
Este guia educacional do repositório RTC é parceiro de conteúdo: forma o analista; o FlowParse **opera a auditoria**.

---

## Ética de uso no curso

- Não publique bases reais com CPF/dados sensíveis em repositórios públicos.  
- Mascarar identificadores em trabalhos de turma.  
- Não vender tese jurídica como se fosse botão de software.  
- Sempre citar **data de corte** e premissas no parecer.

---

## Ligações

- [Programa completo](./programa)  
- [Módulo 8 — SPED](./m08-sped)  
- [Módulo 9 — Auditoria digital](./m09-auditoria-digital)  
- [Módulo 12 — Compliance](./m12-compliance)  
- [Comunidades e software fiscal](/referencias/comunidades)
