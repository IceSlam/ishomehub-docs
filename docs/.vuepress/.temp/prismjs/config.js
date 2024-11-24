import "/home/iceslam/PhpstormProjects/ishomehub-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/home/iceslam/PhpstormProjects/ishomehub-docs/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/home/iceslam/PhpstormProjects/ishomehub-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/home/iceslam/PhpstormProjects/ishomehub-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/home/iceslam/PhpstormProjects/ishomehub-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/home/iceslam/PhpstormProjects/ishomehub-docs/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
