import React, { useEffect } from 'react';
import cloneDeep from 'lodash.clonedeep';
import FileExplorer from './FileExplorer'
import { useAppDispatch, useAppState } from '../../hooks'
import { selectFileById, selectRootModule, updateFolderInfo } from '../../ducks/folderSlice';

import data from '../../data.json';
import formatFileById from '../../utils/formatFileByIds';

function FileExplorerContainer() {

  const dispatch = useAppDispatch();

  const rootModule = useAppState(selectRootModule);
  const rootFileInfo = useAppState(selectFileById(rootModule.id));


  useEffect(() => {
    let clonedData = cloneDeep(data);
    formatFileById(clonedData.filesById, clonedData.rootModule.id)
    dispatch(updateFolderInfo(clonedData))
  }, [dispatch])


  return (
    <div className="file-explorer-wrapper">
      <FileExplorer
        {...rootFileInfo}
      />
    </div>
  )
}

export default FileExplorerContainer