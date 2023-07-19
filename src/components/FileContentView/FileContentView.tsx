import React from "react";
import { File } from "../../types";
import FileContentContainer from "../FileContent/FileContentContainer";

import './FileContentView.scss';

type Props = File;

function FileContentView({ id, files }: Props) {
  return (
    <table className="file-content-view">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Edited on</th>
          <th className="th-right">Created on</th>
        </tr>
      </thead>
      <tbody>
        {files ? (
          files.map((fileId) => (
            <FileContentContainer key={fileId} fileId={fileId} />
          ))
        ) : (
          <FileContentContainer  fileId={id} />
        )}
      </tbody>
    </table>
  );
}

export default FileContentView;
