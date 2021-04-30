<template>
  <div class="menuContainer">
    <div class="menuHeader"></div>
    <div class="itemsContainer">
      <MenuItem v-for="(item, index) in menuItems" :key="index"
                :item="item"
                class="menuItem"
      >
      </MenuItem>
    </div>
  </div>
</template>

<script>
import MenuItem from "./MenuItem"

export default {
  name: "MenuComponent",
  components: {
    MenuItem,
  },
  data() {
    return {
      menuItems: [
        {
          'id': 1,
          'name': 'Главная доска',
          'children': [],
        },
        {
          'id': 2,
          'name': 'Мероприятия',
          'children': [
              {
              'id': 3,
              'name': 'Субботник',
              'children': [],
            },
            {
              'id': 4,
              'name': 'Корпоратив',
              'children': [],
            },
            {
              'id': 5,
              'name': 'День победы',
              'children': [],
            },
            {
              'id': 6,
              'name': 'Собрание',
              'children': [],
            }
          ],
        },
        {
          'id': 7,
          'name': 'Классы',
          'children': [],
        },
      ],

      currentContentId: 1
    }
  },

  computed: {

  },

  methods: {

  },
}
</script>

<style scoped>
.menuContainer {
  border-right: var(--yellow) 1px solid;
  outline: var(--blue) 1px solid;
  height: 100%;
}

.itemsContainer {
  padding: 10px 0 20px;
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
</style>