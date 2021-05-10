<template>
  <div class="uploader-wrap">
    <div class="upload-menu">
      <h2 class="title">Загрузка файла</h2>
      <div class="button-wrap">
        <button
            class="btn upload-file-btn"
            @click="selectFile"
        >
          <img src="@/assets/plus.svg" alt="">
        </button>
        <input type="file" class="input-upload">

      </div>
      <p>
        <input type="text" name="file-name" placeholder="Имя файла" v-model="uploadedFile.name">
      </p>
      <p>
        <input type="text" name="file-categories" placeholder="Категории" v-model="uploadedFile.category">
      </p>
      <p>
        <input type="text" name="file-author" placeholder="Автор" v-model="uploadedFile.author">
      </p>
    </div>
    <hr class="hr">
    <div class="resent-files">
      <p class="resent-title">
        Последние документы
      </p>
      <div class="no-resent-files" v-if="!lastFiles.length">... у вас ещё нет загруженных файлов</div>
      <TreeNode
          v-for="file in lastFiles"
          :key="file.id"
          :node.sync="file"
      >
      </TreeNode>
    </div>
  </div>
</template>

<script>
import TreeNode from "@/components/TreeNode";

export default {
  name: "FileUploader",
  components: {
    TreeNode
  },

  data() {
    return {
      lastFiles: [
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
          category: 'Собрание'
        },
      ],
      fileInputElement: undefined,
      uploadedFile: {
        name: '',
        categories: '',
        author: '',
        url: '',
      },
    }
  },

  mounted() {
    this.initFileLoader();
  },

  computed: {},

  methods: {

    initFileLoader() {
      this.fileInputElement = document.querySelector('.input-upload')
      this.fileInputElement.addEventListener('change', this.uploadFile)
    },

    selectFile() {
      this.fileInputElement.click()
    },

    uploadFile() {
      let files = this.fileInputElement.files

      if (files.length === 0) {
        alert('Файл не был выбран')
      } else {
        for (let file of files) {

          if (!this.isValidFileType(file)) {
            alert('Выбранный формат файлов не поддерживается')
            return
          }

          let url = window.URL.createObjectURL(file);

          let categories = this.uploadedFile.categories.split(',').map((_category) => _category.trim())
          let author = this.uploadedFile.author.split(',').map((_author) => _author.trim())
          let date = new Date()

          if (!this.uploadedFile.name.length)
            this.uploadedFile.name = file.name

          this.lastFiles.unshift(this.uploadedFile)

          // this.$emit('files:update', this.uploadedFile) todo дописать vuex
          this.serverUploadFile()
        }
      }
    },


    isValidFileType(file) {
      return true
      /*let validFileTypes = [
        'image/jpg',
        'image/jpeg',
        'image/pjpeg',
        'image/png',
      ]

      return validFileTypes.includes(file.type)*/
    },
    getFileSize(file) {
      let sizeNames = [
        'bytes', 'kilobytes', 'megabytes', 'gigabytes'
      ]

      let size = file.size
      let sizeLevel = 0

      while (size > 1024) {
        size = Math.floor(size / 1024)
        sizeLevel++
      }

      return size + ' ' + sizeNames[sizeLevel]
    },

    serverUploadFile() {
      console.log('start uploading')
      let file = this.fileInputElement.files[0]
      let formData = new FormData();

      formData.append('file', file)
      formData.append('fileName', this.uploadedFile.name)
      formData.append('author', this.uploadedFile.author)
      formData.append('categories', this.uploadedFile.categories)

      console.log('prefetch')

      let result = fetch('api/upload-file', {
        method: 'POST',
        body: formData,
      })

      console.log(result)
    }
  }
}
</script>

<style scoped>
.title {
  margin: 0 0 24px 0;
}

.hr {
  border: none;
  background-color: black;
  height: 2px;
}

.uploader-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  border: 1px solid var(--yellow);
  z-index: 1;
}

.uploader-wrap:before {
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

.button-wrap {
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.upload-file-btn {
  width: 40px;
  height: 40px;
  color: var(--blue);
  border: 1px solid var(--dark-blue);
}

.upload-file-btn img {
  width: 100%;
  height: 100%;
}

.upload-file-btn:active {
  width: 38px;
  height: 38px;
}

.input-upload {
  display: none;
}

.upload-menu {
  position: relative;
  width: 100%;
  padding: 0 0 50px 0;
}

.upload-menu input {
  border-bottom: 1px solid grey;
  transition: border-bottom-color .1s, border-bottom-width .1s;
  background-color: transparent;
  font-size: 13pt;
  padding: 6px;
  width: 50%;
}

.upload-menu input:focus {
  border-bottom: 2px solid #404040;
}


.resent-files {
  margin: 10px 0 0 0;
}

.resent-title {
  margin: 0 0 20px 0;
}

.no-resent-files {
  font-size: 12pt;
  color: grey;
}

</style>