const routes = [
  { path: '/home', component: home },
  { path: '/articles', component: mainContent },
  { path: '/articles/:id', component: oneArticle, props: true }
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: "#app",
  data: {
    list_articles: []
  },
  methods: {
    getAllArticles() {
      var self = this
      axios.get('http://localhost:3000/articles')
      .then( (res) => {
        // console.log(res);
        self.list_articles = res.data
      })
    }
  },
  created() {
    this.getAllArticles()
  }
})
