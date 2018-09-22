import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class PersonDetails extends Component {
  state = {
    person: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(`http://api.tvmaze.com/people/${id}?embed=castcredits`).then(
      res => this.setState({ person: res.data })
    );
  }

  getPersonAge(birth) {
    var a = moment(birth, "YYYY-M-D");
    var b = moment("YYYY-M-D");
    return b.diff(a, "years");
  }

  render() {
    const { person } = this.state;
    console.log(person);
    return (
      <div className="tvguide">
        <p>
          <Link to="/">Back To Search</Link>
        </p>
        {person === null && <p>Loading ..</p>}
        {person !== null && (
          <div>
            <div className="col-4">
              {person.image !== null && (
                <img alt={person.name} src={person.image.medium} />
              )}
            </div>
            <div className="col-8">
              <h2>{person.name}</h2>
              <p>
                Gender <em>{person.gender}</em>
              </p>
              {person.deathday === null && (
                <p>
                  Age <em>{this.getPersonAge(person.birthday)}</em>
                </p>
              )}
              <p>
                Participations <em>{person._embedded.castcredits.length}</em>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PersonDetails;
