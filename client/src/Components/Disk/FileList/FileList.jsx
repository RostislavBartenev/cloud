import React from 'react'
import { useSelector } from 'react-redux'

import File from './File/File'

import './FileList.scss'

const FileList = () => {
  const filesItems = useSelector(({ files }) => files.files)
    .map((file) => <File key={file.id} file={file} />)

  return (
    <div className="fileList">
      <div className="fileList__header">
        <div className="fileList__name">Name</div>
        <div className="fileList__date">Date</div>
        <div className="fileList__size">Size</div>
      </div>
      {filesItems}
    </div>
  )
}

export default FileList
