const path = require('path')
const filesService = require('../services/filesService')
const User = require('../models/User.Schema')
const File = require('../models/File.Schema')

class FilesController {
  static async createDir(req, res) {
    try {
      const { name, type, parent } = req.body

      const file = new File({
        name, type, parent, user: req.user.id,
      })

      const parentFile = await File.findOne({ _id: parent })

      if (!parentFile) {
        file.path = name
        await filesService.createDir(file)
      } else {
        file.path = path.join(`${parentFile.path}`, `${file.name}`)
        await filesService.createDir(file)
        parentFile.children.push(file.id)
        await parentFile.save()
      }

      await file.save()
      return res.json(file)
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }

  static async getFiles(req, res) {
    try {
      const files = await File.find({ user: req.user.id, parent: req.query.parent })
      return res.json(files)
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }
}

module.exports = FilesController
