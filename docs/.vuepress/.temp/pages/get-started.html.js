import comp from "/home/iceslam/PhpstormProjects/ishomehub-docs/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Быстрый старт\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Технические характеристики\",\"slug\":\"технические-характеристики\",\"link\":\"#технические-характеристики\",\"children\":[]},{\"level\":2,\"title\":\"Комплектация\",\"slug\":\"комплектация\",\"link\":\"#комплектация\",\"children\":[]}],\"git\":{\"updatedTime\":1732481838000,\"contributors\":[{\"name\":\"IceSlam\",\"email\":\"pk@noosoft.ru\",\"commits\":1,\"url\":\"https://github.com/IceSlam\"}]},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
