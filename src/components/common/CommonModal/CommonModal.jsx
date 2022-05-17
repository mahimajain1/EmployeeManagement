import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Box } from "@mui/system";

const CommonModal = ({
  dialogTitle,
  open,
  handleClosePopUp,
  btnDisable,
  btnName,
  OnSubmitHandler,
  children,
}) => {
  return (
    <Dialog fullWidth={true} open={open} onClose={handleClosePopUp}>
      <DialogTitle>{dialogTitle}</DialogTitle>
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
          {children}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          disabled={btnDisable}
          onClick={!btnDisable ? OnSubmitHandler : ""}
        >
          {btnName}
        </Button>
        <Button onClick={handleClosePopUp}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonModal;
