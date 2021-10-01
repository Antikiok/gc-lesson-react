import React from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const formateDate = date => moment(date).format('h:mm:ss A');

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: props.offset,
    };

    setInterval(() => {
      this.setState({
        offset: formateDate(getTimeWithOffset(this.props.offset)),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.offset}</div>
      </div>
    );
  }
}

export default Clock;
