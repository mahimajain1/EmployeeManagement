import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import { heading, filterHeading } from "../../Data";

const CommonTable = ({ employeeData, editHandler, deleteHandler, filter }) => {
  return (
    <Typography sx={{ py: 2 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {!filter
                ? heading.map((item) => {
                    return (
                      <TableCell sx={{ fontWeight: "bold" }}>{item}</TableCell>
                    );
                  })
                : filterHeading.map((item) => {
                    return (
                      <TableCell sx={{ fontWeight: "bold" }}>{item}</TableCell>
                    );
                  })}
            </TableRow>
          </TableHead>
          {employeeData?.length > 0 && (
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
                  {!filter && (
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
                  )}
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {employeeData?.length === 0 && (
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Data Available
        </Typography>
      )}
    </Typography>
  );
};

export default CommonTable;
