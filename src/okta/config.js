const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || '{clientId}';
const ISSUER = process.env.REACT_APP_ISSUER || 'https://{yourOktaDomain}/oauth2/default';
const REDIRECT_URI = `${window.location.origin}/login/callback`;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email','offline_access'],
    pkce: true,
    responseType: ['id_token', 'token','refresh_token']
  }
};
