/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../style.css";
import Toolbar from "./ToolBar";
import Videoframe from "./Videoframe";
import FileUpload from "./FileHandling/FileUpload";

/**
 * Parent Component
 */

export default (props) => {
  return (
    <div className="MainDisplay">
      <Videoframe />
      <FileUpload />
      <Toolbar />
    </div>
  );
};
