import React from 'react'
import { File as TypeFile } from '../../types';

import './File.scss'
import FileIcon from '../Icons/FileIcon';

type Props = TypeFile & {
  filePath: string,
  isHighlighted: boolean
}

function File({
  id,
  name,
  filePath,
  isHighlighted
}: Props) {

  return (
    <div id={id} data-path={filePath} className={`file ${isHighlighted ? 'file--highlight' : ''}`}>
      <FileIcon />
      <span className='file__name'>{name}</span>
    </div>
  )
}
export default File