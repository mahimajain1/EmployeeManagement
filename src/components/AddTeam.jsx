import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const AddTeam = ({ onInputChange, inputValue }) => {
  return (
    <>
      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Department"
          value={inputValue.department}
          onChange={(e) => onInputChange("department", e.target.value)}
        >
          <MenuItem value={"Technology"}>Technology</MenuItem>
          <MenuItem value={"Design"}>Design</MenuItem>
          <MenuItem value={"HR"}>Staff/HR</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="name-input"
        name="teamName"
        label="Team Name"
        type="text"
        value={inputValue.teamName}
        onChange={(e) => onInputChange("teamName", e.target.value)}
      />
    </>
  );
};

export default AddTeam;
