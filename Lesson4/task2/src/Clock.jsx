import React from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const formateTime = offset => moment(offset).format('LTS');
const formatedOffsetTime = offset => formateTime(getTimeWithOffset(offset));

class Clock extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      offset: formatedOffsetTime(this.props.offset),
    };

    setInterval(() => {
      this.setState({
        offset: formatedOffsetTime(this.props.offset),
      });
    }, 1000);
  }

  render() {
    console.log(this.state.offset);
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.offset}</div>
      </div>
    );
  }
}

export default Clock;
