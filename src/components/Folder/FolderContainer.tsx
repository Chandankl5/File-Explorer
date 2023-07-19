import React from 'react'
import Folder from './Folder'
import { useAppState } from '../../hooks';
import { selectFileById, selectSelectedFileId, selectSelectedFilePath } from '../../ducks/folderSlice';

type Props = {
  fileId: string
}

function FolderContainer({
  fileId,
}: Props) {

  const selectedFilePath = useAppState(selectSelectedFilePath);
  const selectedFileId = useAppState(selectSelectedFileId)
  const { id, name, path = ''  } = useAppState(selectFileById(fileId));

  const isCollapsed = !selectedFilePath?.includes(fileId)
  const isHighlighted = !isCollapsed && (selectedFileId === fileId)

  return (
    <Folder
      id={id}
      name={name}
      filePath={path}
      isHighlighted={isHighlighted}
      isCollapsed={isCollapsed}
    />
  )
}

export default FolderContainer