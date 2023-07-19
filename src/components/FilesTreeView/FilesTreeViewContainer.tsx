import React, { PropsWithChildren } from 'react'
import FilesTreeView from './FilesTreeView'
import { useAppState } from '../../hooks';
import { selectFileById } from '../../ducks/folderSlice';

type Props = PropsWithChildren<{
  rootFileId: string,
}>

function FilesTreeViewContainer({
  rootFileId,
}: Props) {

  const rootFileInfo = useAppState(selectFileById(rootFileId));

  const fileIds = rootFileInfo?.files ?? []

  return (
    <FilesTreeView
      fileIds={fileIds}
    />
  )
}

export default FilesTreeViewContainer