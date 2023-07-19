import React from 'react'
import { File as TypeFile } from '../../types'
import FilesTreeViewContainer from '../FilesTreeView/FilesTreeViewContainer'

import './Folder.scss';
import FolderIcon from '../Icons/FolderIcon';
import ChevronDownIcon from '../Icons/ChevronDownIcon';
import ChevronRightIcon from '../Icons/ChevronRightIcon';

type Props = TypeFile & {
  isCollapsed: boolean,
  isHighlighted: boolean,
  filePath: string
}

function Folder({
  id,
  name,
  filePath,
  isHighlighted,
  isCollapsed
}: Props) {

  return (
    <div id={id} data-path={filePath} className='folder'>
      <div className={`folder__content ${isHighlighted ? 'folder--highlight' : ''}`}>
        {!isCollapsed ? <ChevronDownIcon /> : <ChevronRightIcon />}
        <span className='folder__icon'><FolderIcon/></span>
        <span className='folder__name'>{name}</span>
        </div>
      <div className={`folder-view folder-view--${isCollapsed ? 'collapsed' : 'tree'}`}>
        <FilesTreeViewContainer rootFileId={id} />
      </div>
    </div>
  )
}

export default Folder