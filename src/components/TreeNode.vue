<template>
  <div class="node-wrap">
    <input v-if="lNode" class="node-input" type="text" v-model="lNode.name">
  </div>
</template>

<script>
export default {
  name: "TreeNode",
  props: {
    node: {
      required: true,
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
  border-left: 1px solid var(--blue);
  padding: 0 0 0 10px;
  max-width: 500px;
}

.node-wrap:hover {
  background-color: #f1f1f1;
}

.node-input {
  font-size: 14pt;
  border: none;
  padding: 3px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  display: inline-block;
  width: 100%;
}

.node-input:active {
  border: none;
}

.node-input:focus {
  background-color: #f1f1f1;
}

</style>