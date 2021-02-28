const fs = require('fs')
const path = require('path')
const File = require('../models/File.Schema')

class FilesService {
  static createDir(file) {
    const filePath = path.join(__dirname, '../', '../', 'files', `${file.user}`, `${file.path}`)

    return new Promise((res, rej) => {
      try {
        if (!fs.existsSync(filePath)) {
          console.log(filePath)
          fs.mkdirSync(filePath)
          return res({ message: 'File was created' })
        }
        return rej(new Error('File already exist'))
      } catch (error) {
        return rej(new Error('File error'))
      }
    })
  }
}

module.exports = FilesService
