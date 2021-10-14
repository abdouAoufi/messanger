import React from "react";
import Box from "@mui/material/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import Icon from "../../../Icon/Icon";
import { deleteSession } from "../../../../services/auth-service";
import { useHistory } from "react-router-dom";

export default function MainIcon() {
  const history = useHistory();
  const logout = () => {
    // TODO implement log out ...
    console.log("QQ")
    deleteSession();
    history.replace("/get-started");
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon onClick={logout} first>
        <MoreHorizIcon />
      </Icon>
    </Box>
  );
}
