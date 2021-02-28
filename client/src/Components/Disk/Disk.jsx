import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getFiles from '../../redux/actions/files.action'
import FileList from './FileList/FileList'

import './Disk.scss'

const Disk = () => {
  const dispatch = useDispatch()
  const currentDiv = useSelector(({ files }) => files.files.currentDiv)

  useEffect(() => {
    dispatch(getFiles(currentDiv))
  }, [currentDiv])

  return (
    <div className="disk">
      <div className="disk__btn">
        <button type="button" className="disk__back">Back</button>
        <button type="button" className="disk__create">Create Directory</button>
      </div>
      <FileList />
    </div>
  )
}

export default Disk
