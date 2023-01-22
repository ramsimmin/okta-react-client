import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';

function Home() {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]);


  if (!authState || !userInfo) {
    return (
      <Spin />
    );
  }

  return (
    <h1>
       Welcome {userInfo.given_name} !  &#128075;
    </h1>
  );
}

export default Home;