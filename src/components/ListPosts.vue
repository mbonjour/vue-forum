<template>
  <div class="listPosts">
    <vloader v-if="loading"></vloader>
    <div v-else>
      <ul class="demo-list-three mdl-list">
        <li class="mdl-list__item mdl-list__item--three-line" v-for="post in posts">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-avatar">person</i>
            <span>{{ post.title }}</span>
            <span class="mdl-list__item-text-body">
              {{ post.body }}
            </span>
          </span>
        </li>
      </ul>
    </div>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" @click="addPost">
      <i class="material-icons">add</i>
    </button>
  </div>
</template>

<script>
import vloader from './vue-loader'
export default {
  name: 'listPosts',
  components: { vloader },
  data () {
    return {
      posts: null,
      loading: true
    }
  },
  created () {
    // eslint-disable-next-line
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then((data) => {
      this.loading = false
      this.posts = this.$_.dropRight(data.data, 95)
    })
  },
  methods: {
    addPost () {
      this.posts.push({id: 312321, title: 'ttititi', body: 'boddyydydyd', userId: 123})
    }
  }
}
</script>

<style>
.mdl-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
