import React from "react";
import { File, FileType } from "../../types";
import FileIcon from "../Icons/FileIcon";
import FolderIcon from "../Icons/FolderIcon";

import './FileContent.scss';

type Props = File & { 
  fileType: FileType,
  handleFileClick: (e: React.MouseEvent<HTMLElement>) => void 
};

function FileContent({ 
  name, 
  fileType, 
  createdOn,
  lastEditedOn,
  handleFileClick 
}: Props) {

  return (
    <tr>
      <td>
        <span>{fileType === "file" ? <FileIcon /> : <FolderIcon />}</span>
        <span className="file-content__name" onClick={handleFileClick}>{name}</span>
      </td>
      <td>{createdOn}</td>
      <td className="td-right">{lastEditedOn}</td>
    </tr>
  );
}

export default FileContent;
