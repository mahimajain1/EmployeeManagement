import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
  Typography,
  Select,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";
import AddHead from "./AddHead";
import AddTeam from "./AddTeam";
import CommonModal from "./common/CommonModal/CommonModal";
import CommonTable from "./common/Table/CommonTable";
import { AllDepartment, MenuOptions } from "./Data";
import EditEmployee from "./EditEmployee";
import FilterTeam from "./FilterTeam";
import OtherFilters from "./OtherFilters";
import useStyles from "./styles";

const HomePage = () => {
  const classes = useStyles();

  //   State Declaration
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [tableData, setTableData] = useState(localStorage.getItem("data"));
  const [localStorageTeam, setLocalStorageTeam] = useState({});
  const [filterEmployeeData, setFilterEmployeeData] = useState([]);
  const [editEmployee, setEditEmployee] = useState({});
  const [anchorEl, setAnchorEl] = useState("");
  const [inputValue, setInputvalue] = useState({});
  const [btnDisable, setBtnDisable] = useState(true);

  let teamData = {
    Technology: ["Team T1", "Team T2"],
    Design: ["Team D1", "Team D2"],
    HR: ["Team H1", "Team H2"],
  };

  let AllEmployeeData = [
    {
      empId: "1652802376786",
      name: "John Doe",
      email: "johnDoe@gmail.com",
      department: "Technology",
      phone: "9876543210",
      team: "Team T1",
      designation: "Member",
    },
  ];

  //   Other Declarations
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  //   Handlers
  //Start- Delete EMployee Handler
  const deleteIconHandler = (id) => {
    AllEmployeeData = JSON.parse(localStorage.getItem("data"));
    const removeItem = AllEmployeeData.filter((data) => {
      return data.empId !== id;
    });

    localStorage.setItem("data", JSON.stringify(removeItem));
    AllEmployeeData = JSON.parse(localStorage.getItem("data"));
    setTableData(localStorage.getItem("data"));
  };
  //End- Delete EMployee Handler

  // Edit Icon
  const editIconHandler = (id) => {
    AllEmployeeData = JSON.parse(localStorage.getItem("data"));
    setOpen(true);
    setSelectedOption("Edit");
    const editEmployee = AllEmployeeData.find((item) => item.empId === id);
    setEditEmployee(editEmployee);
  };
  //Start- Remove Filter
  const removeFilterHandler = () => {
    AllEmployeeData = JSON.parse(localStorage.getItem("data"));
    setFilterEmployeeData([]);
  };

  //End- Remove Filter

  //Start- Menu Option Handler
  const handleMenuOptionClick = (option) => {
    if (option === "Add New Employee") {
      setOpen(true);
      setSelectedOption("Employee");
      setInputvalue({});
    }

    if (option === "Add New Head") {
      setOpen(true);
      setSelectedOption("Head");
    }
    if (option === "Add New Team") {
      setOpen(true);
      setSelectedOption("Team");
    }
    if (option === "Filter") {
      setOpen(true);
      setSelectedOption("Filter");
    }

    if (option === "Other Filter") {
      setOpen(true);
      setSelectedOption("Other Filter");
    }

    setAnchorEl(null);
  };

  const handleClosePopUp = (option) => {
    if (option == "Add New Head") {
      setOpen(false);
    }
    if (option == "Add New Team") {
      setOpen(false);
    }
    if (option == "Filter") {
      setOpen(false);
    }
    if (option == "Other Filter") {
      setOpen(false);
    }
    if (option == "Menu") {
      setAnchorEl(null);
    }
    if (option == "Edit") {
      setOpen(false);
    }
    if (option == "Employee") {
      setOpen(false);
    }
  };
  // End- Menu Option Handler

  // On Add Employee data change
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

  // On Edit Employee data change
  const onEditEmployeeChange = (prop, value) => {
    const tempValue = { ...editEmployee, [prop]: value };
    setEditEmployee(tempValue);
  };

  //Start- Add Employee Option click
  const AddEmployeeHandler = () => {
    AllEmployeeData = JSON.parse(localStorage.getItem("data"));
    if (!inputValue) {
    } else if (inputValue && open) {
      const allData = { empId: new Date().getTime().toString(), ...inputValue };
      AllEmployeeData.push(allData);
      localStorage.setItem("data", JSON.stringify(AllEmployeeData));
    }
    setInputvalue({});
    setOpen(false);
    setBtnDisable((prev) => !prev);
    AllEmployeeData = JSON.parse(localStorage.getItem("data"));
  };

  //End- Add Employee Option click

  //Start- Add Head Option click
  const AddHeadHandler = () => {
    AllEmployeeData = JSON.parse(localStorage.getItem("data"));
    if (!inputValue) {
    } else if (inputValue && open) {
      const allData = {
        empId: new Date().getTime().toString(),
        designation: "Head",
        team: "All",
        ...inputValue,
      };
      AllEmployeeData.push(allData);
      localStorage.setItem("data", JSON.stringify(AllEmployeeData));
      AllEmployeeData = JSON.parse(localStorage.getItem("data"));
      setInputvalue({});
    }
    setOpen(false);
    setBtnDisable((prev) => !prev);
  };
  //End- Add Head Option click

  //Start- Add Team Option click

  const AddTeamHandler = () => {
    teamData = JSON.parse(localStorage.getItem("teams"));
    if (!teamData[inputValue?.department].includes(inputValue?.teamName)) {
      teamData[inputValue.department].push(inputValue.teamName);
      localStorage.setItem("teams", JSON.stringify(teamData));
      setLocalStorageTeam(JSON.parse(localStorage.getItem("teams")));
    } else alert("THIS TEAM IS ALREADY PRESENT");

    teamData = JSON.parse(localStorage.getItem("teams"));
    setOpen(false);
    setInputvalue({});
  };

  //End- Add Team Option click

  //Start- Update button click

  const updateEmployeeData = (id, updatedData) => {
    AllEmployeeData = JSON.parse(localStorage.getItem("data"));
    const updatedEmployeeData = AllEmployeeData.map((employee) => {
      return employee.empId === id ? updatedData : { ...employee };
    });
    localStorage.setItem("data", JSON.stringify(updatedEmployeeData));
    AllEmployeeData = JSON.parse(localStorage.getItem("data"));
    setOpen(false);
    setEditEmployee({});
  };
  //End- Update button click

  //Start- Filter button click
  const filterByDepartmentAndTeam = () => {
    AllEmployeeData = JSON.parse(localStorage.getItem("data"));
    const filteredData = AllEmployeeData.filter((item) => {
      if (
        item.department === inputValue.department &&
        item.team === inputValue.teamName
      ) {
        return item;
      }
    });
    setFilterEmployeeData(filteredData);
    setInputvalue({});
    setOpen(false);
  };

  const filterByName = () => {
    AllEmployeeData = JSON.parse(localStorage.getItem("data"));
    if (inputValue) {
      if (inputValue.category === "name") {
        const filteredData = AllEmployeeData.filter((item) => {
          if (
            item.name
              .toLowerCase()
              .includes(inputValue.searchText.toLowerCase())
          ) {
            return item;
          }
        });
        setFilterEmployeeData(filteredData);
      }

      if (inputValue.category === "email") {
        const filteredData = AllEmployeeData.filter((item) => {
          if (
            item.email
              .toLowerCase()
              .includes(inputValue.searchText.toLowerCase())
          ) {
            return item;
          }
        });
        setFilterEmployeeData(filteredData);
      }
      if (inputValue.category === "phone") {
        const filteredData = AllEmployeeData.filter((item) => {
          if (item.phone.includes(inputValue.searchText)) {
            return item;
          }
        });
        setFilterEmployeeData(filteredData);
      }
      if (inputValue.category === "empId") {
        const filteredData = AllEmployeeData.filter((item) => {
          if (
            item.empId
              .toLowerCase()
              .includes(inputValue.searchText.toLowerCase())
          ) {
            return item;
          }
        });
        setFilterEmployeeData(filteredData);
      }
      setOpen(false);
    }

    setInputvalue({});
  };

  const filterTeamLead = () => {
    const lead = JSON.parse(tableData)?.filter(
      (item) =>
        item.department === inputValue.department &&
        item.team === inputValue.team &&
        item.designation === "Lead"
    );
    if (lead?.length > 0) {
      return true;
    }
  };

  const filterEditLead = () => {
    const lead = JSON.parse(tableData)?.filter(
      (item) =>
        item.department === editEmployee.department &&
        item.team === editEmployee.team &&
        item.designation === "Lead"
    );
    if (lead.length > 0) {
      return true;
    }
  };

  // End- Update button click

  // Use Effect
  useEffect(() => {
    setTableData(localStorage.getItem("data"));
  }, [AllEmployeeData]);

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teamData));
    setLocalStorageTeam(JSON.parse(localStorage.getItem("teams")));
    localStorage.setItem("data", JSON.stringify(AllEmployeeData));
  }, []);

  return (
    <>
      <Box className={classes.boxContainer}>
        <Typography sx={{ display: "flex" }}>
          <Button
            sx={{ mr: 1 }}
            variant="contained"
            onClick={() => handleMenuOptionClick("Filter")}
          >
            Filter Team/Head
          </Button>
          <Button
            variant="contained"
            onClick={() => handleMenuOptionClick("Other Filter")}
          >
            Other Filter
          </Button>
          <Button onClick={removeFilterHandler}>Remove Filter</Button>
        </Typography>
        <Button variant="contained" onClick={handleOpenMenu}>
          + Add New
        </Button>
      </Box>

      <CommonTable
        editHandler={editIconHandler}
        deleteHandler={deleteIconHandler}
        employeeData={
          filterEmployeeData.length > 0
            ? filterEmployeeData
            : JSON.parse(tableData)
        }
        filter={filterEmployeeData.length > 0 ? true : false}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={() => handleClosePopUp("Menu")}
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
      </Menu>

      {selectedOption === "Employee" && open && (
        <CommonModal
          dialogTitle="Add New Employee"
          handleClosePopUp={() => handleClosePopUp("Employee")}
          OnSubmitHandler={AddEmployeeHandler}
          btnDisable={btnDisable}
          open={open}
          btnName="Add"
        >
          <AddEmployee
            filterTeamLead={filterTeamLead}
            onInputChange={onInputChange}
            localStorageTeam={localStorageTeam}
            inputValue={inputValue}
          />
        </CommonModal>
      )}

      {selectedOption === "Edit" && open && (
        <CommonModal
          dialogTitle="Edit Employee Data"
          handleClosePopUp={() => handleClosePopUp("Edit")}
          OnSubmitHandler={() =>
            updateEmployeeData(editEmployee.empId, editEmployee)
          }
          btnDisable={false}
          open={open}
          btnName="Update"
        >
          <EditEmployee
            editEmployee={editEmployee}
            onEditEmployeeChange={onEditEmployeeChange}
            AllDepartment={AllDepartment}
            localStorageTeam={localStorageTeam}
            filterEditLead={filterEditLead}
          />
        </CommonModal>
      )}

      {selectedOption === "Team" && open && (
        <CommonModal
          dialogTitle="Add New Team"
          handleClosePopUp={() => handleClosePopUp("Add New Team")}
          OnSubmitHandler={AddTeamHandler}
          btnDisable={false}
          open={open}
          btnName="Add"
        >
          <AddTeam onInputChange={onInputChange} inputValue={inputValue} />
        </CommonModal>
      )}

      {selectedOption === "Head" && open && (
        <CommonModal
          dialogTitle="Add New Head of Department"
          handleClosePopUp={() => handleClosePopUp("Add New Head")}
          OnSubmitHandler={AddHeadHandler}
          btnDisable={false}
          open={open}
          btnName="Add"
        >
          <AddHead onInputChange={onInputChange} inputValue={inputValue} />
        </CommonModal>
      )}

      {selectedOption === "Filter" && open && (
        <CommonModal
          dialogTitle="Filter Team/Head"
          handleClosePopUp={() => handleClosePopUp("Filter")}
          OnSubmitHandler={filterByDepartmentAndTeam}
          btnDisable={false}
          open={open}
          btnName="Filter"
        >
          <FilterTeam
            onInputChange={onInputChange}
            inputValue={inputValue}
            localStorageTeam={localStorageTeam}
          />
        </CommonModal>
      )}

      {selectedOption === "Other Filter" && open && (
        <CommonModal
          dialogTitle="Other Filter"
          handleClosePopUp={() => handleClosePopUp("Other Filter")}
          OnSubmitHandler={filterByName}
          btnDisable={false}
          open={open}
          btnName="Filter"
        >
          <OtherFilters onInputChange={onInputChange} inputValue={inputValue} />
        </CommonModal>
      )}
    </>
  );
};

export default HomePage;
