import { Base64 } from 'js-base64';

export function generateHeader(username, password) {
  return {
    Authorization: `Basic ${Base64.encode(`${username}:${password}`)}`,
  };
}

export default {
};
