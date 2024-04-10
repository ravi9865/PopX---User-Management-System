import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const InputField = ({ label, ...props }) => {
  let modifiedLabel = label;
  if (
    label === "Full Name" ||
    label === "Phone number" ||
    label === "Email address" ||
    label === "Password"
  ) {
    modifiedLabel += "*";
  }
  return (
    <Box
      className="boxStyle"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "325px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-size-small"
        size="small"
        {...props}
        label={
          modifiedLabel.endsWith("*") ? (
            <>
              <span className="labelWithAsterisk">
                {modifiedLabel.slice(0, -1)}
              </span>
            </>
          ) : (
            <label>{label}</label>
          )
        }
        variant="outlined"
      />
    </Box>
  );
};
export default InputField;