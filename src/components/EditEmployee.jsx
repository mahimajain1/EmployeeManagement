import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const EditEmployee = ({
  editEmployee,
  onEditEmployeeChange,
  AllDepartment,
  localStorageTeam,
  filterEditLead,
}) => {
  return (
    <>
      {editEmployee && (
        <>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            sx={{ my: 2 }}
            value={editEmployee?.name}
            onChange={(e) => onEditEmployeeChange("name", e.target.value)}
          />

          <TextField
            id="age-input"
            name="Email"
            label="Email"
            type="text"
            value={editEmployee?.email}
            onChange={(e) => onEditEmployeeChange("email", e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            id="age-input"
            name="Phone"
            label="Phone No."
            type="number"
            sx={{ mb: 2 }}
            value={editEmployee?.phone}
            onChange={(e) => onEditEmployeeChange("phone", e.target.value)}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Department"
              value={editEmployee?.department}
              onChange={(e) =>
                onEditEmployeeChange("department", e.target.value)
              }
            >
              {AllDepartment.map((elem) => {
                return (
                  <MenuItem
                    value={elem.value}
                    disabled={
                      editEmployee.department == "HR" && elem.value != "HR"
                        ? true
                        : false
                    }
                  >
                    {elem.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Team</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Team"
              value={editEmployee?.team}
              onChange={(e) => onEditEmployeeChange("team", e.target.value)}
            >
              {localStorageTeam[editEmployee?.department]?.map((item) => {
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
              value={editEmployee?.designation}
              onChange={(e) =>
                onEditEmployeeChange("designation", e.target.value)
              }
            >
              <MenuItem value={"Lead"} disabled={filterEditLead()}>
                Team Lead
              </MenuItem>
              <MenuItem value={"Member"}>Team Member</MenuItem>
            </Select>
          </FormControl>
        </>
      )}
    </>
  );
};

export default EditEmployee;
