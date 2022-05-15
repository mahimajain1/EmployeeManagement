import React, { useEffect, useState } from "react";
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

const CommonTable = ({ heading, employeeData, editHandler, deleteHandler }) => {
  console.log("employeeData table", employeeData);
  return (
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
                    onClick={() => editHandler(row.empId)}
                  />
                  <DeleteIcon
                    color="primary"
                    onClick={() => deleteHandler(row.empId)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Typography>
  );
};

export default CommonTable;
