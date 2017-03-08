<template>
    <div class="loading" :style="loading">
    </div>
</template>

<script>
  export default {
    computed: {
      loading () {
        // console.log(this.progress)
        return 'width: ' + this.$store.getters.progress + '%'
      }
    }
  }
</script>

<style>
  .loading {
    height: 5px;
    background-color: rgb(65, 184, 131);
  }
</style>
