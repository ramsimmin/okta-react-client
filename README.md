# Configure env variables

Create your .env file at the root directory of your application and add the following variables to it:

```
REACT_APP_ISSUER=https://{yourOktaDomain}/oauth2/default  
REACT_APP_CLIENT_ID={yourClientId}
REACT_APP_API_URL=http://localhost:8080/api

```

# Install dependencies
```
npm install
```  

# Run the app
```
npm start
```

Open http://localhost:3000 to view it in the browser.
Sign in with your okta credentials when prompt.