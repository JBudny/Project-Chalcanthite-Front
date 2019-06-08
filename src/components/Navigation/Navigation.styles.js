import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  nav: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  tab: {
    minWidth: "33%",
    [theme.breakpoints.up("sm")]: {
      minWidth: "25%",
      maxWidth: "none"
    }
  }
}));

export default styles;
