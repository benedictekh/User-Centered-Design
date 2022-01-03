import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.1rem 0.8rem",
    display: "flex",
    alignItems: "center",
    width: "85vw",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "85vw",
  },
  iconButton: {
    padding: "0.8rem",
  },
}));
export default function SearchBar({ updateSearch }) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        onChange={updateSearch}
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
}
