<template>
  <div class="files-wrap">
    <div class="search-wrap">
      <h2 class="title">Поиск документа</h2>
      <input
          type="text"
          class="search-input"
          placeholder="По названию"
          v-model="filter.name"
      >
      <input
          type="text"
          class="search-input"
          placeholder="По категориям"
          v-model="filter.category"
      >
      <input
          type="text"
          class="search-input"
          placeholder="По автору"
          v-model="filter.author"
      >
    </div>
    <TreeNode
        v-for="file in filteredFiles"
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

  data() {
    return {
      files: [
        {
          id: 1,
          name: 'Отчёт по работам.docx',
          type: 'file',
          category: 'Школа'
        },
        {
          id: 2,
          name: 'Оценки, срез.docx',
          type: 'file',
          category: 'Школа'
        },
        {
          id: 3,
          name: 'Заявка на экскурсию.docx',
          type: 'file',
          category: 'Школа'
        },
        {
          id: 4,
          name: 'Учебник по истории 7 класс.pdf',
          type: 'file',
          category: 'Соборание',

        },
        {
          id: 5,
          name: 'Заявление на увольнение.docx',
          type: 'file',
          category: 'Личное',
          author: 'Е.Н. Синягина',
        },
      ],
      filter: {
        name: '',
        category: '',
        author: '',
      }
    }
  },

  mounted() {
  },

  computed: {
    filteredFiles() {
      return this.files.filter((file) => {

        for (let prop of this.notEmpty(Object.keys(this.filter))) {

          if (Object.hasOwnProperty.call(file, prop)) {

              if (file[prop].toString().toLowerCase().indexOf(this.filter[prop].toString().toLowerCase()) === -1) {
                return false
              }
          } else {
            return false
          }
        }
        return true
      })
    },
  }
  ,

  methods: {
    notEmpty(iterable) {
      return iterable.filter((item) => this.filter[item].length > 0)
    }
  }
}
</script>

<style scoped>
.files-wrap {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  border: 1px solid var(--yellow);
  position: relative;
  z-index: 1;
}

.files-wrap:before {
  content: '';
  position: absolute;
  top: -3px;
  right: -3px;
  bottom: -3px;
  left: -3px;
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid var(--blue);
  z-index: -1;
}

.search-wrap {
  width: 100%;
  padding: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 14pt;
}

.search-input {
  border-bottom: 1px solid grey;
  transition: border-bottom-width .1s, border-bottom-color .1s;
  background-color: transparent;
  font-size: 13pt;
  padding: 6px;
  width: 50%;
}

.search-input:focus {
  border-bottom: 2px solid #404040;
}

</style>