import React, { PropsWithChildren } from 'react'
import FilesTreeViewContainer from '../FilesTreeView/FilesTreeViewContainer'
import { File } from '../../types';

import './FileExplorer.scss';
import FileContentViewContainer from '../FileContentView/FileContentViewContainer';
import RepoIcon from '../Icons/RepoIcon';

type Props = PropsWithChildren<File>

function FileExplorer({
  id,
  name
}: Props) {

  return (
    <div className='file-explorer'>
      <div className="file-explorer__col-left">
        <h3 className="file-explorer__side-header">
          <span><RepoIcon /></span>
          <span>{name}</span>
        </h3>
        <FilesTreeViewContainer rootFileId={id} />
      </div>
      <div className="file-explorer__col-right">
        <div className="file-explorer__separator" />
        <FileContentViewContainer />
      </div>
    </div>
  )
}

export default FileExplorer