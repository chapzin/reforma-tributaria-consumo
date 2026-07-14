<script setup lang="ts">
const props = withDefaults(defineProps<{ tipo?: 'vigente' | 'tecnico' | 'interpretacao' | 'simulacao'; titulo?: string }>(), { tipo: 'vigente' })
const rotulos = {
  vigente: ['Norma vigente', 'Apoiado em Constituição, lei ou regulamento vigente no corte do guia.'],
  tecnico: ['Cronograma técnico', 'Leiautes, notas técnicas e ambientes podem mudar sem alterar a lei.'],
  interpretacao: ['Ponto de interpretação', 'Há leitura profissional relevante; valide a posição aplicável ao caso.'],
  simulacao: ['Simulação didática', 'Hipóteses simplificadas: não use como apuração ou parecer.']
}
</script>

<template>
<div class="status" :class="`status--${props.tipo}`">
  <strong>{{ props.titulo || rotulos[props.tipo][0] }}</strong>
  <span><slot>{{ rotulos[props.tipo][1] }}</slot></span>
</div>
</template>
