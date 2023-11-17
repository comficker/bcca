import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { animatedUno } from 'animated-unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetForms(),
    presetIcons({
      scale: 1.2,
      collections: {
        'con': FileSystemIconLoader(
          './assets/icons',
          svg => svg,
        ),
      },
    }),
    animatedUno(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {},
  safelist: [],
})
