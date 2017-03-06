<template>
  <div class="helloComponent">
    <ul>
      <li v-for="post in posts">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'helloComponent',
  data () {
    return {
      posts: []
    }
  },
  created: function () {
    this.$http.get('http://jsonplaceholder.typicode.com/posts', (data) => {
      this.posts = data
      console.log(data)
    })
    .error((err) => console.log(err))
  }
}
</script>
