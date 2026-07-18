import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { defineConfig, type Plugin } from 'vite'
import App from './src/App'

function staticPortfolio(): Plugin {
  return {
    name: 'static-portfolio',
    transformIndexHtml(html) {
      const rootPlaceholder = '<div id="root"></div>'
      const markup = renderToStaticMarkup(createElement(App))

      if (!html.includes(rootPlaceholder)) {
        throw new Error('Static render failed: root placeholder not found')
      }

      return html.replace(rootPlaceholder, `<div id="root">${markup}</div>`)
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [staticPortfolio()],
  server: {
    host: '127.0.0.1',
    port: 4200,
  },
  build: {
    outDir: 'dist',
  },
})
