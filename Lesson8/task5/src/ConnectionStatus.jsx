import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.networkStatus(true));
    window.addEventListener('offline', this.networkStatus(false));
  }

  networkStatus = status =>
    status ? this.setState({ isOnline: true }) : this.setState({ isOnline: true });

  render() {
    const { isOnline } = this.state;
    if (isOnline) {
      return <div className="status">Online</div>;
    }
    return <div className="status status_offline">Offline</div>;
  }
}

export default ConnectionStatus;
