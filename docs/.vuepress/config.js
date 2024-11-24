import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'ru-RU',

  title: 'ISHome Hub',
  description: 'Руководство по эксплуатации центра умного дома ISHome Hub',

  theme: defaultTheme({
    logo: '/images/android-chrome-192x192.png',

    navbar: ['/', '/get-started.md'],
  }),

  bundler: viteBundler(),
})
