<template>
  <div class="item-wrap">
    <div class="item"
         @click="openToggle"
         :style="{'padding-left': paddingLeft}"
         :class="{selected: selected}"
    >
      {{ item.name }}
      <div class="image-wrap" v-if="hasChildren">
        <img class="dropDownImage"
             :class="{'image-open': isOpen}"
             src="../assets/down-arrow.svg" alt=""
        >
      </div>
    </div>
    <div v-if="hasChildren" class="children-wrap"
         :class="{'child-wrap-open': isOpen}"
         :style="{'height': childrenHeight}"
    >
      <div class="child-max-height">
        <MenuItem v-for="(child, index) in item.children" :key="index"
                  :item="child"
                  :level="level + 1"
                  @menu-item:select="selectMenuItem"
                  class="child-item"
        ></MenuItem>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",

  props: {
    item: {
      require: true,
    },
    level: {
      require: false,
      default: 0,
    },
    selected: {
      require: true,
      type: Boolean,
    }
  },

  data() {
    return {
      isOpen: false,
      childMaxHeightItem: undefined,
    }
  },

  mounted() {
    this.childMaxHeightItem = this.$el.querySelector('.child-max-height');
  },

  computed: {
    hasChildren() {
      return Boolean(this.item.children && this.item.children.length)
    },
    paddingLeft() {
      return 20 + this.level * 5 + 'px'
    },
    childrenHeight() {
      if (this.childMaxHeightItem !== undefined) {
        return this.isOpen ? this.childMaxHeightItem.offsetHeight + 'px' : '0px'
      } else
        return undefined;
    }
  },

  methods: {

    openToggle() {
      if (this.hasChildren) {
        this.isOpen = !this.isOpen;
      } else {
        this.selectMenuItem()
      }
    },

    selectMenuItem(itemId) {
      this.$emit('menu-item:select', itemId ?? this.item.id)
    },

    getAllChildren(menuItem) {
      if (!menuItem.children) return undefined

      let allChildren = [];

      for (let item in this.children) {
        if (item.parent_id === menuItem.id) {
          allChildren.push(item);
          if (item.children) {
            allChildren.concat(this.getAllChildren(item))
          }
        }
      }

      return allChildren;
    }
  }
}
</script>

<style scoped>
  .item {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    cursor: pointer;
    user-select: none;
    padding: 10px 0;
    height: 100%;
  }

  .item-wrap {
    background-color: white;
    height: inherit;
    overflow: hidden;
  }

  .item:hover {
    background-color: #eaeaea;
  }

  .image-wrap {
    display: inline-block;
    flex-grow: 1;
    text-align: center;
  }

  .dropDownImage {
    width: 15px;
    height: 15px;
    transition: transform .2s;
  }

  .image-open {
    transform: rotate(-90deg);
  }

  .children-wrap {
    transition: ease-in-out height .3s;
  }

  .child-item {
    padding: 0 0 0 10px;
  }

  .child-wrap-open {

  }

  .selected {
    background-color: #eaeaea;
  }

</style>