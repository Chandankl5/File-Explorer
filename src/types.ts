export type File = {
  id: string,
  name: string,
  files?: string [],
  path?: string,
  createdOn?: string,
  lastEditedOn?: string
}


export type FilesById = {
  [id: string]: File
}

export type FileType = 'file' | 'folder'