<script setup lang="ts">
import { computed, ref } from 'vue'

const aluguel = ref(8000)
const residencial = ref(true)
const aliquotaPadrao = ref(28)
const qtdImoveis = ref(4)
const receitaAnoAnterior = ref(300000)
const base = computed(() => Math.max(aluguel.value - (residencial.value ? 600 : 0), 0))
const aliquotaEfetiva = computed(() => aliquotaPadrao.value * 0.30)
const tributo = computed(() => base.value * aliquotaEfetiva.value / 100)
const enquadramentoIndicativo = computed(() => qtdImoveis.value > 3 && receitaAnoAnterior.value > 240000)
const moeda = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
</script>

<template>
<div class="simulador">
  <div class="simulador__grid">
    <label>Aluguel mensal (R$)<input v-model.number="aluguel" type="number" min="0" step="100"></label>
    <label>Alíquota-padrão combinada hipotética (%)<input v-model.number="aliquotaPadrao" type="number" min="0" max="60" step="0.1"></label>
    <label>Imóveis distintos locados no ano anterior<input v-model.number="qtdImoveis" type="number" min="0" step="1"></label>
    <label>Receita de locação no ano anterior (R$)<input v-model.number="receitaAnoAnterior" type="number" min="0" step="1000"></label>
    <label class="check"><input v-model="residencial" type="checkbox"> Locação residencial elegível ao redutor social</label>
  </div>
  <div class="resultado-grid">
    <article><span>Indício de enquadramento da PF</span><strong>{{ enquadramentoIndicativo ? 'Sim' : 'Não pelo teste anterior' }}</strong><small>Teste simplificado dos dois requisitos conjuntos do ano anterior.</small></article>
    <article><span>Alíquota efetiva hipotética</span><strong>{{ aliquotaEfetiva.toFixed(2).replace('.', ',') }}%</strong><small>Redução legal de 70% aplicada à alíquota-padrão informada.</small></article>
    <article><span>IBS + CBS mensal estimado</span><strong>{{ moeda(tributo) }}</strong><small>Base após redutor social de R$ 600, se marcado.</small></article>
  </div>
  <p class="simulador__nota">Não inclui IR, custos, créditos, atualização do limite pelo IPCA, contratos de transição, imóveis de copropriedade nem o gatilho do próprio ano. A alíquota-padrão informada não é uma alíquota nacional definitiva.</p>
</div>
</template>
