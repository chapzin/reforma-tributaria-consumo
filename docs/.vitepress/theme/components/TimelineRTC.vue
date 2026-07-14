<script setup lang="ts">
const marcos = [
  ['2026', 'Teste', 'CBS 0,9% + IBS 0,1%; dispensa do recolhimento quando cumpridas as obrigações previstas.'],
  ['2027–28', 'CBS entra', 'PIS/Cofins saem; CBS plena menos 0,1 p.p.; IBS 0,1%; IS começa; IPI tende a zero, preservada a ZFM.'],
  ['2029', '10/90', 'IBS em 10% da alíquota de transição; ICMS/ISS em 90%.'],
  ['2030', '20/80', 'IBS 20%; ICMS/ISS 80%.'],
  ['2031', '30/70', 'IBS 30%; ICMS/ISS 70%.'],
  ['2032', '40/60', 'IBS 40%; ICMS/ISS 60%.'],
  ['2033', 'Novo sistema', 'IBS/CBS integralmente; extinção de ICMS e ISS.']
]
</script>

<template>
<div class="timeline" aria-label="Linha do tempo da transição tributária">
  <article v-for="marco in marcos" :key="marco[0]">
    <div class="timeline__year">{{ marco[0] }}</div>
    <div><strong>{{ marco[1] }}</strong><p>{{ marco[2] }}</p></div>
  </article>
</div>
</template>
