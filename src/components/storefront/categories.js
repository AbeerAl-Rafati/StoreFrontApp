import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
////-----------------------------------------------////

import { connect } from "react-redux";
import { categorizedBooks } from "../../redux/actions";

///------------------------------------------------////
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function ScrollableTabsButtonAuto(props) {
  useEffect(() => {
    props.categorizedBooks("Historical Books");
  }, [props]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={props.categories.bookType}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {props.categories.map((cat) => {
            return (
              <>
                <Tab
                  key={cat.bookType}
                  label={cat.bookType}
                  {...a11yProps(0)}
                  onClick={() => {
                    props.categorizedBooks(cat.bookType);
                  }}
                />
              </>
            );
          })}
        </Tabs>
      </AppBar>
      {console.log(props)}
      <div style={{ fontSize: "50px", marginTop: "5%", textAlign: "center" }}>
        {props.activeCategory.bookType}
      </div>
      <div
        style={{
          fontSize: "25px",
          textAlign: "center",
          color: "GrayText",
        }}
      >
        {props.activeCategory.description}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.categories;
};

const mapDispatchToProps = { categorizedBooks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrollableTabsButtonAuto);
