import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  topnav: {
    backgroundColor: "#333",
    overflow: "hidden"
  },
  title: {
    float: "left",
    color: "#f2f2f2",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    fontSize: "17px",
    "&:hover": {
      backgroundColor: "#ddd",
      color: "black"
    },
    "&:active": {
      backgroundColor: "#514338",
      color: "#eabb0d",
      borderRight: "1px solid #f1cd07"
    }
  }
});

const AppBar = props => {
  return (
    <div className="topnav">
      <p className="active" href="#home">
        Pokedex App
      </p>
    </div>
  );
};

AppBar.propTypes = propTypes;

export default AppBar;
