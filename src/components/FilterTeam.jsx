import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const FilterTeam = ({ onInputChange, inputValue, localStorageTeam }) => {
  return (
    <>
      <FormControl fullWidth sx={{ mb: 2, mr: 2 }}>
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

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="demo-simple-select-label">Team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Team"
          value={inputValue.teamName}
          onChange={(e) => onInputChange("teamName", e.target.value)}
        >
          {localStorageTeam[inputValue.department]?.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default FilterTeam;
