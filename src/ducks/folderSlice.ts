import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilesById } from "../types";
import { AppState } from "../store";

type FolderInfo = {
  rootModule: {
    id: string
  },
  filesById: FilesById
}

const initialState: FolderInfo & {
  selectedFileId: string,
  selectedFilePath: string | null
} = {
  rootModule: {
    id: ''
  },
  filesById: {},
  selectedFileId: '',
  selectedFilePath: null
}

const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    updateFolderInfo: (state, action: PayloadAction<FolderInfo>) =>{
      const folderInfo = action.payload;
      state.filesById = folderInfo.filesById;
      state.rootModule = folderInfo.rootModule;
      state.selectedFileId = folderInfo.rootModule.id;
    },
    updateSelectedFileInfo: (state, action: PayloadAction<{id: string, path: string}>) => {
      const { id, path } = action.payload;
      state.selectedFileId = id;
      state.selectedFilePath = path;
    },
  }
})

//Selectors
export function selectRootModule(state: AppState) {
  return state.folder.rootModule;
}

export function selectFilesById(state: AppState) {
  return state.folder.filesById;
}

export function selectFileById(id: string) {
  return function(state: AppState) {
    return state.folder.filesById[id]
  }
}

export function selectSelectedFilePath(state: AppState) {
  return state.folder.selectedFilePath;
}
export function selectSelectedFileId(state: AppState) {
  return state.folder.selectedFileId;
}

export const { updateFolderInfo, updateSelectedFileInfo } = folderSlice.actions;

export default folderSlice.reducer;