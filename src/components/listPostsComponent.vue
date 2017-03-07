<template>
  <div class="listPosts">
    <post-summary v-if="posts.length > 1"></post-summary>
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
    <button @click="addPost">add</button>
  </div>
</template>

<script>
import PostSummary from './PostSummary.vue'

export default {
  name: 'listPosts',
  components: { PostSummary },
  data () {
    return {
      posts: []
    }
  },
  created: function () {
    // console.log(this)
    // eslint-disable-next-line
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then((data) => {
      this.posts = this.$_.dropRight(data.data, 85)
    })
  },
  methods: {
    addPost () {
      this.posts.push({id: 312321, title: 'ttititi', body: 'boddyydydyd', userId: 123})
    }
  }
}
</script>
