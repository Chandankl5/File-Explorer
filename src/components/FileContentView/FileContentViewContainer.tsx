import React from 'react'
import FileContentView from './FileContentView'
import { useAppState } from '../../hooks'
import { selectFileById, selectSelectedFileId } from '../../ducks/folderSlice'

function FileContentViewContainer() {

  const selectedFileId = useAppState(selectSelectedFileId);

  const { id, name, files } = useAppState(selectFileById(selectedFileId)) ?? {};

  return (
    <FileContentView
      id={id}
      name={name}
      files={files}
    />
  )
}

export default FileContentViewContainer