import React, { PropsWithChildren } from 'react'
import FileRendererContainer from '../FileRenderer/FileRendererContainer'

type Props = PropsWithChildren<{
  fileIds: string[], 
}>

function FilesTreeView({
  fileIds,
}: Props) {
  return (
    <div className='files-tree-view'>
      {fileIds.map((fileId) => 
      <FileRendererContainer 
        key={fileId}  
        fileId={fileId}
      />)}
    </div>
  )
}

export default FilesTreeView