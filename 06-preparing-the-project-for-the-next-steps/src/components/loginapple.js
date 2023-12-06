import React, { useState } from 'react';
import AppleLogin from 'react-apple-login';
import classes from './loginapple.module.css';

const LoginWithApple = () => {
  const [clientId, setClientId] = useState('');
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const handleClientIdChange = (event) => {
    setClientId(event.target.value);
  };

  const handleAuthentication = (response) => {
    // Send the authentication response to your server for verification
    // Here, we simulate a server call with a setTimeout
    // Replace this with your actual server authentication logic

    // Simulate a server call
    setTimeout(() => {
      // On successful server authentication, set the authenticated user
      setAuthenticatedUser({
        userId: response.user,
        email: response.email,
        // Add more user details as needed
      });
    }, 1000);
  };
  return (
    <div className={classes.control}>
      <label>
        Client ID:
        <input
          type="text"
          value={clientId}
          onChange={handleClientIdChange}
        />
      </label>

      <AppleLogin
        clientId={clientId}
        redirectURI={"https://www.apple.com/"}
        responseType={"code"}
        responseMode={"query"}
        usePopup={false}
        designProp={{
          height: 30,
          width: 140,
          color: "black",
          border: false,
          type: "sign-in",
          border_radius: 15,
          scale: 1,
          locale: "en_US",
        }}
        onSuccess={handleAuthentication}
        onError={(error) => console.error('Apple Sign In Error:', error)}
      />
      
      {authenticatedUser && (
        <div>
          <p>Authenticated successfully!</p>
          <p>User ID: {authenticatedUser.userId}</p>
          <p>Email: {authenticatedUser.email}</p>
          {/* Display more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default LoginWithApple;
