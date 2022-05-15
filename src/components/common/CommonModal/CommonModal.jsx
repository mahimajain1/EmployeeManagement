import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const CommonModal = ({
  editEmployee,
  open,
  handleClose,
  onInputChange,
  btnDisable,
  AddEmployeeHandler,
  inputValue,
  fullWidth,
  openEditEmployee,
  handleCloseEdit,
  onEditEmployeeChange,
  techTeam,
  hrDept,
  hrTeam,
  checkLeader,
  createLeader,
  updateEmployeeData,
  AllDepartment,
  designTeam,
}) => {
  return (
    <Dialog fullWidth={fullWidth} open={open} onClose={handleClose}>
      <DialogTitle>Add New Employee</DialogTitle>
      <DialogContent>
        {editEmployee ? (
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
            }}
          >
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
              <InputLabel id="demo-simple-select-label">Select Team</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Team"
                value={editEmployee?.team}
                onChange={(e) => onEditEmployeeChange("team", e.target.value)}
              >
                {editEmployee?.department == "Technology" &&
                  techTeam?.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
                {editEmployee?.department == "Design" &&
                  designTeam?.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
                {editEmployee?.department == "HR" &&
                  hrTeam?.map((item) => {
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
                <MenuItem value={"Lead"} disabled={checkLeader ? true : false}>
                  Team Lead
                </MenuItem>
                <MenuItem value={"Member"}>Team Member</MenuItem>
              </Select>
            </FormControl>
          </Box>
        ) : (
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
            }}
          >
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
              <InputLabel id="demo-simple-select-label">Select Team</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Department"
                value={inputValue.department}
                onChange={(e) => onInputChange("team", e.target.value)}
              >
                {inputValue.department == "Technology" &&
                  techTeam?.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
                {inputValue.department == "Design" &&
                  designTeam?.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
                {inputValue.department == "HR" &&
                  hrTeam?.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
              </Select>
            </FormControl>
            {console.log(createLeader, "setCreateLeader")}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="demo-simple-select-label">Designation</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Designation"
                value={inputValue.designation}
                onChange={(e) => onInputChange("designation", e.target.value)}
              >
                <MenuItem value={"Lead"} disabled={createLeader ? true : false}>
                  Team Lead
                </MenuItem>
                <MenuItem value={"Member"}>Team Member</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          disabled={btnDisable}
          onClick={!btnDisable ? AddEmployeeHandler : ""}
        >
          Add
        </Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonModal;
