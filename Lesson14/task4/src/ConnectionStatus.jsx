import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  const networkStatus = e => setIsOnline(e.target.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', networkStatus);
    window.addEventListener('offline', networkStatus);

    return () => {
      window.removeEventListener('online', networkStatus);
      window.removeEventListener('offline', networkStatus);
    };
  }, []);

  if (isOnline) {
    return <div className="status">online</div>;
  }
  return <div className="status status_offline">offline</div>;
};

export default ConnectionStatus;
