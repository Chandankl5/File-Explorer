import React, { PropsWithChildren } from 'react'
import { FileType } from '../../types'
import FolderContainer from '../Folder/FolderContainer'
import FileContainer from '../File/FileContainer'

type Props = PropsWithChildren<{
  type: FileType, 
  fileId: string,
  handleFileClick: (e: React.MouseEvent<HTMLElement>) => void
}>

function FileRenderer({
  type,
  fileId,
  handleFileClick
}: Props) {

  let Element = null;

  switch(type) {
    case 'folder':
      Element = <FolderContainer fileId={fileId} />;
      break;
    case 'file':
      Element =  <FileContainer fileId={fileId} />;
      break;
  }

  return (
    <div onClick={handleFileClick}>
      {Element}
    </div>
  )
}

export default FileRenderer