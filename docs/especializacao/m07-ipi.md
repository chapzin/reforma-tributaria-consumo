# Módulo 7 — Tributos Indiretos e Obrigações Acessórias: IPI

**4 horas** · Pontos CFC (indicativos): AUD, PERITO, PROGP, PRORT — 4  
**Objetivo:** operar o IPI industrial/importador e entender o **IPI zero em 2027** com a exceção da ZFM.

---

## Aula 01 — Fundamentos do IPI

### Competência e fato gerador

Imposto federal sobre produtos industrializados: industrialização e importação, com hipóteses de arrematação e outras previstas em lei. Não cumulativo, com crédito nas entradas nas condições legais.

### Quem costuma ser contribuinte

- estabelecimento industrial;  
- equiparados a industrial;  
- importadores.

Comércio atacadista “puro” muitas vezes **não** debita IPI na revenda, mas precisa entender a cadeia (preço, crédito na indústria, ST de outros tributos).

### Documentos

- NF-e com destaque de IPI;  
- EFD ICMS/IPI (registros de IPI);  
- classificação NCM.

---

## Aula 02 — Alíquotas e tabela TIPI

### TIPI

A **Tabela de Incidência do IPI** associa NCM à alíquota. Erro de NCM = IPI errado, e frequentemente PIS/Cofins monofásico e ICMS-ST errados em cascata.

### Rotina de classificação

1. Descrição técnica do produto (não só nome comercial).  
2. NCM e notas explicativas (quando aplicáveis).  
3. Alíquota TIPI do período.  
4. Tratamentos especiais (suspensão, isenção, redução).  
5. Revisão periódica e dono do cadastro.

### Ponte 2027

A RTC prevê **redução a zero** das alíquotas de IPI na generalidade dos produtos a partir de 2027, **exceto** preservação de competitividade de produtos também industrializados na **Zona Franca de Manaus**. Ver [Imposto Seletivo e ZFM](/impactos/seletivo-zfm).

---

## Aula 03 — Créditos de IPI

### Lógica

Débito na saída tributada − crédito na entrada de insumos/produtos que geram direito = saldo.

### Cuidados

- entrada de produto que não gera crédito;  
- deterioração e perdas;  
- industrialização por encomenda;  
- importação e regimes aduaneiros;  
- manutenção de crédito em saídas com imunidade/isenção (hipóteses legais).

### Auditoria

Cruzar NCM × TIPI × destaque na NF-e × registros da EFD. No FlowParse federal, tabelas TIPI vazias **desligam detecções** — preflight é obrigatório antes de concluir “sem achados”.

---

## Checklist de conclusão do Módulo 7

- [ ] Identifico contribuinte e fato gerador do IPI.  
- [ ] Classifico NCM/TIPI com dono e revisão.  
- [ ] Apuro créditos com lastro.  
- [ ] Explico IPI zero em 2027 e a exceção ZFM sem chamar de “extinção do imposto”.

**Próximo:** [Módulo 8 — SPED](./m08-sped).
