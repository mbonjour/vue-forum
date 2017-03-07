<template>
  <div class="postSummary">
    
  </div>
</template>

<script>
export default {
  name: 'postSummary',
  props: ['idPost'],
  data () {
    return {
      title: '',
      body: '',
      userId: null,
      id: null
    }
  },
  created: () => {
    // eslint-disable-next-line
    axios.get('http://jsonplaceholder.typicode.com/posts/' + idPost ).then((data) => {
      this.posts = data.data
    })
  }
}
</script>
