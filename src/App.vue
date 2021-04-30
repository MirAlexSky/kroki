<template>
  <div class="appContainer">
    <MenuComponent class="MenuComponent"></MenuComponent>
    <div class="right-side">
      <HeaderComponent class="header-component" @toggle-open="toggleHeader" :class="{'header-open': isHeaderOpen}"></HeaderComponent>
      <ContentComponent class="content-component"></ContentComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MenuComponent from './components/MenuComponent.vue'
import ContentComponent from './components/ContentComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MenuComponent,
    ContentComponent,
  },
  data() {
    return {
      isHeaderOpen: false,
    }
  },
  methods: {
    toggleHeader(e) {
      this.isHeaderOpen = e;
    }
  }
}
</script>

<style src="./resources/css/styles.css"></style>
<style>


.appContainer {
  font-family: Comfortaa, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.appContainer {
  display: flex;
  justify-content: start;
  height: 100vh;
}

.MenuComponent {
  width: 200px;
}

.right-side {
  flex-grow: 1;
  position: relative;
}

.header-component {
  position: absolute;
  top: -70px;
  transition: top .2s;
}

.header-open {
  top: 0px;
}

.content-component {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
}

</style>
