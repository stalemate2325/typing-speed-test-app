import React from "react";
import KeyboardAltIcon from "@mui/icons-material/KeyboardAlt";

const Logo = ({ isFocusedMode}) => {
  return (
    <div className="header" style={{visibility: isFocusedMode ? 'hidden' : 'visible' }}>
      <h1>
        TypeSonic <KeyboardAltIcon fontSize="large" />
      </h1>
      <span className="sub-header">
      The sound of typing success
      </span>
    </div>
  );
};

export default Logo;
