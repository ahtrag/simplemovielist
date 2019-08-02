import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { globalStyles } from "../../utils/styles";
import { createRipple } from "../../utils/constants";

const useStyles = createUseStyles({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "16px 32px",
    cursor: "pointer",
    overflow: "hidden",
    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      "& $rippleRoot": {
        backgroundColor: "rgba(0, 0, 0, 0.1)"
      }
    }
  },
  outline: {
    border: "1px solid #9a7ba8"
  },
  rippleRoot: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%"
  }
});

const useGlobalStyles = createUseStyles(globalStyles);

const ButtonView = props => {
  const { children, type, variant, className, style, onClick } = props;
  const styles = useGlobalStyles();
  const classes = useStyles();

  const defaultStyles = [
    classes.button,
    variant === "outlined" ? classes.outline : "",
    variant === "contained" ? styles.clWhite : styles.clBlack,
    variant === "contained" ? styles.shadowLower : "",
    variant === "contained" ? styles.gradAsh : styles.bgTransparent,
    styles.rounded,
    className
  ]
    .filter(value => Boolean(value))
    .join(" ");

  return (
    <button
      type={type}
      className={defaultStyles}
      style={style}
      onClick={e => {
        createRipple(e);
        Boolean(onClick) && onClick(e);
      }}
    >
      <span className={classes.rippleRoot} />
      {children}
    </button>
  );
};

ButtonView.defaultProps = {
  type: "button",
  variant: "contained",
  className: ""
};

ButtonView.propTypes = {
  children: PropTypes.any.isRequired,

  /**
   * Type of the Button:
   * 1. button
   * 2. submit
   * 3. reset
   */
  type: PropTypes.oneOf(["button", "submit", "reset"]),

  /**
   * Variant of the Button:
   * 1. contained
   * 2. outlined
   * 3. text
   */
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with inline style
   */
  style: PropTypes.object,

  /**
   * Function that will triggered when Button is clicked
   */
  onClick: PropTypes.func
};

export default ButtonView;
