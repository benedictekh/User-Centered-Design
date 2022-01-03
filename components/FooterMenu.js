import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    bottom: "0",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "10vh",
    backgroundColor: "#EEECEF",
    zIndex: "1000",
    boxShadow:
      "-2px -2px 5px rgba(0, 0, 0, 0.05), 2px 2px 5px rgba(0, 0, 0, 0.05)",
  },
  menuIconButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: "10px",
    color: "#000000",
    margin: "0",
  },
  activeStyle: { textDecoration: "underline", color: "#F37021" },
  iconStyles: { fontSize: "35px", color: "#000000" },
  homeIconStyles: { fontSize: "35px", color: "#F37021" },
  addIconStyles: { fontSize: "40px", color: "#000000" },
}));

export default function FooterMenu() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavLink
        exact
        to="/" // Add correct link here
        style={{ textDecoration: "none" }}
        className={classes.activeStyle}
      >
        <IconButton className={classes.menuIconButton}>
          <QrCode2RoundedIcon className={classes.homeIconStyles} />
        </IconButton>
      </NavLink>
      <NavLink
        exact
        to="/" // Add correct link here
        style={{ textDecoration: "none" }}
        className={classes.activeStyle}
      >
        <IconButton className={classes.menuIconButton}>
          <FormatListBulletedRoundedIcon className={classes.addIconStyles} />
        </IconButton>
      </NavLink>
      <IconButton className={classes.menuIconButton}>
        <PersonOutlineRoundedIcon className={classes.iconStyles} />
      </IconButton>
    </div>
  );
}
