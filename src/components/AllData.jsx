import React, { useEffect, useState } from "react";
import { employee } from "./Data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";

const AllData = () => {
  const [selectDept, setSelectDept] = useState();
  const [selectFiltered, setSelectFiltered] = useState();
  const departmentHandler = (e) => {
    setSelectDept(e.target.value);
  };

  useEffect(() => {
    const filtered = employee.filter((item) => {
      if (item.team == selectDept) {
        return item;
      }
    });
    setSelectFiltered(filtered);
  }, [selectDept]);

  //   const filtered = employee.filter((item) => {
  //     return item.team == selectDept;
  //   });

  // console.log(selectFiltered);

  function createData(name, epmId, email, phone, designation, department) {
    return { name, epmId, email, phone, designation, department };
  }

  const rows = [
    createData(
      "Aryan",
      "01",
      "aryan@gmail.com",
      987654321,
      "Team Lead",
      "Technology"
    ),
    createData(
      "Rahul",
      "02",
      "aryan@gmail.com",
      987654321,
      "Team Member",
      "Technology"
    ),
    createData(
      "Eclair",
      "03",
      "aryan@gmail.com",
      987654321,
      "Team Member",
      "Design"
    ),
    createData(
      "Cupcake",
      "04",
      "aryan@gmail.com",
      987654321,
      "Team Member",
      "HR"
    ),
    createData(
      "Gingerbread",
      "05",
      "aryan@gmail.com",
      987654321,
      "Team Member",
      "HR"
    ),
  ];

  const heading = [
    "Name",
    "Employee Id",
    "Email",
    "Phone No.",
    "Designation",
    "Department",
    "Team",
    "Action",
  ];

  const AllDepartment = [
    { label: "Technology", value: "Technology" },
    { label: "Design", value: "Design" },
    { label: "HR/Staff", value: "HR" },
  ];

  const MenuOptions = ["Add New Employee", "Add New Head", "Add New Team"];

  const [open, setOpen] = useState(false);
  const [openAddHead, setOpenAddHead] = useState(false);
  const [openAddTeam, setOpenAddTeam] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openEditEmployee, setOpenEditEmployee] = useState(false);
  const [inputValue, setInputvalue] = useState({});
  const [employeeData, setEmployeeData] = useState([]);
  const [teamsData, setTeamsData] = useState([]);
  const [teamValue, setTeamvalue] = useState({});
  const [selectedDepart, setSelectedDepart] = useState({});
  const [inputData, setInputData] = useState("");
  const [techTeam, setTechTeam] = useState(["Team 1", "Team 2"]);
  const [designTeam, setDesignTeam] = useState([]);
  const [hrTeam, setHrTeam] = useState([]);
  const [editEmployee, setEditEmployee] = useState({});
  const [btnDisable, setBtnDisable] = useState(true);
  const [hrDept, setHrDept] = useState(false);
  const [checkLeader, setCheckLeader] = useState(false);
  const [createLeader, setCreateLeader] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [headValue, setHeadValue] = useState({});
  const [filterDept, setFilterDept] = useState();

  const [anchorEl, setAnchorEl] = useState("");
  // (React.useState < null) | (HTMLElement > null);
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setCreateLeader(false);
  };

  const handleClose = () => {
    setInputvalue("");
    setOpen(false);
  };

  const handleClickOpenAddTeam = () => {
    setOpenAddTeam(true);
  };

  const handleCloseAddTeam = () => {
    setOpenAddTeam(false);
  };

  const handleCloseEdit = () => {
    setOpenEditEmployee(false);
  };

  const OpenFilterHandler = () => {
    setOpenFilter(true);
  };

  const CloseFilterHandler = () => {
    setOpenFilter(false);
  };

  // Edit Icon
  const editIconHandler = (id) => {
    setOpenEditEmployee(true);
    const editEmployee = employeeData.find((item) => item.empId === id);
    setEditEmployee(editEmployee);
  };

  // Delete
  const deleteIconHandler = (id) => {
    const removeItem = employeeData.filter((data) => {
      return data.empId !== id;
    });

    setEmployeeData(removeItem);
  };

  const [fullWidth, setFullWidth] = React.useState(true);

  const onInputChange = (prop, value) => {
    const tempValue = { ...inputValue, [prop]: value };

    if (
      tempValue.name &&
      tempValue.team &&
      tempValue.email &&
      tempValue.department &&
      tempValue.designation
    ) {
      setBtnDisable((prev) => !prev);
    }

    setInputvalue(tempValue);
  };

  const AddEmployeeHandler = () => {
    if (!inputValue) {
    } else if (inputValue && open) {
      const allData = { empId: new Date().getTime().toString(), ...inputValue };
      console.log(inputValue);
      setEmployeeData((prev) => [...prev, allData]);
      setTimeout(() => {
        setInputvalue({});
      }, 100);
    }
    setOpen(false);
    setCreateLeader((prev) => !prev);
    setBtnDisable((prev) => !prev);
  };

  const onTeamInputChange = (prop, value) => {
    setSelectedDepart(value);
    // console.log(selectedDepart);
    // const tempValue = { ...teamValue, [prop]: value };
    // setTeamvalue(tempValue);

    // setTeamsData((prev) => [...prev, teamValue]);
    // console.log(tempValue);
  };

  const AddTeamHandler = () => {
    // console.log(inputData);
    // setTeamsData((prev) => [...prev, inputData]);

    if (selectedDepart == "Technology") {
      if (!techTeam.includes(inputData)) {
        setTechTeam((prev) => [...prev, inputData]);
      }
    }
    if (selectedDepart == "Design") {
      if (!designTeam.includes(inputData)) {
        setDesignTeam((prev) => [...prev, inputData]);
      }
    }
    if (selectedDepart == "HR") {
      if (!hrTeam.includes(inputData)) {
        setHrTeam((prev) => [...prev, inputData]);
      }
    }
    // setTeamsData((prev) => [...prev, teamValue]);
    // const obj = { [selectedDepart]: inputData };
    // console.log(obj);
    setOpenAddTeam(false);
    setTimeout(() => {
      setTeamvalue({});
    }, 1000);
  };

  // Update button click
  const updateEmployeeData = (id, updatedData) => {
    setEmployeeData(
      employeeData.map((employee) => {
        return employee.empId === id ? updatedData : { ...employee };
      })
    );

    setOpenEditEmployee((prev) => !prev);
  };

  // On Edit Employee data change
  const onEditEmployeeChange = (prop, value) => {
    console.log(prop, value);
    if (editEmployee.department === "HR") {
      setHrDept((prev) => !prev);
    }
    if (prop == "department" && value == "HR") {
      setHrDept((prev) => !prev);
      console.log(prop, value);
      // employeeData.filter()
    }
    const tempValue = { ...editEmployee, [prop]: value };
    setEditEmployee(tempValue);
  };

  useEffect(() => {
    const technologyLeader = employeeData.filter((item) => {
      if (
        item.department == editEmployee?.department &&
        item.team == editEmployee?.team &&
        item.designation == "Lead"
      ) {
        return item;
      }
    });

    if (editEmployee?.empId == technologyLeader[0]?.empId) {
      setCheckLeader((prev) => !prev);
    }

    const createNewEmployee = employeeData.filter((item) => {
      if (
        item.department == inputValue?.department &&
        item.team == inputValue?.team &&
        item.designation == "Lead"
      ) {
        return item;
      }
    });
    console.log(createNewEmployee);
    if (createNewEmployee) {
      console.log(createNewEmployee);
      setCreateLeader((prev) => !prev);
    }
  }, [editEmployee, employeeData, inputValue]);

  const handleMenuOptionClick = (option) => {
    if (option == "Add New Employee") {
      setOpen(true);
      setSelectedOption("Employee");
      setCreateLeader(false);
    }
    if (option == "Add New Head") {
      setSelectedOption("Head");
      setOpenAddHead(true);
    }
    if (option == "Add New Team") {
      setOpenAddTeam(true);
    }
    handleCloseMenu();
  };

  const handleClosePopUp = (option) => {
    if (option == "Add New Employee") {
      setOpen(true);
      setCreateLeader(false);
    }
    if (option == "Add New Head") {
      setOpenAddHead(false);
    }
    if (option == "Add New Team") {
      setOpenAddTeam(true);
    }
    handleCloseMenu();
  };

  const onHeadInputChange = (prop, value) => {
    const tempValue = { ...headValue, [prop]: value };

    if (
      tempValue.name &&
      tempValue.team &&
      tempValue.email &&
      tempValue.department &&
      tempValue.designation
    ) {
      setBtnDisable((prev) => !prev);
    }

    setHeadValue(tempValue);
  };

  const AddHeadHandler = () => {
    console.log("AddHeadHandler");
    if (!inputValue) {
    } else if (inputValue && openAddHead) {
      const allData = {
        empId: new Date().getTime().toString(),
        designation: "Head",
        team: "All",
        ...inputValue,
      };
      console.log(allData);
      setEmployeeData((prev) => [...prev, allData]);
      setTimeout(() => {
        setInputvalue({});
      }, 100);
    }
    setOpenAddHead(false);
    setCreateLeader((prev) => !prev);
    setBtnDisable((prev) => !prev);
  };

  console.log(employeeData);

  return (
    <>
      <Typography
        sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
      >
        <Typography>
          <Button variant="contained" onClick={OpenFilterHandler}>
            Filter
          </Button>
        </Typography>
        <Typography>
          <Button variant="contained" onClick={handleOpenMenu}>
            + Add New
          </Button>
          <Button variant="contained" sx={{ ml: 2 }} onClick={handleClickOpen}>
            + Add New Employee
          </Button>
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={handleClickOpenAddTeam}
          >
            + Add New Team
          </Button>
        </Typography>
      </Typography>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {MenuOptions.map((option) => {
          return (
            <MenuItem onClick={() => handleMenuOptionClick(option)}>
              {option}
            </MenuItem>
          );
        })}

        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
      <Typography sx={{ p: 2 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {heading.map((item) => {
                  return (
                    <TableCell sx={{ fontWeight: "bold" }}>{item}</TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {employeeData?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="">{row.name}</TableCell>
                  <TableCell align="">{row?.empId}</TableCell>
                  <TableCell align="">{row.email}</TableCell>
                  <TableCell align="">{row.phone}</TableCell>
                  <TableCell align="">
                    {row.designation == "Head"
                      ? "Head"
                      : `Team ${row.designation}`}
                  </TableCell>
                  <TableCell align="">{row.department}</TableCell>
                  <TableCell align="">{row.team}</TableCell>
                  <TableCell>
                    <EditIcon
                      color="primary"
                      onClick={() => editIconHandler(row.empId)}
                    />
                    <DeleteIcon
                      color="primary"
                      onClick={() => deleteIconHandler(row.empId)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>

      <Dialog fullWidth={fullWidth} open={open} onClose={handleClose}>
        <DialogTitle>Add New Employee</DialogTitle>
        <DialogContent>
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

      <Dialog
        fullWidth={fullWidth}
        open={openAddTeam}
        onClose={handleCloseAddTeam}
      >
        <DialogTitle>Add New Team</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
            }}
          >
            <FormControl fullWidth sx={{ my: 2 }}>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Department"
                value={teamValue.department}
                onChange={(e) =>
                  // onTeamInputChange("department", e.target.value)
                  setSelectedDepart(e.target.value)
                }
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
              sx={{}}
              // value={teamValue.teamName}
              // onChange={(e) => onTeamInputChange("teamName", e.target.value)}
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={AddTeamHandler}>
            Add
          </Button>
          <Button onClick={handleCloseAddTeam}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullWidth={fullWidth}
        open={openEditEmployee}
        onClose={handleCloseEdit}
      >
        <DialogTitle>Edit Employee Data</DialogTitle>
        <DialogContent>
          {editEmployee && (
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
                <InputLabel id="demo-simple-select-label">
                  Department
                </InputLabel>
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
                <InputLabel id="demo-simple-select-label">
                  Select Team
                </InputLabel>
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
                <InputLabel id="demo-simple-select-label">
                  Designation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Designation"
                  value={editEmployee?.designation}
                  onChange={(e) =>
                    onEditEmployeeChange("designation", e.target.value)
                  }
                >
                  <MenuItem
                    value={"Lead"}
                    disabled={checkLeader ? true : false}
                  >
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
            onClick={() => updateEmployeeData(editEmployee.empId, editEmployee)}
          >
            Update
          </Button>
          <Button onClick={handleCloseEdit}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullWidth={fullWidth}
        open={openAddHead}
        onClose={() => handleClosePopUp("Add New Head")}
      >
        <DialogTitle>Add New Head of Department</DialogTitle>
        <DialogContent>
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

            <TextField
              disabled
              id="outlined-disabled"
              label="Designation"
              defaultValue="Head of Department"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            // disabled={btnDisable}
            onClick={AddHeadHandler}
          >
            Add
          </Button>
          <Button onClick={() => handleClosePopUp("Add New Head")}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullWidth={fullWidth}
        open={openFilter}
        onClose={CloseFilterHandler}
      >
        <DialogTitle>Filter Team/Head</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",

              m: "auto",
              my: 2,
            }}
          >
            <FormControl fullWidth sx={{ mb: 2, mr: 2 }}>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Department"
                value={filterDept}
                onChange={(e) => setFilterDept(e.target.value)}
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
                // onChange={(e) => onInputChange("team", e.target.value)}
              >
                {filterDept == "Technology" &&
                  techTeam.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}

                {filterDept == "Design" &&
                  designTeam.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}

                {filterDept == "HR" &&
                  hrTeam.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={CloseFilterHandler}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AllData;
