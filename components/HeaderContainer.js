import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  rowHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
  },
  returnButton: {
    alignItems: "flex-start",
    padding: "1.3rem",
  },
  title: {
    fontSize: "1rem",
    color: "#000000",
    fontFamily: "Space Grotesk, sans-serif",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    lineHeight: "1rem",
    textAlign: "center",
  },
  icon: {
    fontSize: "1.5",
    color: "#000000",
    marginTop: "0.2rem",
  },
  closeButton: {
    alignItems: "center",
    padding: "1.3rem",
    marginTop: "0.2rem",
  },
  hiddenIcon: {
    width: "1.4rem",
  },
}));

export default function HeaderContainer({
  title,
  returnUrl,
  hideCancelButton,
}) {
  const classes = useStyles();

  return (
    <div className={classes.rowHeader}>
      <NavLink exact to={returnUrl} style={{ textDecoration: "none" }}>
        <IconButton className={classes.returnButton}>
          <div>
            <ArrowBackIcon className={classes.icon} />
          </div>
        </IconButton>
      </NavLink>
      <p className={classes.title}>{title}</p>
      <NavLink exact to="/" style={{ textDecoration: "none" }}>
        <IconButton
          className={classes.closeButton}
          onClick={() => handleCancel()}
        >
          <div>
            {hideCancelButton ? (
              <div className={classes.hiddenIcon}></div>
            ) : (
              <CloseIcon className={classes.icon} />
            )}
          </div>
        </IconButton>
      </NavLink>
    </div>
  );
}
