<template>
    <div class="loading" :style="loading">
    </div>
</template>

<script>
  export default {
    data () {
      return {
        progress: 0
      }
    },
    computed: {
      loading () {
        // console.log(this.progress)
        return 'width: ' + this.progress + '%'
      }
    },
    mounted () {
      // mettre interval autour for
      for (this.progress = 0; this.progress < 100; this.progress++) {
        // modifier pour que ça n'arrive jamais à 100
        this.progress++
        if (this.$store.getters.loading === false) {
          this.progress = 100
        }
      }
    },
    watch: {
      progress () {
        // console.log(this.progress)
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
