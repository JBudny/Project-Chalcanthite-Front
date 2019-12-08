// @flow

if (!process.env) {
  throw new Error('Missing environment variables');
} else {
  if (!process.env.REACT_APP_API_URL) throw new Error('Missing REACT_APP_API_URL');
  if (!process.env.REACT_APP_MODE_TOP) throw new Error('Missing REACT_APP_MODE_TOP');
  if (!process.env.REACT_APP_AUTH_ME) throw new Error('Missing REACT_APP_AUTH_ME');
  if (!process.env.REACT_APP_AUTH_FACEBOOK) throw new Error('Missing REACT_APP_AUTH_FACEBOOK');
  if (!process.env.REACT_APP_AUTH_LOGOUT) throw new Error('Missing REACT_APP_AUTH_LOGOUT');
}

export const { REACT_APP_API_URL } = process.env;
export const { REACT_APP_MODE_TOP } = process.env;
export const { REACT_APP_AUTH_ME } = process.env;
export const { REACT_APP_AUTH_FACEBOOK } = process.env;
export const { REACT_APP_AUTH_LOGOUT } = process.env;
