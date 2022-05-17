import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const AddEmployee = ({
  onInputChange,
  inputValue,
  localStorageTeam,
  filterTeamLead,
}) => {
  console.log(localStorageTeam);
  return (
    <>
      <TextField
        id="name-input"
        name="name"
        label="Name"
        type="text"
        sx={{ my: 2 }}
        value={inputValue.name}
        onChange={(e) => onInputChange("name", e.target.value)}
      />

      <TextField
        id="age-input"
        name="Email"
        label="Email"
        type="text"
        value={inputValue.email}
        onChange={(e) => onInputChange("email", e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        id="age-input"
        name="Phone"
        label="Phone No."
        type="number"
        sx={{ mb: 2 }}
        value={inputValue.phone}
        onChange={(e) => onInputChange("phone", e.target.value)}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
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
          value={inputValue.department}
          onChange={(e) => onInputChange("team", e.target.value)}
        >
          {localStorageTeam[inputValue?.department]?.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="demo-simple-select-label">Designation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Designation"
          value={inputValue.designation}
          onChange={(e) => onInputChange("designation", e.target.value)}
        >
          <MenuItem value={"Lead"} disabled={filterTeamLead()}>
            Team Lead
          </MenuItem>
          <MenuItem value={"Member"}>Team Member</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default AddEmployee;
