import React from "react";

const Dropzone = () => {
  return (
    <>
      <input type="file" id="certificate" name="certificate" hidden />
      <label htmlFor="certificate">
        <div className="dropzone"></div>
      </label>
    </>
  );
};

export default Dropzone;
