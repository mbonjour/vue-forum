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
    console.log(this.$store)
    // eslint-disable-next-line
    this.$http.get('http://jsonplaceholder.typicode.com/posts/').then((response) => {
      this.title = response.data[0].title
    })
  }
}
</script>
