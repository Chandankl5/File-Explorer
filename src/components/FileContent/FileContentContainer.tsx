import React, { useCallback } from 'react'
import FileContent from './FileContent'
import { useAppDispatch, useAppState } from '../../hooks';
import { selectFileById, updateSelectedFileInfo } from '../../ducks/folderSlice';

type Props = {
  fileId: string,
};

function FileContentContainer({
  fileId,
}: Props) {

  const dispatch = useAppDispatch();

  const { name, files, path = '', createdOn = '-', lastEditedOn = '-' } = useAppState(selectFileById(fileId)) ?? {};

  const handleFileClick = useCallback(() => {
    dispatch(updateSelectedFileInfo({id:fileId, path}))
  }, [path, fileId, dispatch])

  return (
    <FileContent
      id={fileId}
      name={name}
      createdOn={createdOn}
      lastEditedOn={lastEditedOn}
      handleFileClick={handleFileClick}
      fileType={files ? 'folder' : 'file'}  
    />
  )
}

export default FileContentContainer