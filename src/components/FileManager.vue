<template>
  <div class="files-wrap">
    <TreeNode
        v-for="file in files"
        :key="file.id"
        :node.sync="file"
    >
    </TreeNode>
  </div>
</template>

<script>
import TreeNode from './TreeNode'

export default {
  name: "FileManager",
  components: {
    TreeNode,
  },

  props: {
    files: {
      required: true,
    },
    category: {
      required: true,
    },
    tags: {
      required: true,
    }
  },

  computed: {

  }
}
</script>

<style scoped>

</style>