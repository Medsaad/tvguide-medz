import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class SeriesDetails extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(
      `http://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast`
    ).then(res => this.setState({ show: res.data }));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({ fromShow: this.props.location });
    }
  }

  render() {
    const { show } = this.state;
    console.log(show);
    return (
      <div className="tvguide">
        <p>
          <Link to="/">Back To Search</Link>
        </p>
        {show === null && <p>Loading ..</p>}
        {show !== null && (
          <div>
            <div className="col-4">
              {show.image !== null && (
                <img alt={show.name} src={show.image.medium} />
              )}
            </div>
            <div className="col-8">
              <h2>{show.name}</h2>
              <p className="rate">
                <i className="material-icons">grade</i>
                <span>{show.rating.average}</span>
              </p>
              <p>
                <em>
                  {show.summary
                    .replace(new RegExp("<p>", "g"), "")
                    .replace(new RegExp("</p>", "g"), "")
                    .substring(0, 500)}
                </em>
              </p>
            </div>

            <div>
              <h3>Cast</h3>
              {show._embedded.cast.map(member => (
                <p key={member.person.id}>
                  <Link to={`/person/${member.person.id}`} show={show.id}>
                    {member.person.name}
                  </Link>{" "}
                  ( {member.character.name} )
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SeriesDetails;
