import React, { useState } from "react";
import icon from "../../Img/upload-icon.png";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // state Object with important props
  const [file, setFile] = useState({
        name : "",
        type: ""

  });
  const [filename, setFilename] = useState("");

  //Trigger for File popup
  const ownMethod = (event) => {
    setFile(event.target.files);
    setFilename(event.target.files[0].name)
  };

  const print = () => {
    console.log(file);
    console.log(filename)
  };

  return (
    <div className="Fileupload-container">
      <div className="Fileupload" onClick={print}>
        {/**<img className="upload-icon" src={icon} alt="LOGO" onClick={onFileChange}/> */}
        <input type="file" id="file-loader" accept="video/mp4,video/x-m4v,video/*" onChange={ownMethod} />
      </div>
    </div>
  );
};
