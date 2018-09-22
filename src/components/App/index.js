import React, { Component } from "react";
import "./App.css";
import Main from "../Main";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="title" color="inherit">
                TV Guide
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <Paper className="tvguide">
          <Grid container>
            <Grid item spacing={16} xs={12} sm container>
              <Main />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default App;
