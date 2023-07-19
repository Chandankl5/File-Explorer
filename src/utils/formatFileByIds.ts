import { FilesById } from "../types";

function formatFileById(filesById: FilesById, rootFileId: string) {
  const rootFile = filesById[rootFileId];

  rootFile.files?.forEach((fileId) => {
    let file = filesById[fileId];

    file.path = (rootFile.path ?? '') + fileId;

    formatFileById(filesById, fileId)
  })
}

export default formatFileById;