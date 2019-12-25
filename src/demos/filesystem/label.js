import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import makeStyles from "@material-ui/core/styles/makeStyles";
import File from "@material-ui/icons/InsertDriveFile";
import FolderOpen from "@material-ui/icons/FolderOpen";
import FolderClosed from "@material-ui/icons/Folder";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginLeft: 4
  },
  icon: {
    width: "12px",
    height: "12px",
    marginRight: 4
  }
});
export default function FileSystemLabel({
  filename,
  fileUrl,
  variant = "file",
  expanded,
  toggleExpansion
}) {
  const classes = useStyles();
  function onClick() {
    if (fileUrl) {
      alert(`We can load a file content here from it's url ${fileUrl}`);
    } else {
      toggleExpansion();
    }
  }
  return (
    <Typography
      onClick={onClick}
      color="primary"
      component="div"
      className={classes.root}
    >
      <SvgIcon className={classes.icon}>
        {variant === "folder" && expanded && <FolderOpen />}
        {variant === "folder" && !expanded && <FolderClosed />}
        {variant === "file" && <File />}
      </SvgIcon>
      <Typography color="primary" component="span">
        {filename}
      </Typography>
    </Typography>
  );
}
