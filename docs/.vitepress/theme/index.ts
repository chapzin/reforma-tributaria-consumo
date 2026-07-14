import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import StatusNormativo from './components/StatusNormativo.vue'
import TimelineRTC from './components/TimelineRTC.vue'
import SimuladorCadeia from './components/SimuladorCadeia.vue'
import SimuladorLocacao from './components/SimuladorLocacao.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('StatusNormativo', StatusNormativo)
    app.component('TimelineRTC', TimelineRTC)
    app.component('SimuladorCadeia', SimuladorCadeia)
    app.component('SimuladorLocacao', SimuladorLocacao)
  }
} satisfies Theme
