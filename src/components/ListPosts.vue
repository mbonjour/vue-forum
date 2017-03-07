<template>
  <div class="listPosts">
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
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" @click="addPost">
      <i class="material-icons">add</i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'listPosts',
  data () {
    return {
      posts: []
    }
  },
  created: function () {
    // console.log(this)
    // eslint-disable-next-line
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then((data) => {
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
  right: 10px;
  bottom: 10px;
}
</style>
