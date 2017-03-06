<template>
  <div class="helloComponent">
    <ul>
      <li v-for="post in posts"><postComponent :post="post"></postComponent></li>
    </ul>
  </div>
</template>

<script>
import postComponent from './postComponent.vue'

export default {
  name: 'helloComponent',
  components: { postComponent },
  data () {
    return {
      posts: []
    }
  },
  created: function () {
    // eslint-disable-next-line
    axios.get('http://jsonplaceholder.typicode.com/posts').then((data) => {
      this.posts = data.data
      console.log(data)
    })
  }
}
</script>
