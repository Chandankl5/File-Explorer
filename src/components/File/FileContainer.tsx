import React from 'react'
import File from './File'
import { selectFileById, selectSelectedFileId } from '../../ducks/folderSlice';
import { useAppState } from '../../hooks';

type Props = {
  fileId: string,
}

function FileContainer({
  fileId,
}: Props) {

  const { id, name, path = '' } = useAppState(selectFileById(fileId));
  const selectedFileId = useAppState(selectSelectedFileId);

  const isHighlighted = selectedFileId === fileId;

  return (
    <File
      id={id} 
      name={name}
      filePath={path}
      isHighlighted={isHighlighted}
    />
  )
}

export default FileContainer