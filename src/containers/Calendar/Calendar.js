import React, { Component } from "react";

import { Card, Button, Row, Col } from "react-materialize";
import Canvas from "./Canvas";

class Calendar extends Component {
  state = {
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    currentTime: new Date(Date.now()),
    currentMonth: new Date(Date.now()).getMonth(),
    currentYear: new Date(Date.now()).getYear() + 1900,
    available: [
      {
        date: "2017-12-27T00:00:00.000Z",
        morning: false,
        afternoon: false,
        avails: this.avails
      }
    ]
  };

  componentDidMount = async () => {
    let id = this.props.currentUser.id;
    const response = await fetch(
      `https://evening-hamlet-90015.herokuapp.com/users/${id}/avails`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: localStorage.getItem("jwt")
        }
      }
    );
    const json = await response.json();
    this.setState({ available: json });
  };

  prevMonth = (e) => {
    let month = this.state.currentMonth
    let year = this.state.currentYear
    if ((month - 1) < 0) {
      month += 12
      year -= 1
    }

    let date = new Date(year, month - 1)

    this.setState({
      currentTime: date,
      currentMonth: month - 1,
      currentYear: year
    });
  };

  nextMonth = (e) => {
    let month = this.state.currentMonth
    let year = this.state.currentYear
    if ((month + 1) >= 12) {
      month -= 12
      year += 1
    }

    let date = new Date(year, month + 1)


    this.setState({
      currentTime: date,
      currentMonth: month + 1,
      currentYear: year
    });
  };

  postAvail = async newAvail => {
    let id = this.props.currentUser.id;
    const response = await fetch(
      `https://evening-hamlet-90015.herokuapp.com/users/${id}/avails`,
      {
        method: "POST",
        body: JSON.stringify(newAvail),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: localStorage.getItem("jwt")
        }
      }
    );
    const avail = await response.json();

    this.setState(() => ({
      available: [...this.state.available, avail]
    }));
  };

  putAvail = async modAvail => {
    let body = JSON.stringify(modAvail);
    let id = modAvail.id;
    let user_id = this.props.currentUser.id;
    await fetch(
      `https://evening-hamlet-90015.herokuapp.com/users/${user_id}/avails/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: localStorage.getItem("jwt")
        },
        body: body
      }
    );
    let newAvail = this.state.available.map(available => {
      if (available.id === id) {
        available = modAvail;
      }
      return available;
    });
    this.setState(() => ({
      ...this.state,
      available: newAvail
    }));
  };

  prevMonth = e => {
    let month = this.state.currentMonth;
    let year = this.state.currentYear;
    if (month - 1 < 0) {
      month += 12;
      year -= 1;
    }

    let date = new Date(year, month - 1);

    this.setState({
      currentTime: date,
      currentMonth: month - 1,
      currentYear: year
    });
  };
  nextMonth = e => {
    let month = this.state.currentMonth;
    let year = this.state.currentYear;
    if (month + 1 >= 12) {
      month -= 12;
      year += 1;
    }

    let date = new Date(year, month + 1);

    this.setState({
      currentTime: date,
      currentMonth: month + 1,
      currentYear: year
    });
  };

  render() {
    let monthName = this.state.month[this.state.currentMonth];
    return (
      <Card>
        <div className="col s12  center-align">
          <Row>
            <div className="col s12 m3">
              <Button
                onClick={this.prevMonth}
                href="#"
                id="prev-month"
                className="previous round"
              >
                &#8249;
              </Button>
            </div>
            <div className="col s12 m6 center-align">
              <h4 id="currentMonth">
                {monthName} {this.state.currentYear}
              </h4>
            </div>
            <div className="col s12 m3">
              <Button
                onClick={this.nextMonth}
                href="#"
                id="next-month"
                className="next round"
              >
                &#8250;
              </Button>
            </div>
          </Row>
          <Row>
            <Canvas
              className="center-align"
              state={this.state}
              postAvail={this.postAvail}
              putAvail={this.putAvail}
              cTime={this.state.currentTime}
              cMonth={this.state.currentMonth}
              monthName={monthName}
              isDisabled={this.props.isDisabled}
              currentUser={this.props.currentUser}
            />
          </Row>
          <Row>
            <Col s={7} m={2} className="offset-m1">
              Available in AM:
            </Col>
            <Col
              s={3}
              m={1}
              className="#fff59d yellow lighten-3 yellow-text text-lighten-3"
            >
              eas
            </Col>
            <Col s={7} m={2}>
              Available in PM:
            </Col>
            <Col
              s={3}
              m={1}
              className="#4fc3f7 light-blue lighten-2 light-blue-text text-lighten-2"
            >
              ter
            </Col>
            <Col s={7} m={2}>
              Available all day
            </Col>
            <Col
              s={3}
              m={1}
              className="#b2ff59 light-green accent-2 light-green-text text-accent-2"
            >
              egg
            </Col>
          </Row>
        </div>
      </Card>
    );
  }
}

export default Calendar;
