<template>
  <div class="menu-item-container">
    <MenuItem v-for="item in menuItems" :key="item.id"
              :item="item"
              class="menuItem"
    >
    </MenuItem>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem'

export default {
  name: "CategoryController",
  components: {
    MenuItem
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
    }
  },
}
</script>

<style scoped>

</style>