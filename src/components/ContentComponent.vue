<template>
  <div class="content-wrap">
    <FileManager v-show="activeMenuItem === 'search'"></FileManager>
    <FileUploader v-show="activeMenuItem === 'upload'"></FileUploader>
    <CategoryController v-show="activeMenuItem === 'category'"></CategoryController>
  </div>
</template>

<script>
import FileManager from "@/components/FileManager"
import CategoryController from "@/components/CategoryController";
import FileUploader from "@/components/FileUploader";
import FileEditor from "@/components/FileEditor";

export default {
  name: "ContentComponent",
  components: {
    CategoryController,
    FileManager,
    FileUploader,
  },

  data() {
    return {}
  },

  computed: {
    activeMenuItem() {
      return this.selectedMenuItem.name
    },
  },

  inject: ['selectedMenuItem'],
}
</script>

<style scoped>
.content-wrap {
  height: 100%;
  width: 100%;
  padding: 80px 20px 20px 20px;
}

</style>