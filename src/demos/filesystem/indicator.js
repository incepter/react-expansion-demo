import React from "react";
import ArrowDown from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import ArrowRight from "@material-ui/icons/ArrowRight";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useIndicatorStyles = makeStyles({
  iconButton: {
    border: `1px solid`,
    padding: "0px"
  },
  icon: {
    width: "12px",
    height: "12px"
  }
});
export default function FileSystemIndicator({
  expanded,
  toggleExpansion,
  variant = "file"
}) {
  const classes = useIndicatorStyles();
  if (variant === "file") {
    return null; // no indicator when it's a file
  }
  return (
    <IconButton
      color="primary"
      className={classes.iconButton}
      onClick={toggleExpansion}
      size="small"
    >
      <SvgIcon className={classes.icon}>
        {expanded ? <ArrowDown /> : <ArrowRight />}
      </SvgIcon>
    </IconButton>
  );
}
