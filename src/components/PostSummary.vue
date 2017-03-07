<template>
  <div class="postSummary">
    {{title}}
  </div>
</template>

<script>
export default {
  props: ['idPost'],
  data () {
    return {
      title: '',
      body: '',
      userId: null,
      id: null
    }
  },
  created () {
    // eslint-disable-next-line
    this.$http.get('http://jsonplaceholder.typicode.com/posts/2').then((response) => {
      this.title = response.data.title
    })
  }
}
</script>
