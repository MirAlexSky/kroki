<template>
  <div class="menuContainer">
    <div class="menuHeader"></div>
    <div class="itemsContainer">
      <input type="radio" name="item" id="search-item">
      <input type="radio" name="item" id="upload-item">
      <input type="radio" name="item" id="categories-item">
      <div class="selector">-</div>
      <div class="item" @click="selectView" id="search">
        <label for="search-item">Поиск</label>
      </div>
      <div class="item" @click="selectView" id="upload">
        <label for="upload-item">Загрузить</label>
      </div>
      <div class="item" @click="selectView" id="categories">
        <label for="categories-item">Категории</label>
      </div>
    </div>
    <div class="width-controller" @mousedown="startWidthTracking"></div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  components: {

  },
  data() {
    return {
      selectedMenuItem: 'search',
      widthChangeHandler: undefined,
      selectorTop: '10px',
    }
  },

  computed: {

  },

  methods: {
    selectView(event) {
      this.selectedMenuItem = event.currentTarget.id
      this.$emit('menu-item:select', event.currentTarget.id)

      this.selector
    },

    startWidthTracking(clickEvent) {
      let x = clickEvent.clientX

      this.widthChangeHandler = (moveEvent) => {
        let widthOffset = moveEvent.clientX - x
        this.$emit('width:change', widthOffset)
        x = moveEvent.clientX
      }

      let stopTracking = () => {
        document.removeEventListener('mousemove', this.widthChangeHandler)
        document.removeEventListener('mouseup', stopTracking)
      }

      document.addEventListener('mousemove', this.widthChangeHandler)
      document.addEventListener('mouseup', stopTracking)
    },
  },
}
</script>

<style scoped>
.menuContainer {
  border-right: var(--yellow) 1px solid;
  outline: var(--blue) 1px solid;
  height: 100%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.6);
}

.itemsContainer {
  padding: 10px 0 20px;
  position: relative;
}

.item {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  cursor: pointer;
  user-select: none;
  height: 100%;
  z-index: 1;
  position: relative;
}

.item label {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px 0 10px 20px;
  cursor: pointer;
  user-select: none;
}

.selector {
  padding: 10px 0 10px 20px;
  box-shadow: var(--blue) 0 0 5px;
  color: transparent;
  background-color: transparent;
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 0;
  transition: top .25s;
}

.menuHeader {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: bisque;
  border-bottom: 1px dimgrey solid;
  font-size: 26pt;
  box-sizing: content-box;
  background-color: #3A78A1;
  background-image:
      linear-gradient(#83ABC4 1px, transparent 1px),
      linear-gradient(90deg, #83ABC4 1px, transparent 1px),
      linear-gradient(#3A78A1 1px, transparent 1px),
      linear-gradient(90deg, #3A78A1 1px, transparent 1px),
      linear-gradient(#4E86AB 1px, transparent 1px),
      linear-gradient(90deg, #4E86AB 1px, transparent 1px);
  background-size:
      50px 50px,
      50px 50px,
      5px 5px,
      5px 5px,
      10px 10px,
      10px 10px;
  background-position:
      -1px -1px,
      -1px -1px,
      0 0,
      0 0,
      -1px -1px,
      -1px -1px;
}

.width-controller {
  position: absolute;
  right: -10px;
  top: 0;
  bottom: 0;
  width: 15px;
  cursor: col-resize;
  background-color: transparent;
  z-index: 10;
  user-select: none;
}

input[name=item] {
  display: none;
}

#search-item:checked ~ .selector {
  top: 10px;
}

#upload-item:checked ~ .selector {
  top: 48px;
}

#categories-item:checked ~ .selector {
  top: 85px;
}


</style>