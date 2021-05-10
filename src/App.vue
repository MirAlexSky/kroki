<template>
  <div class="appContainer">
    <MenuComponent class="MenuComponent"
                   @menu-item:select="selectMenuItem"
                   @width:change="widthChange"
                   :style="sideMenuStyle">
    </MenuComponent>
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
      selectedMenuItem: {name: 'search'},
      menuWidth: 200,
    }
  },

  computed: {
    sideMenuStyle() {
      return {
        width: (this.menuWidth < 130 ? 50 : this.menuWidth) + 'px'
      }
    }
  },

  methods: {
    toggleHeader(e) {
      this.isHeaderOpen = e;
    },

    selectMenuItem(itemName) {
      this.selectedMenuItem.name = itemName
    },

    widthChange(widthIncrement) {
      this.menuWidth += widthIncrement
    }
  },
  provide() {
    return {
      selectedMenuItem: this.selectedMenuItem
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
  background: repeating-linear-gradient(transparent, transparent 20px, rgba(128, 128, 128, 0.38) 22px),
  repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(128, 128, 128, 0.28) 22px);
}

.MenuComponent {
  ;
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
