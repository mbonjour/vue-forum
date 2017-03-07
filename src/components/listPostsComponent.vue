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
  </div>
</template>

<script>
import postSummary from './postSummaryComponent.vue'

export default {
  name: 'listPosts',
  components: { postSummary },
  data () {
    return {
      posts: []
    }
  },
  created: function () {
    // eslint-disable-next-line
    axios.get('http://jsonplaceholder.typicode.com/posts').then((data) => {
      this.posts = data.data
      console.log(data.data)
    })
  }
}
</script>
