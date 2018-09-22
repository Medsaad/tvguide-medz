import React, { Component } from "react";
import Axios from "axios";
import SeriesList from "../../components/seriesList";
import TextField from "@material-ui/core/TextField";

class Series extends Component {
  state = {
    series: [],
    seriestTitle: ""
  };

  onSeriesInputChange = e => {
    this.setState({ seriesTitle: e.target.value, stillLoading: true });
    Axios.get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`).then(
      res => this.setState({ series: res.data, stillLoading: false })
    );
  };

  render() {
    const { series, seriesTitle } = this.state;
    return (
      <div className="tvguide">
        <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          fullWidth
          variant="filled"
          InputLabelProps={{
            shrink: true
          }}
          label="Find TV Series"
          margin="normal"
          onChange={this.onSeriesInputChange}
        />
        <p>
          {series.length === 0 &&
            typeof seriesTitle === "undefined" && (
              <em>Enter a series title to start search</em>
            )}
          {series.length === 0 &&
            typeof seriesTitle !== "undefined" && <em>No Tv Series found</em>}

          {series.length !== 0 &&
            seriesTitle !== "" && (
              <div>
                <SeriesList list={this.state.series} />
              </div>
            )}
        </p>
      </div>
    );
  }
}

export default Series;
