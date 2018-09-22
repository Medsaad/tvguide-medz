import React, { Component } from "react";
import "./series.css";
import { Link } from "react-router-dom";
import ShowIcon from "../../components/ShowIcon";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

class SeriesListItem extends Component {
  render() {
    const { series } = this.props;
    return (
      <div>
        <ListItem button>
          <ListItemIcon>
            <ShowIcon />
          </ListItemIcon>
          <ListItemText inset>
            <Link button to={`/show/${series.show.id}`}>
              {series.show.name}
            </Link>
          </ListItemText>
        </ListItem>
      </div>
    );
  }
}

const SeriesList = props => (
  <div>
    <List
      component="nav"
      subheader={
        <ListSubheader component="div">
          {props.list.length} Shows Found
        </ListSubheader>
      }
    >
      {props.list.map(series => (
        <SeriesListItem series={series} key={series.show.id} />
      ))}
    </List>
  </div>
);

export default SeriesList;
