<template>
  <div class="node-wrap">
    <a :href="node.url" target="_blank">
      <input v-if="lNode" class="node-input" type="text" v-model="lNode.name" disabled>
    </a>
    <div class="param-wrap">
      <div class="node-category" v-if="node.category">{{node.category}}</div>
      <div class="node-author" v-if="node.author">{{node.author}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeNode",
  props: {
    node: {
      required: true,
    },
    edit: {
      required: false,
      default: true,
    }
  },

  mounted() {
    this.lNode = this.node;
  },

  watch: {
    lNode() {
      this.$emit('node:update', this.lNode)
    }
  },

  data() {
    return {
      lNode: undefined,
    }
  },

  computed: {}
}
</script>

<style scoped>

.node-wrap {
  cursor: pointer;
  border-left: 3px solid var(--dark-blue);
  border-radius: 8px;
  padding: 0 0 0 10px;
  margin: 0 0 12px 0;
  max-width: 500px;
}

.node-wrap:hover {
  background-color: #f1f1f1;
}

.node-input {
  font-size: 14pt;
  padding: 3px 3px 0 3px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  display: inline-block;
  width: 100%;
  color: black;
}

.node-input:active {
  border: none;
}

.node-input:focus {
  background-color: #f1f1f1;
}

.param-wrap {
  display: flex;
}

.node-category {
  font-size: 9pt;
  border: 2px solid #d4d4d4;
  border-radius: 20px;
  padding: 3px;
  margin: 0 5px 0;
}

.node-author {
  font-size: 9pt;
  border: 2px solid #d4d4d4;
  border-radius: 20px;
  padding: 3px;
  margin: 0 5px 0;
}

</style>