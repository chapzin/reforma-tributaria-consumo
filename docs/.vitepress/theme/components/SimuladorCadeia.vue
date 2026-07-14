<script setup lang="ts">
import { computed, ref } from 'vue'

const preco = ref(10000)
const aliquotaRegular = ref(28)
const creditoSimples = ref(4)
const creditoRegular = computed(() => preco.value * aliquotaRegular.value / (100 + aliquotaRegular.value))
const creditoSN = computed(() => preco.value * creditoSimples.value / 100)
const custoRegular = computed(() => preco.value - creditoRegular.value)
const custoSN = computed(() => preco.value - creditoSN.value)
const moeda = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
</script>

<template>
<div class="simulador">
  <div class="simulador__grid">
    <label>Preço total da proposta (R$)<input v-model.number="preco" type="number" min="0" step="100"></label>
    <label>Alíquota regular hipotética, por fora (%)<input v-model.number="aliquotaRegular" type="number" min="0" max="60" step="0.1"></label>
    <label>Crédito informado pelo fornecedor do Simples (%)<input v-model.number="creditoSimples" type="number" min="0" max="60" step="0.1"></label>
  </div>
  <div class="resultado-grid">
    <article><span>Crédito no regular</span><strong>{{ moeda(creditoRegular) }}</strong><small>Cálculo por dentro do preço total apenas para comparação.</small></article>
    <article><span>Crédito do Simples</span><strong>{{ moeda(creditoSN) }}</strong><small>Percentual declarado como hipótese.</small></article>
    <article><span>Diferença no custo líquido B2B</span><strong>{{ moeda(custoSN - custoRegular) }}</strong><small>Quanto a proposta do Simples precisaria compensar em preço, nesta hipótese.</small></article>
  </div>
  <p class="simulador__nota">Laboratório econômico, não cálculo fiscal. No caso real, confira formação do preço, base “por fora”, documento idôneo, extinção do débito do fornecedor, restrições de crédito e alíquotas efetivas.</p>
</div>
</template>
