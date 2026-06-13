import React, { useState } from "react";
import { TextField, InputAdornment, Stack } from "@mui/material";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


const FileUploadTextArea = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <Stack style={{ flexDirection: "column", gap: "10px" }}>
      <TextField
        variant="outlined"
        placeholder="Browse"
        value={file ? file.name : ""}
        onClick={() => document.getElementById("fileInput").click()}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start"><FileUploadOutlinedIcon /></InputAdornment>,
          },
        }}
      />
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Stack>
  );
};

export default FileUploadTextArea;