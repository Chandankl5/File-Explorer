import React, { PropsWithChildren, useCallback } from 'react'
import FileRenderer from './FileRenderer'
import { useAppDispatch, useAppState } from '../../hooks';
import { selectFileById, updateSelectedFileInfo } from '../../ducks/folderSlice';
import { FileType } from '../../types';

type Props = PropsWithChildren<{
  fileId: string,
}>

function FileRendererContainer({
  fileId,
}: Props) {

  const dispatch = useAppDispatch()

  const { files } = useAppState(selectFileById(fileId));

  let type: FileType

  if(files) {
    type = 'folder'
  }
  else {
    type = 'file'
  }

  const handleFileClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const dataPath = document.getElementById(fileId)?.dataset['path'] ?? ''
    dispatch(updateSelectedFileInfo({id: fileId, path: dataPath}))

  },[fileId, dispatch])

  return (
    <FileRenderer
      fileId={fileId}
      type={type}
      handleFileClick={handleFileClick}
    />
  )
}

export default FileRendererContainer