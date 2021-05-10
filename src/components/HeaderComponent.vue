<template>
  <div class="header-container">
    <div class="options" @click="openCategoryEditor">
      Настройки
    </div>
    <div class="canban">
      <Canban></Canban>
    </div>
    <div class="options">
      Войти
    </div>
    <div class="toggle-button" @click="toggleOpen()">
      <img src="../assets/drop-down-cartoon.png" alt="" :class="{buttonOpen: isToggleOpen}">
    </div>
  </div>
</template>

<script>
import Canban from './Canban.vue'

export default {
  name: "headerComponent",
  components: {
    Canban
  },
  data() {
    return {
      isToggleOpen: false,
    }
  },
  computed: {},
  methods: {
    toggleOpen() {
      this.isToggleOpen = !this.isToggleOpen;
      return this.$emit('toggle-open', this.isToggleOpen);
    },

    openCategoryEditor() {

    }
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px var(--yellow) solid;
  outline: 1px var(--blue) solid;
  padding: 0 50px;
  position: relative;
  z-index: 100;
}

.canban {
  margin: 10px;
}

.toggle-button {
  position: absolute;
  bottom: -30px;
  right: 60px;
  width: 30px;
  height: 30px;
  border-radius: 0 0 5px 5px;
  border: var(--blue) 1px solid;
  background-color: var(--yellow);
  cursor: pointer;
  user-select: none;
}

.toggle-button img {
  width: 100%;
  height: 100%;
  margin: auto;
  transition: transform .2s;
}

.buttonOpen {
  transform: rotate(180deg);
}

</style>