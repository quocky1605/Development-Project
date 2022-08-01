import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toobar,
    marginBottom: "6em",
  },
  logo: {
    height: "6em",
  },
  logoContainer: {
    padding: "0 !important",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px !important",
    marginLeft: "50px !important",
    marginRight: "25px !important",
    textTransform: "none !important",
    height: "45px !important",
  },
  tabsContainer: {
    marginLeft: "auto !important",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    color: "#ffffffbf !important",
    marginLeft: "25px !important",
    paddingBttom: "5px !important",
    "&.Mui-selected": {
      color: "white !important",
      // borderBottom: "5px solid ",
    },
  },
}));

export default useStyles;
