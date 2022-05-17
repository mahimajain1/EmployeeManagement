import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const OtherFilters = ({ onInputChange, inputValue }) => {
  return (
    <>
      <FormControl fullWidth sx={{ mb: 2, mr: 2, width: "50%" }}>
        <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter By"
          // value={filterDept}
          // onChange={(e) => setFilterDept(e.target.value)}

          value={inputValue.category}
          onChange={(e) => onInputChange("category", e.target.value)}
        >
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"email"}>Email</MenuItem>
          <MenuItem value={"phone"}>Phone</MenuItem>
          <MenuItem value={"empId"}>Employee Id</MenuItem>
        </Select>
      </FormControl>
      <TextField
        placeholder="Enter Search Text"
        value={inputValue.searchText}
        onChange={(e) => onInputChange("searchText", e.target.value)}
      />
    </>
  );
};

export default OtherFilters;
