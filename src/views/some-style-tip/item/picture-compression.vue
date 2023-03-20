<template>
  <div>
    <el-upload :http-request="updatePiceture" action="#">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <div v-show="file.fileNameDemo">【{{file.fileNameDemo}}】类型为{{file.preType}}，大小为{{file.preSize}}, 压缩后大小为{{file.afterSize}}, 类型为{{file.afterType}}</div>
  </div>
</template>

<script>
import { h } from 'vue'
export default {
  data() {
    return {
      file: {
        fileNameDemo: null,
        preSize: 0,
        afterSize: 0,
        preType: null,
        afterType: null
      }

    }
  },
  methods: {
    updatePiceture(picture) {
      if(picture) {
        this.file.fileNameDemo = picture.file.name
        this.file.preSize = picture.file.size
        this.file.preType = picture.file.type
        // console.log(this.file, 'file-----');
        console.log(picture, 'picture--------');
        this.compression(picture)
        .then( res => {
          console.log(res.file, 'res-------');
        })
        .catch(e => {
          console.log(e, 'error------');
        })
      }
    },
    // 使用toBlob压缩
    compression(picture) {
      return new Promise((resolve, reject) => {
        let src = window.URL.createObjectURL(new Blob([picture]))
        console.log(src, 'src-------');
        // let img = new Image
        // img.src = src
        // this.$nextTick(() => {
        //   console.log(img, 'img------');
        //   try {
        //     let width = 50
        //     let height = 50
        //     let imgCanvas = document.createElement('canvas')
        //     imgCanvas.width = width
        //     imgCanvas.height = height

        //     // 绘制图片
        //     let ctx = imgCanvas.getContext('2d')
        //     ctx.drawImage(img, 0, 0, width, height)

        //     console.log(imgCanvas, 'imgCanvas-------');
        //     imgCanvas.toBlob((afterFile) => {
        //       console.log(afterFile, 'afterFile-------');
        //       let compressFile = this.blobToFile(afterFile, `压缩-${this.file.fileNameDemo}`, 'image/webp')
        //       resolve({file: compressFile})
        //     }, 'image/webp', 0.5)

        //     imgCanvas = null

        //   } catch(e) {
        //     console.log(e, 'error--------');
        //   } 
        // })
      })
    },
    blobToFile(blob, name, type) {
      return new window.File([blob], name, {type: type})
    }
  }
}
</script>

<style lang="scss" scoped>
.el-upload-list {
  display: none !important;
}
</style>

</style>