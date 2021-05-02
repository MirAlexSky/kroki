<template>
  <div class="content-wrap">
    <div class="file-manager-wrap">
      <div class="file-manager">
        <FileManager
            :category="activeCategory"
            :tags="selectedTags"
            :files="filteredFiles"
        >
        </FileManager>
        <div class="button-wrap">
          <button
              class="btn btn-round upload-file"
              @click="selectFile"
          >+
          </button>
        </div>
        <input type="file" class="input-upload">
      </div>
    </div>
  </div>
</template>

<script>
import FileManager from "./FileManager"

export default {
  name: "ContentComponent",
  components: {
    FileManager
  },

  data() {
    return {
      files: [
        {
          id: 1,
          name: 'Отчёт по работам.docx',
          type: 'file',
          category: 7
        },
        {
          id: 2,
          name: 'Оценки, срез.docx',
          type: 'file',
          category: 7
        },
        {
          id: 3,
          name: 'Заявка на экскурсию.docx',
          type: 'file',
          category: 7
        },
        {
          id: 4,
          name: 'Учебник по истории 7 класс.pdf',
          type: 'file',
          category: 3
        },
        {
          id: 5,
          name: 'Заявление на увольнение.docx',
          type: 'file',
          category: 3
        },
      ],

      fileInputElement: undefined,

      uploadedFiles: [],
    }
  },

  mounted() {
    this.initFileLoader();
  },

  computed: {
    activeCategory() {
      return this.selectedMenuItem.id
    },

    filteredFiles() {
      return this.files.filter((file) => file.category === this.activeCategory)
    },

    selectedTags() {
      return []
    }
  },

  inject: ['selectedMenuItem'],

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
        console.log('Да ты же ничего не выбрал, глупенький')
      } else {
        for (let file of files) {

          if (!this.isValidFileType(file)) {
            alert('You cant download this type of file')
            return
          }

          let fileTextResult = 'Name: ' + file.name + '; Size: ' + this.getFileSize(file)
          let url = window.URL.createObjectURL(file);

          this.uploadedFiles.push({
            file: file,
            status: fileTextResult,
            url: url,
          });

          this.files.push({
            name: file.name,
            type: 'file',
          });
        }
      }
    },

    isValidFileType(file) {
      let validFileTypes = [
        'image/jpg',
        'image/jpeg',
        'image/pjpeg',
        'image/png',
      ]

      return validFileTypes.includes(file.type)
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
    }
  }
}
</script>

<style scoped>
.content-wrap {
  background: repeating-linear-gradient(transparent, transparent 20px, rgba(128, 128, 128, 0.38) 22px),
  repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(128, 128, 128, 0.28) 22px);
}

.file-manager-wrap {
  height: 100%;
  width: 100%;
  padding: 80px 20px 20px 20px;
}

.file-manager {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid var(--yellow);
  position: relative;
  z-index: 1;
}

.file-manager:before {
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.upload-file {
  padding: 2px 2px 0 0;
  margin: 0;
  font-size: 36pt;
  color: var(--blue);
  border: 1px solid var(--dark-blue);
  font-weight: bold;
  text-align: center;
}

.upload-file:active {
  padding: 1px 1px 0 0;
  font-size: 34pt;
}

.input-upload {
  display: none;
}

</style>