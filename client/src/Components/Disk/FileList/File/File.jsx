import React from 'react'

import './File.scss'

import dirIcon from './assets/folder.svg'
import fileIcon from './assets/file.svg'

const File = ({ file }) => (
  <div className="file">
    <div className="file__img">
      <img src={file.type === 'dir' ? dirIcon : fileIcon} alt="" className="file__img" />
    </div>
    <div className="file__name">{file.name}</div>
    <div className="file__date">{file.date.slice(0, 10)}</div>
    <div className="file__size">{file.size}</div>
  </div>
)

export default File
