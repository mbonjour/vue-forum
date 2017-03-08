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
      for (let i = 0; i <= 100; i++) {
        // modifier pour que ça n'arrive jamais à 100
        this.progress = i
        // if (this.$store.getters.loading === false) {
        //   i = 100
        //   this.progress = i
        //   break
        // }
      }
    },
    watch: {
      progress () {
        console.log(this.progress)
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
