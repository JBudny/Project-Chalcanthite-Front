import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  nav: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  tab: {
    minWidth: "33.33%",
    [theme.breakpoints.up("sm")]: {
      minWidth: "33.33%",
      maxWidth: "none"
    }
  },
  notFound: {
    padding: "0.875rem",
    textAlign: "center",
    "& span": {
      fontSize: "2rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "3rem"
      }
    }
  },
  tabs: {
    "& div.MuiTabs-scroller.MuiTabs-scrollable > div": {
      justifyContent: "center"
    }
  }
}));

export default styles;
