
const mainContent = Vue.component('main-content', {
  props: ['list'],
  template: `
  <div class="post-widgets">
    <div class="col-sm-9 col-md-8">
      <div class="panel panel-default" v-for="article in list">
        <div class="panel-heading">
          <h3 class="panel-title">{{article.title}}
            <span></span>
            <span></span>
            <span>Author By : {{article.author}}</span>
          </h3>

        </div>
        <div class="panel-body">
          {{article.content}}
        </div>
      </div>

    </div>
  </div>`

})


Vue.component('sidebar', {
  props: ['list'],
  template: `
  <div class="col-md-4">

        <div class="widgets">
            <h3>Search</h3>
            <div class="input-group">
                <input type="text" class="form-control" name="x" placeholder="Search term...">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">search</button>
                </span>
            </div>
        </div>

        <div class="widgets">
            <h3>Categori</h3>
            <ul>
                <li>
                  <router-link to="/home">Home</router-link>
                </li>
                <li>
                  <router-link to="/articles">Article</router-link>
                </li>
            </ul>
            <ul>
              <li v-for="article in list">
                <router-link :to="'/articles/'+article._id">
                  {{article.title}}
                </router-link>
                  </li>
            </ul>
        </div>
    </div>`
})

const home = Vue.component('home',{
  template: `
  <div class="post-widgets">
    <div class="col-sm-9 col-md-8">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Home
          </h3>

        </div>
        <div class="panel-body">
          Welcome To Home
        </div>
      </div>

    </div>
  </div>
  `
})

const oneArticle = Vue.component('one-article',{
  template: `
  <div class="post-widgets">
    <div class="col-sm-9 col-md-8">
        <div class="panel-heading">

          <h3 class="panel-title">{{article.title}}
          </h3>

        </div>
        <div class="panel-body">
          {{article.content}}
        </div>
      </div>
  </div>`,

  props: ['id'],
  data() {
    return {
      article: ''
    }
  },
  watch: {
    id: function() {
      this.getArticle()
    }
  },
  methods: {
    getArticle() {
      var self = this
      axios.get(`http://localhost:3000/articles/${this.id}`)
      .then(res => {
        console.log('ini response : ' + res.data);
        self.article = res.data
        // console.log(this.article);
      })
      .catch( err => console.log(err))
    }
  },
  created() {
    this.getArticle();
  }
})
