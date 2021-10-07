import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: true,
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.networkStatus);
    window.addEventListener('offline', this.networkStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.networkStatus);
    window.removeEventListener('offline', this.networkStatus);
  }

  networkStatus = e => this.setState({ isOnline: e.target.navigator.onLine });

  render() {
    const { isOnline } = this.state;
    if (isOnline) {
      return <div className="status">Online</div>;
    }
    return <div className="status status_offline">Offline</div>;
  }
}

export default ConnectionStatus;
