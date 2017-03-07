<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header" id="app">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">Title</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <router-link to="/" class="mdl-navigation__link">Home</router-link>
        <router-link to="/posts" class="mdl-navigation__link">Posts</router-link>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation">
      <router-link to="/" class="mdl-navigation__link">Home</router-link>
      <router-link to="/posts" class="mdl-navigation__link">Posts</router-link>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content">
      <transition name="fade" mode="out-in">
        
        <router-view></router-view>
      </transition>
    </div>
  </main>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
